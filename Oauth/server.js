import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import connectDB from "./src/common/config/db";
import axios from "axios";
import jwksClient from "jwks-rsa"
import jwt from "jsonwebtoken"


const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

app.get("/profile", (req, res) => {
    res.sendFile(process.cwd() + "/profile.html")
})

app.get("/api/me", (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: "Not logged in" })
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    console.log("Decoded user from token:", user)

    res.json({
      name: user.name,
      email: user.email,
      picture: user.picture
    })

  } catch (err) {
    res.status(401).json({ message: "Invalid token" })
  }
})

const DISCOVERY_URL = "https://accounts.google.com/.well-known/openid-configuration"


let oidcConfig = {}
async function loadConfig() {
    const res = await axios.get(DISCOVERY_URL)
    oidcConfig = res.data
}
await loadConfig()
console.log("OIDC Config loaded:", oidcConfig)

app.get("/auth/google", (req, res) => {
    const url = `${oidcConfig.authorization_endpoint}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`
    res.redirect(url)
})

app.get("/auth/callback", async(req, res) => {
    try {
        const {code} = req.query
        console.log("Authorization code received:", code)
        const tokenRes = await axios.post(oidcConfig.token_endpoint, null, {
            params:{
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                code,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: "authorization_code"
            }
        })
        const { id_token } = tokenRes.data
        const client = jwksClient({
        jwksUri: oidcConfig.jwks_uri
        })

        const getKey = (header, callback) => {
        client.getSigningKey(header.kid, (err, key) => {
            const signingKey = key.getPublicKey()
            callback(null, signingKey)
        })
        }

        const decoded = await new Promise((resolve, reject) => {
  jwt.verify(
    id_token,
    getKey,
    {
      audience: process.env.GOOGLE_CLIENT_ID,
      issuer: oidcConfig.issuer
    },
    (err, decoded) => {
      if (err) return reject(err)
      resolve(decoded)
    }
  )
})
        const myToken = jwt.sign(
        {
            id: decoded.sub,
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
        )

        res.cookie("token", myToken, { httpOnly: true })
        res.redirect("/profile")
        
    } catch (error) {
        console.error("Error during OAuth callback:", error);
        res.status(500).send("Internal Server Error");
    }
})


app.listen(3000, async () => {
    await connectDB();
    console.log("Server running on http://localhost:3000");
});
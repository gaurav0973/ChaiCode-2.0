import { loadOIDCConfig } from "../../common/utils/oidc.js"
import { handleGoogleAuth } from "./auth.service.js"

export async function googleLogin(req, res) {
  const OIDCconfig = await loadOIDCConfig()
  const url = `${OIDCconfig.authorization_endpoint}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`
  res.redirect(url)
}

export async function googleCallback(req, res) {
  try {
    const { code } = req.query
    console.log("Received code:", code)
    const { token } = await handleGoogleAuth(code)

    res.cookie("token", token, {
      httpOnly: true,
    })
    res.redirect("/profile")
  } catch (err) {
    console.error(err)
    res.status(500).send("Auth failed")
  }
}
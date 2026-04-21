import axios from "axios"
import jwt from "jsonwebtoken"
import { loadOIDCConfig, verifyGoogleToken } from "../../common/utils/oidc.js"

export async function handleGoogleAuth(code) {
  const OIDCconfig = await loadOIDCConfig()

  const tokenRes = await axios.post(OIDCconfig.token_endpoint, null, {
    params: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code"
    }
  })

  const { id_token } = tokenRes.data

  const decoded = await verifyGoogleToken(id_token)

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
  return { token: myToken }
}
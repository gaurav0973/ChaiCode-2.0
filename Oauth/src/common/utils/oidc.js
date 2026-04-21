import axios from "axios"
import jwt from "jsonwebtoken"
import jwksClient from "jwks-rsa"
import jose from "node-jose"

const DISCOVERY_URL = "https://accounts.google.com/.well-known/openid-configuration"

let oidcConfig = {}

export async function loadOIDCConfig() {
    const res = await axios.get(DISCOVERY_URL)
    oidcConfig = res.data
    console.log("OIDC Config loaded:", oidcConfig)
    return oidcConfig
}

export async function getJWKSClient() {
    const config = await loadOIDCConfig()
    const client = jwksClient({
        jwksUri: config.jwks_uri,
    })
    return client
}

export async function verifyGoogleToken(id_token) {
  const OIDCconfig = await loadOIDCConfig()

  // 1. Decode header to get kid
  const [headerB64] = id_token.split(".")
  const header = JSON.parse(Buffer.from(headerB64, "base64").toString())

  // 2. Load JWKS (Google certs endpoint)
  const keystore = await jose.JWK.asKeyStore(await fetch(OIDCconfig.jwks_uri).then(res => res.json()))

  // 3. Get the correct key
  const key = keystore.get(header.kid)
  if (!key) {
    throw new Error("Signing key not found")
  }

  // 4. Verify token
  const result = await jose.JWS.createVerify(key).verify(id_token)
  const payload = JSON.parse(result.payload.toString())

  // 5. Validate claims
  if (payload.aud !== process.env.GOOGLE_CLIENT_ID) {
    throw new Error("Invalid audience")
  }

  if (payload.iss !== OIDCconfig.issuer) {
    throw new Error("Invalid issuer")
  }
  if (payload.exp * 1000 < Date.now()) {
    throw new Error("Token expired")
  }
  return payload
}
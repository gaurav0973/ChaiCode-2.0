import jwt from "jsonwebtoken";


export const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_KEY_SECRET, { expiresIn: "15m" })
}

export const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_KEY_SECRET)
}

export const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_REFRESH_KEY_SECRET, { expiresIn: "1d" })
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH_KEY_SECRET)
}
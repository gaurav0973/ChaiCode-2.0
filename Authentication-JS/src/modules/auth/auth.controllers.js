import ApiResponce from "../../common/utils/api-responce.js";
import { getProfile, login, logout, register } from "./auth.service.js";

export const registerUser = async (req, res) => {
  const user = await register(req.body);
  return ApiResponce.created(res, "User registered successfully", user);
};

export const loginUser = async (req, res) => {
  const data = await login(req.body);
  const { user, accessToken, refreshToken } = data;

  // set access and refresh token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  return ApiResponce.ok(res, "User logged in successfully", {
    user,
    accessToken,
    refreshToken,
  });
};

export const getUserProfile = async (req, res) => {
  // ye kaha se aayega? => auth middleware se
  const user = await getProfile(req.user.id);
  return ApiResponce.ok(res, "Profile fetched successfully", user);
};

export const logoutUser = async (req, res) => {
    await logout(req.user.id);
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return ApiResponce.ok(res, "User logged out successfully");
}
import type {
  LoginResponse,
} from "../types/auth.types";

export function authAdapter(
  response: LoginResponse
) {
  return {
    user: response.user,

    accessToken:
      response.accessToken,

    refreshToken:
      response.refreshToken,

    expiresAt:
      response.expiresAt,
  };
}
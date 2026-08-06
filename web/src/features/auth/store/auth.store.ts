
import { create } from "zustand";

import { authStorage } from "../../../lib/authStorage";

import type { User } from "../types/auth.types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: string | null;
  isHydrated: boolean;

  login: (
    user: User,
    accessToken: string,
    refreshToken: string,
    expiresAt: string
  ) => void;

  logout: () => void;

  hydrate: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    isHydrated: false,

    login: (
      user,
      accessToken,
      refreshToken,
      expiresAt
    ) => {
      authStorage.setAccessToken(accessToken);
      authStorage.setRefreshToken(refreshToken);

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "expiresAt",
        expiresAt
      );

      set({
        user,
        accessToken,
        refreshToken,
        expiresAt,
        isHydrated: true,
      });
    },

    logout: () => {
      authStorage.clear();

      localStorage.clear()
    },

    hydrate: () => {
      const accessToken =
        authStorage.getAccessToken();

      const refreshToken =
        authStorage.getRefreshToken();

      const storedUser =
        localStorage.getItem("user");

      const expiresAt =
        localStorage.getItem("expiresAt");

      const user = storedUser
        ? JSON.parse(storedUser)
        : null;

      set({
        user,
        accessToken,
        refreshToken,
        expiresAt,
        isHydrated: true,
      });
    },
  }));

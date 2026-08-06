import { login } from "../api/auth.api";
import { authAdapter } from "../adapters/auth.adapter";

import type {
  LoginInput,
} from "../types/auth.types";

export const authRepository = {
  async login(input: LoginInput) {
    const response = await login(input);

    return authAdapter(response);
  },
};
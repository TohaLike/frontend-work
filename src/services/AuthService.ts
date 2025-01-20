import $api from "@/http";
import { AuthResponse } from "@/types";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(userData: object): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/login", userData);
  }

  static async registration(
    userData: object
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/registration", userData);
  }

  static async captcha(): Promise<AxiosResponse> {
    return $api.get("/captcha");
  }

  static async resolveCaptcha(data: object): Promise<AxiosResponse> {
    return $api.post("/resolve_captcha", data);
  }
}

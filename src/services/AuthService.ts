import $api from "@/http";
import { AuthResponse } from "@/types";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(userData: object): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/login");
  }

  static async registration(
    userData: object
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(userData);
    return $api.post("/registration", userData);
  }

  static async refresh() {
    
  }
}

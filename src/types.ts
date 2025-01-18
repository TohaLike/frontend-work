import { ReactNode } from "react";

export interface ButtonProps {
  type: "button" | "reset" | "submit";
  variant?: "contained" | "outlined" | "text";
  children?: string | number | ReactNode;
  onClick?: (action: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  [props: string]: any;
  ariaControls?: string | undefined | any;
  ariaHaspopup?: boolean | undefined | any;
  ariaExpanded?: boolean | undefined | any;
}

export interface AuthInputProps {
  type: "email" | "password" | "text";
  placeholder: string;
  name: string;
  register?: any;
  error?: boolean;
  errorText?: string;
  titleField?: string
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface CaptchaResponse {
   
}
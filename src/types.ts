export interface ButtonProps {
  type: "button" | "reset" | "submit";
  variant?: "contained" | "outlined" | "text";
  children?: string | number;
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
}
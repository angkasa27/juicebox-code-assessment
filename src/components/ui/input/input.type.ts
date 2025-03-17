import { ReactNode } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  required?: boolean;
  children?: ReactNode;
}

// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type ButtonProps = {
  as?: string | React.ElementType; // Allows for custom components  
  asChild?: boolean;  
  href? : string;
  variant?: 'primary' | 'secondary' | 'round' | 'shadow';
  backgroundColor?: string;
  size?: 'xs' | 's' | 'normal'| 'lg' | 'xlg';
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  textAlign?: string;
  margin?: string;

  label: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // children?: React.ReactNode;
}& React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & commonProps ;

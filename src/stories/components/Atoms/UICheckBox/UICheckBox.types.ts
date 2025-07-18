// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type UICheckBoxProps = {
  type? : 'basic' | 'square' | 'btn';
  variant?: 'primary' | 'secondary' | 'round' | 'shadow';
  backgroundColor?: string;
  size?: 'xs' | 's' | 'normal'| 'lg' | 'xlg';
  textAlign?: string;
  readonly?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // children?: React.ReactNode;
}& React.InputHTMLAttributes<HTMLInputElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & commonProps ;

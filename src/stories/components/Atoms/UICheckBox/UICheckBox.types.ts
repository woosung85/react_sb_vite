// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type UICheckBoxProps = {
  type? : 'basic' | 'square' | 'btn';
  variant?: 'primary' | 'secondary' | 'round' | 'shadow';
  size?: 'xs' | 's' | 'normal'| 'lg' | 'xlg';
  readonly?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  onChange?: (value: string) => void;
}& React.InputHTMLAttributes<HTMLInputElement> & commonProps ;

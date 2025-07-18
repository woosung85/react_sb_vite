// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type UITextProps = {

  as?: string | React.ElementType; // Allows for custom components
  variant?: 'h1' |'h2';
  color?: 'base' | 'white';
  textAlign?: string;

  text: string;
  onClick?: () => void;
}& React.HTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & commonProps ;

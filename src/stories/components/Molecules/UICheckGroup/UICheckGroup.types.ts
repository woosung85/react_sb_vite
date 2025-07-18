// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type CheckOption = {
  label?: string;
  value?: string;
  checked?: boolean;
}

export type UICheckGroupProps = {
  type?: 'basic' | 'square' | 'btn';
  data?: React.ReactNode[] | (CheckOption[] | string[]);
  children?: React.ReactNode;
} & commonProps ;

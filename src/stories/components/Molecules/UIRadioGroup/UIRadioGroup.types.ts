// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type radioOption = {
  label: string;
  value: string;
  checked?: boolean; // optional, for uncontrolled cases
  disabled?: boolean;
}

export type UIRadioGroupProps = {
  type?: 'basic' | 'square' | 'btn';
  data?: React.ReactNode[] | (radioOption[] | string[]);
  onChange?: (value: string) => void;
  name?: string;
  children?: React.ReactNode;
} & commonProps ;

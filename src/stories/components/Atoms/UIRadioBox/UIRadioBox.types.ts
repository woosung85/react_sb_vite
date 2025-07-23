// src/components/UIButton/UIButton.types.ts

import { type commonProps } from "../../../types/common";

export type UIRadioBoxProps = {
  type? : 'basic' | 'square' | 'btn';
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  disabled?: boolean;
} & commonProps ;

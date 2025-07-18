// src/components/UIButton/UIButton.types.ts
import React from "react";

import { type commonProps } from "../../../types/common";

export type UIBtnWrapProps = {
  variant?: 'full' | 'wrap' | 'nth';
  children?: React.ReactNode;
}& commonProps ;

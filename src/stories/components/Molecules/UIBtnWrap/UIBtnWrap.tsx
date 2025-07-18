import React from "react";
// import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import styles from './UIBtnWrap.module.scss';

import { type UIBtnWrapProps } from './UIBtnWrap.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

/** Primary UI component for user interaction */
const UIBtnWrap = React.forwardRef<HTMLElement, UIBtnWrapProps>(
  ({
  
    children,
    className,
    variant = "full",
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);
  
    return (
      <div
        className={clsx(
            spacingClassNames,
            styles.btnWrap,
            styles[`btnWrap--${variant}`],
            className 
          )}
          {...props}
      >
          {children}
      </div>
    );
  }
  
)

UIBtnWrap.displayName = 'UIBtnWrap';
export default UIBtnWrap;
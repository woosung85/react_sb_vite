import React from "react";
import clsx from "clsx";
import styles from './UIBox.module.scss';

import { type UIBoxProps } from './UIBox.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

/** Primary UI component for user interaction */
const UIBox = React.forwardRef<HTMLDivElement, UIBoxProps>(
  ({
  
    children,
    className,
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);
  
    return (
      <div
        className={clsx(
            spacingClassNames,
            styles.UiBox,
            className 
          )}
          {...props}
      >
          {children}
      </div>
    );
  }
  
)

UIBox.displayName = 'UIBox';
export default UIBox;
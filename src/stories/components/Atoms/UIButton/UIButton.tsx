import React from "react";
// import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import styles from './UIButton.module.scss';

import { type UIButtonProps } from './UIButton.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

/** Primary UI component for user interaction */
const UIButton = React.forwardRef<HTMLElement, UIButtonProps>(
  ({
    // asChild = false,
    variant = "primary",
    size = "normal",
    backgroundColor,
    label,
    href,
    leftIcon,
    rightIcon,
    // children,
    className,
    ...props
  }, ref) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);

    
    const Component = href ? 'a' : 'button';
  
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        href={href}
        className={clsx(
            spacingClassNames,
            styles.button,
            styles[`button--${variant}`],
            styles[`button--${size}`],
            className 
          )}
           style={{ backgroundColor }}
          {...props}
      >
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          {label}
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </Component>
    );
  }
  
)

UIButton.displayName = 'UIButton';
export default UIButton;
import React from "react";
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import styles from './UIButton.module.scss';

import { type ButtonProps } from './UIButton.types';
import { generateSpacingclassNameFromSpacing } from '../../../utils/ClassNameFromSpacing';

/** Primary UI component for user interaction */
const UIButton = React.forwardRef<HTMLElement, ButtonProps>(
  ({
    asChild = false,
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
    const spacingClassNames = generateSpacingclassNameFromSpacing(props);

    if (asChild && href) {
      return (
        <Slot
          ref={ref as any}
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
        </Slot>
      );

    }
    const Component = href ? 'a' : 'button';
  
    return (
      <Component
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
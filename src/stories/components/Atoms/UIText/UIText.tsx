import React from "react";
import clsx from "clsx";
import styles from './UIText.module.scss';

import { type UITextProps } from './UIText.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

/** Primary UI component for user interaction */
const UIText = React.forwardRef<HTMLElement, UITextProps>(
  ({
    as: Component = 'span',
    className,
    color = 'base',
    text,
    textAlign = 'left',
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);
    
    return (
      <Component
        className={clsx(
            spacingClassNames,
            styles.text,
            className,
            color, 
            styles[`text-${textAlign}`],
          )}
          
        {...props}
        
      >
        {text}
      </Component>
    );
  }
  
)

UIText.displayName = 'UIText';
export default UIText;
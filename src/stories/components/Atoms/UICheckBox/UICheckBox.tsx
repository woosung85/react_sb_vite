import React from "react";
// import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import styles from './UICheckBox.module.scss';

import { type UICheckBoxProps } from './UICheckBox.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

import { UIText , UIIcon } from '@/stories/components'


/** Primary UI component for user interaction */
const UICheckBox = React.forwardRef<HTMLInputElement, UICheckBoxProps>(
  ({
    type = 'basic',
    label,
    className,
    readOnly = false,
    disabled = false,
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);

    const [inputClick, setInputClick] = React.useState(false);

    const handleInputClick = () => {
      if (!readOnly && !disabled) {
        setInputClick(!inputClick);
      }
    }
    if (type === 'btn') {
     return (
        <div
        className={clsx(
            spacingClassNames,
            styles.checkbox,
            readOnly && styles['readonly'],
            disabled && styles['disabled'],
            className 
          )}
        {...props}
      >
        <label htmlFor="basicClick" className={clsx(styles.btn, inputClick && styles['checked'])} onClick={() => handleInputClick()}>
          <input
            id="basicclick"
            type="checkbox"
            readOnly={readOnly}
            disabled={disabled}
          />
          <UIText ml={6} as="span" text={label} />
        </label>
      </div>
      );
    } else {
      return (
        <div
          className={clsx(
              spacingClassNames,
              styles.checkbox,
              readOnly && styles['readonly'],
              disabled && styles['disabled'],
              className 
            )}
          {...props}
        >
          <label htmlFor="basicClick" onClick={() => handleInputClick()}>
            <input
              id="basicclick"
              type="checkbox"
              readOnly={readOnly}
              disabled={disabled}
            />
            { type === 'basic' ?  
              <UIIcon className="checkIcon" name={inputClick ? 'checkFin' : 'check'} color={inputClick ? '48ff' : '666'} size={16}/> 
              :  <UIIcon className="checkIcon" name={inputClick ? 'squareCheckFin' : 'squareCheck'} color={inputClick ? '48ff' : '666'} size={16}/> 
            }
            <UIText ml={6} as="span" text={label} />
          </label>
        </div>
      );
    } 
    
  }
)




UICheckBox.displayName = 'UICheckBox';

// UICheckBoxSquare.displayName = 'UICheckBox.Square';
// UICheckBoxBtn.displayName = 'UICheckBox.Btn';

// const UICheckBox = {
//   Basic: UICheckBoxBasic,
//   Square: UICheckBoxSquare,
//   Btn: UICheckBoxBtn,
// } as const;

export default UICheckBox;
// export type UICheckBoxVariant = keyof typeof UICheckBox;
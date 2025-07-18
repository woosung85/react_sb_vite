import React from "react";
// import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import styles from './UICheckBox.module.scss';

import { type UICheckBoxProps } from './UICheckBox.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';

import { UIText , UIIcon } from '@/stories/components'


/** Primary UI component for user interaction */
const UICheckBoxBasic = React.forwardRef<HTMLInputElement, UICheckBoxProps>(
  ({
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
        <label htmlFor="basicClick" className={styles.label} onClick={() => handleInputClick()}>
          <input
            id="basicclick"
            type="checkbox"
            readOnly={readOnly}
            disabled={disabled}
          />
          <UIIcon className="checkIcon" name={inputClick ? 'checkFin' : 'check'} size={16}/>
          <UIText ml={6} as="span" text={label} />
        </label>
      </div>
    );
  }
)

const UICheckBoxSquare = React.forwardRef<HTMLInputElement, UICheckBoxProps>(
  ({
    label,
    className,
    readOnly = false,
    disabled = false,
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);

    const [inputClick, setInputClick] = React.useState(false);
  
    return (
      <div
        className={clsx(
            spacingClassNames,
            styles.checkbox,
            readOnly && styles['readonly'] ,
            disabled && styles['disabled'],
            className 
          )}
        {...props}
      >
        <label htmlFor="basicClick" className={styles.label} onClick={() => setInputClick(!inputClick)}>
          <input id="basicclick" type="checkbox" readOnly={readOnly} disabled={disabled}/>
          <UIIcon className="checkIcon" name={inputClick ? 'checkFin' : 'check'} size={24}/>
          <UIText ml={6} as="span" text={label} />
        </label>
      </div>
    );
  }
)

UICheckBoxBasic.displayName = 'UICheckBox.Basic';
UICheckBoxSquare.displayName = 'UICheckBox.Square';

const UICheckBox = {
  Basic: UICheckBoxBasic,
  Square: UICheckBoxSquare,
} as const;

export default UICheckBox;
export type UICheckBoxVariant = keyof typeof UICheckBox;
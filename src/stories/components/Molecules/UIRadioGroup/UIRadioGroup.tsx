import React from "react";
import clsx from "clsx";
import styles from './UICheckGroup.module.scss';

import { type UIRadioGroupProps, type radioOption } from './UIRadioGroup.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';
import { UIBox, UIRadioBox } from "@/stories/components";

/** Primary UI component for user interaction */
const UIRadioGroup = React.forwardRef<HTMLInputElement, UIRadioGroupProps>(
  ({
    data= [],
    type = 'basic',
    onChange,
    name,
    children,
    className,
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);
  
    return (
      <UIBox
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        gap="5"
        className={clsx(
            spacingClassNames,
            styles.radioGroup,
            className 
          )}
          {...props}
      >
          {data && data.map((item, index) => {
            if (item == null) return null; // null 또는 undefined 방지
            if (typeof item === 'string') {
              const option: radioOption = { label: item, value: item };
              return (
                <UIRadioBox
                  type={type}
                  key={option.value ?? index}
                  name={name}
                  onChange={
                    onChange
                      ? (value: string) => onChange(value)
                      : undefined
                  }
                  {...option}
                />
              );
            }
            if (typeof item === 'object' && 'label' in item && 'value' in item) {
              const option = item as radioOption;
              return (
                <UIRadioBox
                  type={type}
                  key={option.value ?? index}
                  name={name}
                  onChange={
                    onChange
                      ? (value: string) => onChange(value)
                      : undefined
                  }
                  {...option}
                />
              );
            }
            return null;
          })}
          {children}
      </UIBox>
    );
  }
  
)

UIRadioGroup.displayName = 'UIRadioGroup';
export default UIRadioGroup;
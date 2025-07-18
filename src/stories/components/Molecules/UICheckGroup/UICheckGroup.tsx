import React from "react";
import clsx from "clsx";
import styles from './UICheckGroup.module.scss';

import { type UICheckGroupProps } from './UICheckGroup.types';
import { generateClassNamesFromCommonProps } from '../../../utils/ClassNameFromSpacing';
import { UIBox, UICheckBox } from "@/stories/components";

/** Primary UI component for user interaction */
const UICheckGroup = React.forwardRef<HTMLDivElement, UICheckGroupProps>(
  ({
    data= [],
    type = 'basic',
    children,
    className,
    ...props
  }) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);
  
    return (
      <UIBox
        className={clsx(
            spacingClassNames,
            styles.checkGroup,
            className 
          )}
          {...props}
      >
          {data && data.map((item, index) => {
            if (item == null) return null; // null 또는 undefined 방지
            return (
              <UIBox className={clsx(styles.checkList)} key={index}>
                <UICheckBox
                  type={type}
                  label={
                    typeof item === 'object' && item !== null && 'label' in item
                      ? item.label ?? ''
                      : String(item)
                  }
                  value={typeof item === 'object' && item !== null && 'value' in item ? item.value : undefined}
                  checked={typeof item === 'object' && item !== null && 'checked' in item ? item.checked : undefined}
                  readOnly={false}
                  disabled={false}
                />
              </UIBox>
            );
          })}
          {children}
      </UIBox>
    );
  }
  
)

UICheckGroup.displayName = 'UICheckGroup';
export default UICheckGroup;
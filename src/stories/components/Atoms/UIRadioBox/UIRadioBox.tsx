import React from "react";
import clsx from "clsx";
import styles from "./UIRadioBox.module.scss";

import type { UIRadioBoxProps } from "./UIRadioBox.types";
import { generateClassNamesFromCommonProps } from "../../../utils/ClassNameFromSpacing";
import { UIText, UIIcon } from "@/stories/components";

/** Primary UI component for user interaction */
const UIRadioBox = React.forwardRef<HTMLInputElement, UIRadioBoxProps>(
  (
    {
      type = "basic",
      className,
      name,
      value,
      checked,
      onChange,
      readOnly = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const spacingClassNames = generateClassNamesFromCommonProps(props);

    const [selectValue, setSelectValue] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      if (!readOnly && !disabled) {
        console.log("handleChange", e.target.value);
        console.log("2",e.target.checked);
        
        setSelectValue(e.target.value);
        
        console.log("1", selectValue);
        if (onChange) {
          onChange(e.target.value);
        }  
      }
    };

   
    const iconType = type === "basic" ? "check" : "squareCheck";
    const iconChecked = type === "basic" ? "checkFin" : "squareCheckFin";

    return (
      <div
        className={clsx(
          spacingClassNames,
          type === "btn" ? styles.radioBox : styles.checkbox,
          readOnly && styles.readonly,
          disabled && styles.disabled,
          className
        )}
        {...props}
      >
        <label
          className={clsx(type === "btn" && styles.btn, checked && styles.checked)}
        >
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
          />

          {type === "btn" ? null : (
            <UIIcon
              className="checkIcon"
              name={checked ? iconChecked : iconType}
              color={checked ? "48ff" : "666"}
              size={16}
            />
          )}

          <UIText ml={6} as="span" text={value ?? ""} />
        </label>
      </div>
    );
  }
);

UIRadioBox.displayName = "UIRadioBox";

export default UIRadioBox;

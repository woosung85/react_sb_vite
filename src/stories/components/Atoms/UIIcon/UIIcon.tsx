// src/stories/components/Atoms/UIIcon/UIIcon.tsx
import React from 'react';
import clsx from "clsx";
import styles from './UIIcon.module.scss';
import { iconsMap, type IconName } from '@/stories/components/Atoms/UIIcon/icons/icons';
import { type UIIconProps } from './UIIcon.types';

const UIIcon: React.FC<UIIconProps> = ({
  name,
  size = 16,
  className,
  style,
}) => {
  const IconComponent = iconsMap[name as IconName];

  return (
    <i
      className={clsx(className, styles.icon)}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      aria-hidden="true"
    >
      <IconComponent/>
    </i>
  );
};

export default UIIcon;

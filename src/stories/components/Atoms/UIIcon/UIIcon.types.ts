// src/stories/components/Atoms/UIIcon/UIIcon.types.ts
import { type IconName } from '@/stories/components/Atoms/UIIcon/icons/icons';

export interface UIIconProps {
  name: IconName | string; // Allowing string for flexibility, but should be one of the keys in iconsMap
  size?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

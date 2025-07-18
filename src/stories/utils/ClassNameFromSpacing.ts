
import clsx from "clsx";
import type { commonProps } from "../types/common";

export const generateSpacingClassNames = (props: commonProps): string[] => {
  const keys = ['p','px','py','pt','pb','pl','pr','m','mx','my','mt','mb','ml','mr', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH'] as const;
  return keys
    .filter((key) => props[key] !== undefined && props[key] !== null && props[key] !== '')
    .map((key) => `${key}-${props[key as keyof commonProps]}`);
};

export const generateDisplayClassNames = (props: commonProps): string[] => {
  return props.display ? [`${props.display}`] : [];
};

export const generateFlexClassNames = (props: commonProps): string[] => {
  const classNames: string[] = [];

  if (props.flexDirection) classNames.push(`flex-${props.flexDirection}`);
  if (props.flexWrap) classNames.push(`flex-${props.flexWrap}`);
  if (props.justifyContent) classNames.push(`justify-${props.justifyContent}`);
  if (props.alignItems) classNames.push(`items-${props.alignItems}`);
  if (props.alignContent) classNames.push(`content-${props.alignContent}`);
  if (props.alignSelf) classNames.push(`self-${props.alignSelf}`);
  if (props.gap !== undefined && props.gap !== null && props.gap !== '') classNames.push(`gap-${props.gap}`);

  return classNames;
};

// 위에서 만든 1~3번 유틸 함수 조합
export const generateClassNamesFromCommonProps = (props: commonProps): string => {
  return clsx(
    generateSpacingClassNames(props),
    generateDisplayClassNames(props),
    generateFlexClassNames(props),
    props.className // 사용자 정의 className
  );
};
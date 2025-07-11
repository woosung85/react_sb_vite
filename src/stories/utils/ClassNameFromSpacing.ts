
import type { commonProps } from "../types/common";

export const generateSpacingclassNameFromSpacing = (props: commonProps): string[] => {
    const spacingMap : Record<keyof commonProps, string> = {
        p: 'p',
        px: 'px',
        py: 'py',
        pt: 'pt',
        pb: 'pb',
        pl: 'pl',
        pr: 'pr',
        m: 'm',
        mx: 'mx',
        my: 'my',               
        mt: 'mt',
        mb: 'mb',
        ml: 'ml',
        mr: 'mr',   
        className: '',
        style: '',          
    };

    const classNames: string[] = [];    
    for (const key in spacingMap)  {
        const value = props[key as keyof commonProps];
        if (value && spacingMap[key as keyof commonProps]) {
            classNames.push(`${spacingMap[key as keyof commonProps]}-${value}`);
        }

    }

    return classNames;
}



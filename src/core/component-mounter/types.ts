import { ReactNode } from 'react';

// types
import { BaseViewTypesProps } from '../types/view';
import { StyledComponents } from '../styles';

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
    as?: keyof typeof StyledComponents;
    href?: string;
    asChild?: any;
}

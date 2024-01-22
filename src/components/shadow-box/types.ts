import { ReactNode } from 'react';
import { BoxType } from '../box/type';

export type ShadowBoxType = {
    children: ReactNode;
} & BoxType;

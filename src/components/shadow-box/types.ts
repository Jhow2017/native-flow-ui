import { ReactNode } from 'react';
import { DsBoxType } from '../box/type';

export type DsShadowBoxType = {
    children: ReactNode;
    boxShadow?: string;
} & DsBoxType;

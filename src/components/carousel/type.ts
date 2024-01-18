import { ReactNode } from 'react';
import { DsBoxType } from '../box/type';

export type DsCarouselTypes = {
    children: ReactNode[];
    showDots?: boolean;
    time?: number;
} & DsBoxType;

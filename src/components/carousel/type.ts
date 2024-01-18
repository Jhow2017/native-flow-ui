import { ReactNode } from 'react';

import { DsBoxType } from '../box/type';

export interface DsCarouselTypes extends DsBoxType {
    children: ReactNode[];
    showArrows: boolean;
    showDots: boolean;
    autoPlay?: boolean;
    interval?: number;
}

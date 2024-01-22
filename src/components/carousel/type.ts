import { ReactNode } from 'react';

import { BoxType } from '../box/type';

export interface CarouselTypes extends BoxType {
    children: ReactNode[];
    showArrows: boolean;
    showDots: boolean;
    autoPlay?: boolean;
    interval?: number;
}

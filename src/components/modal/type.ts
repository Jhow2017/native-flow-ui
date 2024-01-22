import { ReactNode } from 'react';
import { MotiProps } from 'moti';

// type
import type { BoxType } from '../../components/box/type';

export type AnimationType = 'top' | 'right' | 'bottom' | 'left' | 'fade';
export type TransitionTypes = 'timing' | 'spring';

export type ModalTypes = {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    animation?: AnimationType;
    transition?: {
        type: TransitionTypes;
        duration: number;
    };
} & BoxType &
    MotiProps;

import { TextTypes } from '../text/types';
import { BoxType } from '../box/type';

export type AccordionTypes = {
    title: string;
    titleStyle?: TextTypes;
    content: string;
    contentStyle?: TextTypes;
} & Omit<BoxType, 'children'>;

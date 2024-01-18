import { DsTextTypes } from '../text/types';
import { DsBoxType } from '../box/type';

export type DsAccordionTypes = {
    title: string;
    titleStyle?: DsTextTypes;
    content: string;
    contentStyle?: DsTextTypes;
} & Omit<DsBoxType, 'children'>;

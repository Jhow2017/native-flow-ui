import { TextProps, TextStyle } from 'react-native';

//
import { BreakpointValue } from './breakpointValue';
import { BaseFlexTypes } from './flex';

type TextPropsPorps = {
    [Property in keyof TextProps]?: BreakpointValue<TextProps[Property]>;
};
export type TextStyleProps = {
    [Property in keyof TextStyle]?: BreakpointValue<TextStyle[Property]>;
};

export type BaseTextTypesProps = TextPropsPorps & TextStyleProps & BaseFlexTypes;

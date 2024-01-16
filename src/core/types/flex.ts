import { FlexStyle } from 'react-native';
import { BreakpointValue } from './breakpointValue';

type FlexStyleProps = {
    [Property in keyof FlexStyle]?: BreakpointValue<FlexStyle[Property]>;
};

export type BaseFlexTypes = FlexStyleProps;

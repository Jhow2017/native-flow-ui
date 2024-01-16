import { ViewProps, ViewStyle, Platform } from 'react-native';

// hook
import { BreakpointValue } from './breakpointValue';

// types
import type { BaseFlexTypes } from './flex';
import type { BaseTextTypesProps } from './text';
import { BaseThemeTypes } from './theme';

type ViewStyleProps = {
    [Property in keyof ViewStyle]?: BreakpointValue<ViewStyle[Property]>;
};

type ViewPropss = {
    [Property in keyof ViewProps]?: BreakpointValue<ViewProps[Property]>;
};

export type BaseViewTypesProps = ViewStyleProps &
    ViewPropss &
    BaseFlexTypes &
    BaseTextTypesProps &
    BaseThemeTypes & {
        _platform?: (platform: typeof Platform) => ViewStyle;
        _css?: BreakpointValue<string>;
    };

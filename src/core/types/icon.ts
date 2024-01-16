import { ViewStyle, Platform } from 'react-native';

// types
import type { BaseThemeTypes } from './theme';
import type { BaseFlexTypes } from './flex';
import type { BreakpointValue } from './breakpointValue';

export type BaseButtonTypesProps = BaseFlexTypes &
    BaseThemeTypes & {
        _platform?: (platform: typeof Platform) => ViewStyle;
        _css?: BreakpointValue<string>;
    };

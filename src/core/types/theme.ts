import { Platform, ViewStyle } from 'react-native';
import { BreakpointValue } from './breakpointValue';

// types themes
import { Color } from './color';
import { FontFamily } from './fontFamily';

export type BaseThemeTypes = {
    backgroundColor?: BreakpointValue<Color>;
    fontFamily?: FontFamily;
    fontSize?: BreakpointValue<number> | number;
    _platform?: (platform: typeof Platform) => ViewStyle;
    _css?: BreakpointValue<string>;
};

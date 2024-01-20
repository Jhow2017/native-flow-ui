import { Dimensions } from 'react-native';

// config
import { breakpoints } from '../../config/tokens/breakpoints';

// types
import type { BreakpointValue } from '../types/breakpointValue';
type Breakpoints = typeof breakpoints;
type BreakpointKeys = keyof Breakpoints;

export const generateCustomCss = (breakpointCss: BreakpointValue<string>): string => {
    // If breakpointCss is a string, returns directly
    if (typeof breakpointCss === 'string') {
        return breakpointCss;
    }

    const screenWidth = Dimensions.get('window').width;
    let appliedStyles = '';

    // Sort the breakpoints in descending order
    const sortedBreakpoints: BreakpointKeys[] = Object.keys(breakpoints) as BreakpointKeys[];
    sortedBreakpoints.sort((a, b) => breakpoints[b] - breakpoints[a]);

    for (const breakpoint of sortedBreakpoints) {
        if (screenWidth >= breakpoints[breakpoint]) {
            if (typeof breakpointCss === 'object' && breakpointCss !== null) {
                const style = breakpointCss[breakpoint];
                if (typeof style === 'string') {
                    appliedStyles += style;
                }
            }
            break; // Stop at the first breakpoint that matches
        }
    }

    return appliedStyles;
};

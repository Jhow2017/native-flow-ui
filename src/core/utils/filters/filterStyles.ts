import { breakpoints } from '../../../config/tokens/breakpoints';
import { cssValue as defaultCssValue } from '../constants';
import { Dimensions } from 'react-native';

type Breakpoints = typeof breakpoints;
type BreakpointKeys = keyof Breakpoints;

interface Style {
    [key: string]: string | number | undefined;
}

// Helper function to check if the screen width is within the specified range
const isWidthInRange = (range: string, screenWidth: number): boolean => {
    const matches = range.match(/\:w\[(\d+),(\d+)\]/);
    if (matches && matches.length === 3) {
        const minWidth = parseInt(matches[1], 10);
        const maxWidth = parseInt(matches[2], 10);
        return screenWidth >= minWidth && screenWidth < maxWidth;
    }
    return false;
};
const createAndFilterStyles = (
    attr: any,
    currentBreakpoint: BreakpointKeys,
    customCssValues?: string[]
): any => {
    const screenWidth = Dimensions.get('window').width;
    const cssValuesToUse = customCssValues || defaultCssValue;
    let filteredStyles: Style = {};
    const breakpointKeys: BreakpointKeys[] = Object.keys(breakpoints) as BreakpointKeys[];

    for (const key in attr) {
        if (!cssValuesToUse.includes(key)) {
            continue;
        }

        const value = attr[key];
        if (value && typeof value === 'object') {
            // Check styles based on width ranges first
            let styleApplied = false;
            for (const rangeKey in value) {
                if (rangeKey.startsWith(':w') && isWidthInRange(rangeKey, screenWidth)) {
                    filteredStyles[key] = value[rangeKey];
                    styleApplied = true;
                    break;
                }
            }

            // If no width range-based styling was applied, check breakpoints
            if (!styleApplied) {
                for (let i = breakpointKeys.indexOf(currentBreakpoint); i >= 0; i--) {
                    const breakpoint = breakpointKeys[i];
                    if (value[breakpoint] !== undefined) {
                        filteredStyles[key] = value[breakpoint];
                        break;
                    }
                }
            }
        } else {
            filteredStyles[key] = value;
        }
    }

    return filteredStyles;
};

export default createAndFilterStyles;

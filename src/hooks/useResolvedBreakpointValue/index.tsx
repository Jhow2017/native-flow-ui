import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { BreakpointKeys, breakpoints } from '@ds/config/tokens/breakpoints';

export type BreakpointValue<T> = T | Partial<Record<BreakpointKeys, T>>;

export default function useResolvedBreakpointValue<T>(value: BreakpointValue<T>): T | undefined {
    const windowWidth = Dimensions.get('window').width;

    const getBreakpoint = (): BreakpointKeys => {
        if (windowWidth >= breakpoints.tvLike) return 'tvLike';
        if (windowWidth >= breakpoints.superLarge) return 'superLarge';
        if (windowWidth >= breakpoints.xl) return 'xl';
        if (windowWidth >= breakpoints.lg) return 'lg';
        if (windowWidth >= breakpoints.md) return 'md';
        if (windowWidth >= breakpoints.sm) return 'sm';
        return 'xs';
    };

    const currentBreakpoint = getBreakpoint();

    const resolvedValue = useMemo(() => {
        if (typeof value === 'object' && value !== null) {
            const breakpointValue = value as Partial<Record<BreakpointKeys, T>>;
            return breakpointValue[currentBreakpoint] ?? breakpointValue.xs;
        }

        return value;
    }, [value, currentBreakpoint]);

    return resolvedValue;
}

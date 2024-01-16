import { useMemo } from 'react';
import { Dimensions } from 'react-native';

import { BreakpointKeys, breakpoints } from '@ds/config/tokens/breakpoints';

const useBreakpoint = (): BreakpointKeys => {
    const screenWidth = Dimensions.get('window').width;

    const currentBreakpoint: BreakpointKeys = useMemo(() => {
        if (screenWidth >= breakpoints.superLarge) {
            return 'superLarge';
        } else if (screenWidth >= breakpoints.xl) {
            return 'xl';
        } else if (screenWidth >= breakpoints.lg) {
            return 'lg';
        } else if (screenWidth >= breakpoints.md) {
            return 'md';
        } else if (screenWidth >= breakpoints.sm) {
            return 'sm';
        }
        return 'xs';
    }, [screenWidth]);

    return currentBreakpoint;
};

export default useBreakpoint;

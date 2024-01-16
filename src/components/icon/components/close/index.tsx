import * as React from 'react';
import { Path } from 'react-native-svg';

import { IconProps } from '../../types';
import SvgComponent from '../../SvgComponent';

export function CloseIcon({ size, color }: IconProps) {
    return (
        <SvgComponent width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <Path d="M6 18L18 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </SvgComponent>
    );
}

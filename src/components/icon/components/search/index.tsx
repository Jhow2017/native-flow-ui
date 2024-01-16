import * as React from 'react';
import { Path } from 'react-native-svg';

import { IconProps } from '../../types';
import SvgComponent from '../../SvgComponent';

export function SearchIcon({ size, color }: IconProps) {
    return (
        <SvgComponent width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
                fill={color || 'white'}
                fillRule="evenodd"
                d="M11 .25C5.615.25 1.25 4.615 1.25 10s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S16.385.25 11 .25ZM2.75 10a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
                clipRule="evenodd"
            />
            <Path fill={color || 'white'} d="M19.53 17.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06-1.06l-4-4Z" />
        </SvgComponent>
    );
}

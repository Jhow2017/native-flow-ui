import * as React from 'react';
import { Path } from 'react-native-svg';

import { IconProps } from '../../types';
import SvgComponent from '../../SvgComponent';

export function EyeHideIcon({ size, color }: IconProps) {
    return (
        <SvgComponent width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
                fill={color || '#fff'}
                fillRule="evenodd"
                d="M22.468 4.586a.75.75 0 1 0-.936-1.172l-3.326 2.66a16.078 16.078 0 0 0-.558-.478C16.077 4.309 14.141 3.25 12 3.25c-2.14 0-4.077 1.059-5.648 2.346-1.58 1.293-2.872 2.883-3.74 4.092l-.072.1c-.523.726-.953 1.324-.953 2.212 0 .888.43 1.486.953 2.212l.071.1a24.61 24.61 0 0 0 2.101 2.558l-3.18 2.544a.75.75 0 1 0 .937 1.172l20-16ZM8.662 13.71l1.213-.97a2.25 2.25 0 0 1 3.314-2.651l1.212-.97a3.75 3.75 0 0 0-5.739 4.591Z"
                clipRule="evenodd"
            />
            <Path
                fill={color || '#fff'}
                d="m20.695 8.765-5.028 4.022A3.751 3.751 0 0 1 12 15.75h-.036l-4.416 3.532c1.32.858 2.827 1.468 4.452 1.468 2.141 0 4.077-1.059 5.648-2.346 1.58-1.293 2.872-2.883 3.74-4.092l.072-.1c.523-.726.953-1.324.953-2.212 0-.888-.43-1.486-.953-2.212l-.071-.1c-.208-.29-.44-.6-.694-.923Z"
            />
        </SvgComponent>
    );
}

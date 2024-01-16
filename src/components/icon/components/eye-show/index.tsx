import * as React from 'react';
import { Path } from 'react-native-svg';

import { IconProps } from '../../types';
import SvgComponent from '../../SvgComponent';

export function EyeShowIcon({ size, color }: IconProps) {
    return (
        <SvgComponent width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path fill={color || '#fff'} d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" />
            <Path
                fill={color || '#fff'}
                fillRule="evenodd"
                d="M6.352 5.596C7.923 4.309 9.859 3.25 12 3.25c2.141 0 4.077 1.059 5.648 2.346 1.58 1.293 2.872 2.883 3.74 4.092l.072.1c.523.726.953 1.324.953 2.212 0 .888-.43 1.486-.953 2.212l-.071.1c-.869 1.21-2.16 2.798-3.74 4.092C16.076 19.691 14.14 20.75 12 20.75s-4.077-1.059-5.648-2.346c-1.58-1.294-2.872-2.883-3.74-4.092l-.072-.1c-.523-.726-.953-1.324-.953-2.212 0-.888.43-1.486.953-2.212l.071-.1c.869-1.21 2.16-2.799 3.74-4.092ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
                clipRule="evenodd"
            />
        </SvgComponent>
    );
}

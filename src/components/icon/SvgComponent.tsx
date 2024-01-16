import React from 'react';
import { SvgComponentProps } from './types';
import Svg from 'react-native-svg';

export default function SvgComponent(props: SvgComponentProps) {
    const { children, size, ...attr } = props;
    return (
        <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...attr}>
            {children}
        </Svg>
    );
}

import React from 'react';

//
import BaseComponent from '../../core/base-component';

// types
import { TextTypes } from './types';

const Text: React.FC<TextTypes> = (props) => {
    const { children, variant, size, ...attr } = props;

    const fontSizeMapping = {
        xxlarge: 42,
        xlarge: 32,
        large: 24,
        medium: 16,
        small: 12
    };

    const fontSize = fontSizeMapping[size || 'medium'] || 16;

    return (
        <BaseComponent
            as="text"
            {...attr}
            style={attr?.style}
            fontWeight={attr?.fontWeight ?? variant === 'bold' ? 'bold' : 'normal'}
            fontSize={attr?.fontSize ?? fontSize}
        >
            {children}
        </BaseComponent>
    );
};

export default Text;

import React from 'react';
import BaseComponent from '../../core/base-component';

// config

// type
import type { FlexType } from './type';

const Flex: React.FC<FlexType> = (props) => {
    const { children, ...attr } = props;

    return (
        <BaseComponent {...attr} style={[attr.style]} flexDirection={attr?.flexDirection ?? 'row'}>
            {children}
        </BaseComponent>
    );
};

export default Flex;

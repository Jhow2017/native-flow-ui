import React from 'react';
import ComponentMounter from '../../core/component-mounter';

// config

// type
import type { DsFlexType } from './type';

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter {...attr} style={[attr.style]} flexDirection={attr?.flexDirection ?? 'row'}>
            {children}
        </ComponentMounter>
    );
};

export default DsFlex;

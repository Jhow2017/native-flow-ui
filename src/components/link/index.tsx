import React, { forwardRef } from 'react';

// types
import type { LinkRef, LinkType } from './types';

// componentMounter
import ComponentMounter from '../../core/base-component';

const Link = forwardRef<LinkRef, LinkType>((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter as="link" {...attr}>
            {children}
        </ComponentMounter>
    );
});

export default Link;

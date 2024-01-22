import React, { forwardRef } from 'react';

// types
import type { LinkRef, LinkType } from './types';

// BaseComponent
import BaseComponent from '../../core/base-component';

const Link = forwardRef<LinkRef, LinkType>((props, ref) => {
    const { children, ...attr } = props;

    return (
        <BaseComponent as="link" {...attr}>
            {children}
        </BaseComponent>
    );
});

export default Link;

import React, { forwardRef } from 'react';

// types
import type { DsLinkRef, DsLinkType } from './types';

// componentMounter
import ComponentMounter from '../../core/component-mounter';

const DsLink = forwardRef<DsLinkRef, DsLinkType>((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter as="link" {...attr}>
            {children}
        </ComponentMounter>
    );
});

export default DsLink;

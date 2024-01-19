import React from 'react';

// ds internal
import DsBox from '../box';

// types
import type { DsShadowBoxType } from './types';

const DsShadowBox: React.FC<DsShadowBoxType> = (props) => {
    const { children, ...attr } = props;
    return (
        <DsBox
            borderRadius={10}
            padding={{ sm: 24, md: 24, lg: 32 }}
            backgroundColor="#fff"
            boxShadow="0px 4px 10px blue"
            {...attr}
        >
            {children}
        </DsBox>
    );
};

export default DsShadowBox;

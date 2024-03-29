import React from 'react';

// ds internal
import Box from '../box';

// types
import type { ShadowBoxType } from './types';

const ShadowBox: React.FC<ShadowBoxType> = (props) => {
    const { children, ...attr } = props;
    return (
        <Box
            borderRadius={10}
            padding={{ sm: 24, md: 24, lg: 32 }}
            backgroundColor="#fff"
            boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.15)'}
            {...attr}
        >
            {children}
        </Box>
    );
};

export default ShadowBox;

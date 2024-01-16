import React from 'react';
import ComponentMounter from '../../core/component-mounter';
import { DsBoxType } from './type';

const DsBox: React.FC<DsBoxType> = (props) => {
    const { children, ...attr } = props;
    return <ComponentMounter {...attr}>{children}</ComponentMounter>;
};

export default DsBox;

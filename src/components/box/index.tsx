import React from 'react';
import BaseComponent from '../../core/base-component';

// types
import { BoxType } from './type';

const Box: React.FC<BoxType> = (props) => {
    const { children, ...attr } = props;

    return <BaseComponent {...attr}>{children}</BaseComponent>;
};

export default Box;

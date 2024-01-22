import React from 'react';
import { Platform } from 'react-native';

// hooks
import useBreakpoint from '../../hooks/useBreakpoint';

// utils
import { parseBoxShadow, createAndFilterStyles, filterTextStyles } from '../utils';

// types
import type { BaseComponentType } from './types';

// styles
import { StyledComponents } from '../styles';

const BaseComponent: React.FC<BaseComponentType> = (props) => {
    const { children, _platform, _css, href, as = 'view', ...attr } = props;

    // hook
    const currentBreakpoint = useBreakpoint();

    // filters
    const textPropsFilter = filterTextStyles(attr);
    const filteredFlexStyle = createAndFilterStyles(props, currentBreakpoint);
    const { boxShadow } = filteredFlexStyle;

    const platformStyles = _platform ? _platform(Platform) : {};
    const shadowStyle = boxShadow ? parseBoxShadow(boxShadow) : {};
    const additionalStyles: any = attr.style instanceof Array ? attr.style : [attr.style];

    const BaseStyleView = StyledComponents[as] || StyledComponents.view;

    return (
        <BaseStyleView
            {...textPropsFilter}
            style={[filteredFlexStyle, platformStyles, shadowStyle, ...additionalStyles]}
            _css={_css}
            href={href}
        >
            {children}
        </BaseStyleView>
    );
};

export default BaseComponent;

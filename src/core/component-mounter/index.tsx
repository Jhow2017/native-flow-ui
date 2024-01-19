import React from 'react';
import { Platform } from 'react-native';

// utils/hooks
import useBreakpoint from '../../hooks/useBreakpoint';
import filterStyles from '../utils/filters/filterStyles';
import { parseBoxShadow } from '../utils/parseBoxShadow';
import filterTextStyles from '../utils/filters/filterTextStyles';

// types
import type { ComponentMounterType } from './types';

// styles
import { StyledComponents } from '../styles';

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, href, as = 'view', ...attr } = props;

    // hook
    const currentBreakpoint = useBreakpoint();

    // filters
    const textPropsFilter = filterTextStyles(attr);
    const filteredFlexStyle = filterStyles(props, currentBreakpoint);

    const platformStyles = _platform ? _platform(Platform) : {};

    const shadowStyle = filteredFlexStyle?.boxShadow
        ? parseBoxShadow(filteredFlexStyle?.boxShadow)
        : {};
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

export default ComponentMounter;

import React from 'react';
import { Platform } from 'react-native';
// utils/hooks
import filterStyles from '../utils/filters/filterStyles';
import filterTextStyles from '../utils/filters/filterTextStyles';
import useBreakpoint from '../../hooks/useBreakpoint';

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
    const additionalStyles: any = attr.style instanceof Array ? attr.style : [attr.style];

    const BaseStyleView = StyledComponents[as] || StyledComponents.view;

    return (
        <BaseStyleView {...textPropsFilter} style={[filteredFlexStyle, platformStyles, ...additionalStyles]} _css={_css} href={href}>
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;

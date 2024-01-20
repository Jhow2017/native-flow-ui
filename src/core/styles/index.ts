import styled from 'styled-components/native';
import { ViewProps, TextProps, TouchableOpacityProps } from 'react-native';
import { Link } from 'expo-router';

import { generateCustomCss } from '../utils';
import { BreakpointValue } from '../types/breakpointValue';

interface BaseStyleViewProps {
    _css?: BreakpointValue<string>;
}

type StyledComponentType = {
    view: React.ComponentType<ViewProps & BaseStyleViewProps>;
    link: React.ComponentType<any & BaseStyleViewProps>;
    text: React.ComponentType<TextProps & BaseStyleViewProps>;
    button: React.ComponentType<TouchableOpacityProps & BaseStyleViewProps>;
    //input: React.ComponentType<TextInputProps & BaseStyleViewProps>;
};

const applyCustomStyles = (styleProps: BaseStyleViewProps) =>
    styleProps._css ? generateCustomCss(styleProps._css) : '';

export const StyledComponents: StyledComponentType = {
    view: styled.View`
        ${applyCustomStyles}
    `,
    link: styled(Link)`
        ${applyCustomStyles}
    `,
    text: styled.Text`
        ${applyCustomStyles}
    `,
    button: styled.TouchableOpacity`
        ${applyCustomStyles}
    `
    // input: styled(TextInput)`
    //     ${applyCustomStyles}
    // `,
};

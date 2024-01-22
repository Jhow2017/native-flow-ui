import React from 'react';
import { ActivityIndicator } from 'react-native';

// types
import { ButtonType } from './types';

// config variants buttons
import { buttonConfig } from './config-variants';

// hooks
import { useResolvedBreakpointValue } from '../../hooks';

// utils
import { filterTextStyles } from '../../core/utils';

// BaseComponent
import BaseComponent from '../../core/base-component';

// ds
import Icon from '../icon';
import { Text, Flex } from '../../components/';

const Button: React.FC<ButtonType> = (props) => {
    const {
        variant,
        size,
        icon,
        iconPosition,
        loading,
        theme,
        disabled,
        loadingIndicatorStyle,

        // children
        children,
        ...attr
    } = props;

    // helpers
    const resolvedSize = useResolvedBreakpointValue(size);
    const textPropsFilter = filterTextStyles(attr);

    const sizeConfig = buttonConfig.sizes[resolvedSize || buttonConfig.defaultSize];
    const backgroundColor = buttonConfig.backgroundColors[variant || 'default'];

    return (
        <BaseComponent
            as="button"
            disabled={loading || disabled}
            {...attr}
            backgroundColor={attr?.backgroundColor ?? backgroundColor}
            borderWidth={attr?.borderWidth ?? 2}
            borderColor={attr?.borderColor ?? backgroundColor}
            width={attr?.width ?? sizeConfig.width}
            height={attr?.height ?? sizeConfig.height}
            style={[attr.style, buttonConfig.styledBase]}
        >
            {loading && <ActivityIndicator style={loadingIndicatorStyle} />}
            <Flex
                flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'}
                alignItems="center"
                justifyContent="center"
                gap={8}
            >
                {icon && <Icon icon={icon} color={'#fff'} fontSize={sizeConfig.iconFontSize} />}
                <Text
                    color={'#fff'}
                    fontSize={textPropsFilter?.fontSize || sizeConfig.textFontSize}
                    {...textPropsFilter}
                >
                    {children}
                </Text>
            </Flex>
        </BaseComponent>
    );
};

export default Button;

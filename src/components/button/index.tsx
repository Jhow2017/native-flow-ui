import React from 'react';
import { ActivityIndicator } from 'react-native';

// types
import { DsButtonType } from './types';

// config variants buttons
import { buttonConfig } from './config-variants';

// hooks
import { useResolvedBreakpointValue } from '@ds/hooks';

// utils
import filterTextStyles from '@ds/core/utils/filters/filterTextStyles';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

// ds
import DsIcon from '../icon';
import { DsText, DsFlex } from '@ds/components/';

const DsButton: React.FC<DsButtonType> = (props) => {
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
        <ComponentMounter
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
            <DsFlex flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'} alignItems="center" justifyContent="center" gap={8}>
                {icon && <DsIcon icon={icon} color={'#fff'} fontSize={sizeConfig.iconFontSize} />}
                <DsText color={'#fff'} fontSize={textPropsFilter?.fontSize || sizeConfig.textFontSize} {...textPropsFilter}>
                    {children}
                </DsText>
            </DsFlex>
        </ComponentMounter>
    );
};

export default DsButton;

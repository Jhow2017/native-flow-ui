import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

//utils
import {
    transformPlaceholder,
    createAndFilterStyles,
    cssInputTextOnlyPropsValue
} from '../../core/utils';

// hooks
import useBreakpoint from '../../hooks/useBreakpoint';

//types
import { DsInputProps } from './type';

//@ds
import { Flex, Icon, Text } from '../../components';
import BaseComponent from '../../core/base-component';

const Input = forwardRef<TextInput, DsInputProps>(({ type, margin, padding, ...props }, ref) => {
    const { children, textTransform, placeholder, error, ...attr } = props;
    const { color, fontSize, fontStyle, fontWeight, fontFamily } =
        (attr.style as DsInputProps) || {};

    // hook
    const currentBreakpoint = useBreakpoint();

    //states
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // filters
    const styleFilterInput = createAndFilterStyles(attr, currentBreakpoint);
    const filteredStyles = createAndFilterStyles(props, currentBreakpoint, [
        ...cssInputTextOnlyPropsValue
    ]);

    return (
        <Flex flexDirection={'column'} alignItems={'flex-start'} margin={margin} padding={padding}>
            <BaseComponent
                position="relative"
                alignItems={'center'}
                justifyContent={'center'}
                paddingHorizontal={16}
                width={attr?.width || '100%'}
                height={attr?.height || 60}
                borderRadius={attr?.borderRadius ?? 10}
                borderWidth={attr?.borderWidth ?? 1}
                borderColor={attr?.borderColor ?? '#363535'}
                {...attr}
            >
                <Flex alignItems={'center'}>
                    <TextInput
                        {...(filteredStyles as TextInputProps)}
                        ref={ref}
                        placeholderTextColor={attr.placeholderTextColor || '#fff'}
                        placeholder={transformPlaceholder(placeholder, textTransform)}
                        secureTextEntry={type === 'password' && !showPassword}
                        style={[
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                color: color || styleFilterInput?.color || '#fff',
                                fontSize: fontSize || styleFilterInput?.fontSize || 16,
                                fontStyle: fontStyle || styleFilterInput?.fontStyle || 'normal',
                                fontWeight: fontWeight || styleFilterInput?.fontWeight || 'normal',
                                fontFamily:
                                    fontFamily ||
                                    styleFilterInput?.fontFamily ||
                                    'Inter_400Regular',
                                lineHeight: 0
                            }
                        ]}
                    />

                    {type === 'search' && (
                        <Icon
                            icon={'search'}
                            position="absolute"
                            size={'small'}
                            right={30}
                            color={'#fff'}
                        />
                    )}
                    {type === 'password' && (
                        <Icon
                            icon={showPassword ? 'eye-show' : 'eye-hide'}
                            position="absolute"
                            size={'small'}
                            right={30}
                            color={'#5B5B5B'}
                            onPress={() => setShowPassword((prev) => !prev)}
                        />
                    )}
                </Flex>
            </BaseComponent>
            {error && (
                <Text color={'red'} marginTop={12}>
                    {error}
                </Text>
            )}
        </Flex>
    );
});

export default Input;

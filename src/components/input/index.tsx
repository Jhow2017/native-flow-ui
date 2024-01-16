import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

//utils
import { transformPlaceholder } from '@ds/core/utils/transformPlaceholder';
import { cssInputTextOnlyPropsValue } from '@ds/core/utils/constants';
import filterStyles from '@ds/core/utils/filters/filterStyles';
import useBreakpoint from '@ds/hooks/useBreakpoint';

//types
import { DsInputProps } from './type';

//@ds
import { DsFlex, DsIcon, DsText } from '@ds/components';
import ComponentMounter from '@ds/core/component-mounter';

const DsInput = forwardRef<TextInput, DsInputProps>(({ type, margin, padding, ...props }, ref) => {
    const { children, textTransform, placeholder, error, ...attr } = props;
    const { color, fontSize, fontStyle, fontWeight, fontFamily } = (attr.style as DsInputProps) || {};

    // hook
    const currentBreakpoint = useBreakpoint();

    //states
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // filters
    const styleFilterInput = filterStyles(attr, currentBreakpoint);
    const filteredStyles = filterStyles(props, currentBreakpoint, [...cssInputTextOnlyPropsValue]);

    return (
        <DsFlex flexDirection={'column'} alignItems={'flex-start'} margin={margin} padding={padding}>
            <ComponentMounter
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
                <DsFlex alignItems={'center'}>
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
                                fontFamily: fontFamily || styleFilterInput?.fontFamily || 'Inter_400Regular',
                                lineHeight: 0
                            }
                        ]}
                    />

                    {type === 'search' && <DsIcon icon={'search'} position="absolute" size={'small'} right={30} color={'#fff'} />}
                    {type === 'password' && (
                        <DsIcon icon={showPassword ? 'eye-show' : 'eye-hide'} position="absolute" size={'small'} right={30} color={'#5B5B5B'} onPress={() => setShowPassword((prev) => !prev)} />
                    )}
                </DsFlex>
            </ComponentMounter>
            {error && (
                <DsText color={'red'} marginTop={12}>
                    {error}
                </DsText>
            )}
        </DsFlex>
    );
});

export default DsInput;

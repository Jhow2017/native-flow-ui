import { ReactNode } from 'react';
import type { SvgProps } from 'react-native-svg';
import { Insets, TouchableOpacityProps } from 'react-native';

// type local
import { DsTextTypes } from '../text/types';

import type { BaseButtonTypesProps } from '@ds/core/types/icon';
import { Color } from '@ds/core/types/color';

export type IconsType =
    | 'bille'
    | 'spotify'
    | 'moon'
    | 'sun'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-top'
    | 'apple-logo'
    | 'google-logo'
    | 'eye-hide'
    | 'eye-show'
    | 'more'
    | 'settings'
    | 'search'
    | 'search-active'
    | 'player'
    | 'favorite-active'
    | 'favorite-outline'
    | 'profile-active'
    | 'profile-outline'
    | 'home'
    | 'home-active'
    | 'repeate'
    | 'previous'
    | 'next'
    | 'pause'
    | 'shuffle'
    | 'more-horizontal'
    | 'close';

export type SizeIconTypes = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export const sizeMapping = {
    xxlarge: '56px',
    xlarge: '48px',
    large: '40px',
    medium: '32px',
    small: '24px',
    xsmall: '16px'
};

export type IconProps = {
    size?: SizeIconTypes | string;
    color?: Color | string;
};

export type SvgComponentProps = {
    children?: ReactNode;
} & IconProps &
    SvgProps;

export interface DsIconType extends BaseButtonTypesProps, TouchableOpacityProps {
    children?: ReactNode;
    icon: IconsType;
    size?: SizeIconTypes;
    color?: Color;
    hitSlop?: Insets;
    stylesText?: DsTextTypes;
}

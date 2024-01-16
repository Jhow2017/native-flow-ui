import { TouchableOpacityProps } from 'react-native';

// types
import type { IconsType } from '../icon/types';
import type { ComponentMounterType } from '@ds/core/component-mounter/types';
import { BreakpointValue } from '@ds/core/types/breakpointValue';

type SizeButtonType = 'small' | 'medium' | 'large' | 'xlarge';

export type DsButtonType = {
    variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'primary-dark' | 'secondary-dark' | 'tertiary-dark' | 'quaternary-dark' | 'default';
    size?: BreakpointValue<SizeButtonType>;
    icon?: IconsType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    theme?: 'light' | 'dark'; // Theme for Dark Mode support
    loadingIndicatorStyle?: any; // Style object for customizing the loading indicator
} & ComponentMounterType &
    TouchableOpacityProps;

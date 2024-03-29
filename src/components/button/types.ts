import { TouchableOpacityProps } from 'react-native';

// types
import type { IconsType } from '../icon/types';
import type { BaseComponentType } from '../../core/base-component/types';
import { BreakpointValue } from '../../core/types/breakpointValue';

type SizeButtonType = 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonType = {
    variant:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'quaternary'
        | 'primary-dark'
        | 'secondary-dark'
        | 'tertiary-dark'
        | 'quaternary-dark'
        | 'default';
    size?: BreakpointValue<SizeButtonType>;
    icon?: IconsType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    theme?: 'light' | 'dark'; // Theme for Dark Mode support
    loadingIndicatorStyle?: any; // Style object for customizing the loading indicator
} & BaseComponentType &
    TouchableOpacityProps;

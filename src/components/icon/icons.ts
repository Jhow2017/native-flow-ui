import * as Icons from './components';
import { IconsType, IconProps } from './types';

//@ts-ignore
export const ICONS: Record<IconsType, React.ComponentType<IconProps> | undefined> = {
    close: Icons?.CloseIcon,
    'eye-show': Icons?.EyeShowIcon,
    'eye-hide': Icons?.EyeHideIcon,
    search: Icons?.SearchIcon
};

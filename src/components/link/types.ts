import { BaseComponentType } from '../../core/base-component/types';
import { Link } from 'expo-router';

export type LinkRef = React.ElementRef<typeof Link>;
export type LinkType = {} & BaseComponentType;

import { ImageStyle, ImageProps } from 'react-native';
import { BreakpointValue } from './breakpointValue';

type ImagePropss = {
    [Property in keyof ImageProps]?: BreakpointValue<ImageProps[Property]>;
};

type ImageStyleProps = {
    [Property in keyof ImageStyle]?: BreakpointValue<ImageStyle[Property]>;
};

export type BaseImageStyles = ImagePropss & ImageStyleProps;

import { theme } from '../tokens';

const { lightColors, fontFamily, fontSize } = theme;

export const light = {
    colors: lightColors,
    fontFamily,
    fontSize
} as const;

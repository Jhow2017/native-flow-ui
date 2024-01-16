import { theme } from '../tokens';

const { darkColors, fontFamily, fontSize } = theme;

export const dark = {
    colors: darkColors,
    fontFamily,
    fontSize
} as const;

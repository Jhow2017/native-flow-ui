export const fontSize = {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    '2xl': 26,
    '3xl': 28,
    '4xl': 30,
    '5xl': 32,
    '6xl': 34,
    '7xl': 36,
    '8xl': 38,
    '9xl': 40,
    '10xl': 42,
    '11xl': 44,
    '12xl': 46
} as const;

export type FontSizeType = keyof typeof fontSize;

export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    superLarge: 2000,
    tvLike: 4000
} as const;

type Breakpoints = typeof breakpoints;
export type BreakpointKeys = keyof Breakpoints;

// other options of breakpoints
// xs: 0,
// sm: 320,
// md: 576,
// lg: 768,
// xl: 992,
// xxl: 1200,
// superLarge: 2000,
// tvLike: 4000,

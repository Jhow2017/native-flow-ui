export const hexToRgba = (hex: string, opacity = 1): string => {
    let r = 0,
        g = 0,
        b = 0;

    // Se for formato de 3 caracteres (#RGB)
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // Se for formato de 6 caracteres (#RRGGBB)
    else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

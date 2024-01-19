import { hexToRgba } from './hexToRgba';

const MAX_SHADOW_RADIUS = 20; // Defina um valor máximo para o raio da sombra

export const parseBoxShadow = (boxShadow: string) => {
    const boxShadowPattern = /(-?\d+px) (-?\d+px) (\d+px) ([^ ]+)(?:, (.*))?/;

    if (!boxShadowPattern.test(boxShadow)) {
        console.warn("Box shadow format is not valid. Expected format: 'Xpx Ypx Zpx Color'");
        return {};
    }

    const parts = boxShadow.match(boxShadowPattern);

    if (parts) {
        const shadowOffset = {
            width: parseFloat(parts[1]),
            height: parseFloat(parts[2])
        };
        const shadowRadius = Math.min(parseFloat(parts[3]), MAX_SHADOW_RADIUS);
        let shadowColor;

        if (parts[4].startsWith('#')) {
            shadowColor = hexToRgba(parts[4]); // Converte hexadecimal para RGBA
        } else {
            shadowColor = parts[4]; // Assume que já está em formato válido
        }

        return {
            shadowColor,
            shadowOffset,
            shadowRadius,
            shadowOpacity: 1, // Ajuste conforme necessário
            elevation: shadowRadius // Ajuste para Android
        };
    }

    return {};
};

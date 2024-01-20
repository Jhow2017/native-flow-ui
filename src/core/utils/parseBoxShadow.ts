import { Platform } from 'react-native';
import { hexToRgba } from './hexToRgba';

const MAX_SHADOW_RADIUS = 20;

export const parseBoxShadow = (boxShadow: string) => {
    const boxShadowPattern =
        /(-?\d+px)\s*(-?\d+px)\s*(\d+px)\s*(rgba\((\d+), (\d+), (\d+), (\d*\.?\d+)\)|#[\da-fA-F]{3,6}|\w+)/;

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
        let shadowColor = parts[4];

        if (shadowColor.startsWith('#')) {
            shadowColor = hexToRgba(shadowColor);
        } else if (shadowColor.startsWith('rgba')) {
            const rgbaParts = shadowColor.match(/rgba\((\d+), (\d+), (\d+), (\d*\.?\d+)\)/);
            if (rgbaParts && Platform.OS === 'android') {
                shadowColor = `rgba(${rgbaParts[1]}, ${rgbaParts[2]}, ${rgbaParts[3]}, 1)`;
            }
        }

        return {
            shadowColor,
            shadowOffset,
            shadowRadius,
            shadowOpacity: 1,
            elevation: shadowRadius
        };
    }

    return {};
};

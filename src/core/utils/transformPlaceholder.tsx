import { TextStyle } from 'react-native';

export const transformPlaceholder = (text: string | undefined, transform: TextStyle['textTransform']) => {
    if (!text) return text;

    switch (transform) {
        case 'capitalize':
            return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        default:
            return text;
    }
};

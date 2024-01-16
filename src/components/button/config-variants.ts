import { Color } from '@ds/core/types/color';

type ButtonConfig = {
    backgroundColors: {
        primary: Color;
        secondary: Color;
        tertiary: Color;
        quaternary: Color;
        'primary-dark': Color;
        'secondary-dark': Color;
        'tertiary-dark': Color;
        'quaternary-dark': Color;
        default: Color;
    };
    sizes: Record<
        string,
        {
            width: number;
            height: number;
            iconFontSize: number;
            textFontSize: number;
        }
    >;
    defaultSize: string;
    styledBase: {
        padding: number;
        borderRadius: number;
        justifyContent: string;
        alignItems: string;
        flexDirection: string;
    };
};
export const buttonConfig: ButtonConfig = {
    backgroundColors: {
        primary: 'red',
        secondary: 'blue',
        tertiary: 'green',
        quaternary: 'yellow',
        'primary-dark': 'darkred',
        'secondary-dark': 'darkblue',
        'tertiary-dark': 'darkgreen',
        'quaternary-dark': 'darkyellow',
        default: 'white'
    },
    sizes: {
        small: {
            width: 100,
            height: 40,
            iconFontSize: 15,
            textFontSize: 14
        },
        medium: {
            width: 150,
            height: 60,
            iconFontSize: 20,
            textFontSize: 16
        },
        large: {
            width: 250,
            height: 70,
            iconFontSize: 25,
            textFontSize: 18
        },
        xlarge: {
            width: 350,
            height: 80,
            iconFontSize: 30,
            textFontSize: 24
        }
    },
    defaultSize: 'medium',
    styledBase: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
};

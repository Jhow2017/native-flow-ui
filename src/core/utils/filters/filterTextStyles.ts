import { cssTextStylesAndPropsValue } from '../constants';

type CSSTextValue = (typeof cssTextStylesAndPropsValue)[number];

type TextStylesProps = Partial<Record<CSSTextValue, any>>;

export default function filterTextStyles(props: Record<string, any>): TextStylesProps {
    const filteredProps: TextStylesProps = {};

    Object.keys(props).forEach((key) => {
        if (cssTextStylesAndPropsValue.includes(key as CSSTextValue)) {
            filteredProps[key as CSSTextValue] = props[key];
        }
    });

    return filteredProps;
}

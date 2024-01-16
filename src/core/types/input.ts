import { TextInputProps } from 'react-native';

export type BaseInputTypes = {
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
} & TextInputProps;

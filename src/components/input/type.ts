import { BaseInputTypes, BaseViewTypesProps, FontFamily } from '../../core/types';

type InputTypes = 'text' | 'search' | 'date' | 'password' | 'number';

export type InputProps = BaseViewTypesProps &
    BaseInputTypes & {
        type: InputTypes;
        TypeInput?: 'flat' | 'outlined';
        size: 'small' | 'medium' | 'large';
        disabled?: string;
        error?: string;
        fontFamily?: FontFamily;
    };

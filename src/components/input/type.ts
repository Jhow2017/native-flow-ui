import { BaseInputTypes, BaseViewTypesProps, FontFamily } from '@ds/core/types';

type InputTypes = 'text' | 'search' | 'date' | 'password' | 'number';

export type DsInputProps = BaseViewTypesProps &
    BaseInputTypes & {
        type: InputTypes;
        TypeInput?: 'flat' | 'outlined';
        size: 'small' | 'medium' | 'large';
        disabled?: string;
        error?: string;
        fontFamily?: FontFamily;
    };

import type { ReactNode } from 'react';

import type { BaseViewTypesProps } from '../../core/types/view';

export type BoxType = {
    children?: ReactNode;
} & BaseViewTypesProps;

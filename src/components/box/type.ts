import type { ReactNode } from 'react';

import type { BaseViewTypesProps } from '@ds/core/types/view';

export type DsBoxType = {
    children: ReactNode;
} & BaseViewTypesProps;

import React from 'react';

//types external
import { DsIconType, sizeMapping } from './types';

// all Icons
import { ICONS } from './icons';

//components
import { DsText } from '../../components';
import ComponentMounter from '../../core/component-mounter';

const DsIcon: React.FC<DsIconType> = (props) => {
    const { fontSize, icon, size = 'small', stylesText, color, children, ...attr } = props;

    const IconComponent = ICONS[icon];
    if (!IconComponent) {
        return null;
    }

    const iconSize = fontSize ?? sizeMapping[size];
    const iconColor = (color as string) || '#000';

    return (
        <ComponentMounter as="button" {...attr} style={[attr?.style]}>
            <IconComponent size={iconSize as any} color={iconColor} />
            {children && (
                <DsText color={'#DADADA'} fontSize={17} fontWeight="700" textTransform={'capitalize'} {...stylesText}>
                    {children}
                </DsText>
            )}
        </ComponentMounter>
    );
};

export default DsIcon;

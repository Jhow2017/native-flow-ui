import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

// ds internal
import DsBox from '../box';
import DsText from '../text';
import DsIcon from '../icon';
import ComponentMounter from '../../core/component-mounter';

import { DsAccordionTypes } from './types';
const DsAccordian: React.FC<DsAccordionTypes> = (props) => {
    const { title, titleStyle, content, contentStyle, ...attr } = props;

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <DsBox {...attr}>
            <ComponentMounter
                as="button"
                justifyContent={'space-between'}
                alignItems={'center'}
                flexDirection={'row'}
                height={56}
                paddingLeft={25}
                paddingRight={18}
                backgroundColor={expanded ? '#000000' : '#808080'}
                onPress={toggleExpand}
            >
                <DsText size="medium" color={'#fff'} fontWeight="900" {...titleStyle}>
                    {title}
                </DsText>
                <DsIcon icon={expanded ? 'close' : 'close'} size={'small'} color={'#fff'} onPress={toggleExpand} />
            </ComponentMounter>

            <DsBox height={1} color={'#fff'} width="100%" />

            {expanded && (
                <DsBox padding={16} backgroundColor={'#CDCDCD'}>
                    <DsText color={'#000'} {...contentStyle}>
                        {content}
                    </DsText>
                </DsBox>
            )}
        </DsBox>
    );
};

export default DsAccordian;

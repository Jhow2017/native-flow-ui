import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

// ds internal
import Box from '../box';
import Text from '../text';
import Icon from '../icon';
import BaseComponent from '../../core/base-component';

import { AccordionTypes } from './types';
const Accordian: React.FC<AccordionTypes> = (props) => {
    const { title, titleStyle, content, contentStyle, ...attr } = props;

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <Box {...attr}>
            <BaseComponent
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
                <Text size="medium" color={'#fff'} fontWeight="900" {...titleStyle}>
                    {title}
                </Text>
                <Icon
                    icon={expanded ? 'close' : 'close'}
                    size={'small'}
                    color={'#fff'}
                    onPress={toggleExpand}
                />
            </BaseComponent>

            <Box height={1} color={'#fff'} width="100%" />

            {expanded && (
                <Box padding={16} backgroundColor={'#CDCDCD'}>
                    <Text color={'#000'} {...contentStyle}>
                        {content}
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default Accordian;

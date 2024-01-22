import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import {
    StatusBar as Status,
    setStatusBarBackgroundColor,
    setStatusBarHidden,
    setStatusBarNetworkActivityIndicatorVisible,
    setStatusBarTranslucent
} from 'expo-status-bar';

// types
import { StatusBarType } from './types';

const StatusBar: React.FC<StatusBarType> = (props) => {
    const {
        style,
        setBackgroundColor,
        setHidden,
        setNetworkActivityIndicatorVisible,
        setTranslucent,
        ...attr
    } = props;

    useEffect(() => {
        if (Platform.OS === 'android' && setBackgroundColor) {
            const [color, animated = false] = setBackgroundColor;
            setStatusBarBackgroundColor(color, animated);
        }
        if (setHidden) {
            const [hidden, animation = 'none'] = setHidden;
            setStatusBarHidden(hidden, animation);
        }
        if (Platform.OS === 'ios' && setNetworkActivityIndicatorVisible !== undefined) {
            setStatusBarNetworkActivityIndicatorVisible(setNetworkActivityIndicatorVisible);
        }
        if (Platform.OS === 'android' && setTranslucent !== undefined) {
            setStatusBarTranslucent(setTranslucent);
        }
    }, [setBackgroundColor, setHidden, setNetworkActivityIndicatorVisible, setTranslucent]);

    return <Status style={style || 'auto'} translucent {...attr} />;
};

export default StatusBar;

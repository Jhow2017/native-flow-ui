import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default Button;

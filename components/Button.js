import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const AppButton = ({onPress, title, color}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={{...styles.appButtonText, color}}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonText: {
        paddingLeft: 7,
        paddingRight: 7,
        padding: 3,
        marginTop: 8,
        fontSize: 24,
        color:'#5ac8fa'
    }
})

export default AppButton;
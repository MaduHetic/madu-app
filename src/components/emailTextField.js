import React, { useState } from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'
import { Color } from '@glossy/colors'

const EmailTextField = ({ label, value, onValueChange, placeholder }) => {

    const [error, setError] = useState('empty')

    isEmailValid = () => {
        let email = value
        let Pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        Pattern.test(String(email).toLowerCase()) ? setError('sucess') : setError('error')
    }

    return (
        <>
            <View style={[styles.container, error !== 'error' && styles.margin]}>
                <Text style={[styles.label, value && styles.labelUp]}>{label}</Text>
                <TextInput
                    style={[styles.input, error === 'sucess' && styles.inputSucess, error === 'error' && styles.inputError]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onValueChange}
                    onEndEditing={isEmailValid}
                >
                </TextInput>
            </View>
            {
                error === 'error' && (
                    <Text style={styles.error}>Adresse mail invalide</Text>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    margin: {
        marginBottom: 16
    },
    label: {
        position: "absolute",
        top: 20,
        left: 16,
        fontSize: 16,
        fontWeight: "500",
        color: Color.darkGrey
    },
    labelUp: {
        top: 8,
        fontSize: 14,
        color: Color.mediumGrey
    },
    input: {
        paddingTop: 28,
        paddingBottom: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Color.mediumGrey,
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 16,
        color: Color.dark
    },
    inputSucess: {
        borderColor: Color.primary
    },
    inputError: {
        borderColor: Color.statusError
    },
    error: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: "500",
        color: Color.statusError,
    }
})

export default EmailTextField
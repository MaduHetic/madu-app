import React, { useState } from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'
import { Color } from '@glossy/colors'

const PasswordTextField = ({ label, value, onValueChange, placeholder }) => {

    const [error, setError] = useState('empty')

    isPasswordValid = () => {
        let password = value
        let Pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        Pattern.test(String(password)) ? setError('sucess') : setError('error')
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
                    onEndEditing={isPasswordValid}
                    secureTextEntry
                >
                </TextInput>
            </View>
            {
                error === 'error' && (
                    <Text style={styles.error}>Mot de passe invalide</Text>
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
        color: Color.statusError
    }
})

export default PasswordTextField
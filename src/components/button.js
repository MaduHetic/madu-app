import React from "react"
import { TouchableHighlight, Text, StyleSheet } from "react-native"

import { Color } from "@glossy/colors"

const Button = ({ onPress, text, color, underlayColor, outline, disabled }) => {

    const buttonStyles = [styles.button]
    const textStyles = [styles.text]

    if (outline) {
        buttonStyles.push(styles.buttonOutline)
    }

    if (disabled) {
        buttonStyles.push(styles.buttonDisabled)
    }

    if (color == "blue") {
        buttonStyles.push(styles.buttonPrimary)
        textStyles.push(styles.textWhite)
        underlayColor = "#6074D4"
    }

    if (color == "green") {
        buttonStyles.push(styles.buttonSuccess)
        textStyles.push(styles.textWhite)
        underlayColor = ""
    }

    if (color == "red") {
        buttonStyles.push(styles.buttonError)
        textStyles.push(styles.textWhite)
        underlayColor = ""
    }

    return (
        <TouchableHighlight
            style={buttonStyles}
            color={color}
            underlayColor={underlayColor}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={textStyles}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 12,
        paddingVertical: 20,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: Color.lightGrey,
        borderColor: Color.lightGrey,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    buttonDisabled: {
        opacity: 0.4
    },
    buttonPrimary: {
        backgroundColor: Color.primary,
        borderColor: Color.primary
    },
    buttonSuccess: {
        backgroundColor: Color.statusSuccess,
        borderColor: Color.statusSuccess
    },
    buttonError: {
        backgroundColor: Color.statusError,
        borderColor: Color.statusError
    },
    text: {
        alignSelf: 'center',
        color: Color.darkGrey,
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        textTransform: 'uppercase'
    },
    textWhite: {
        color: Color.white
    }
})

export default Button

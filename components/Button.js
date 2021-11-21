import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native'

const Button = ({title, style, titleStyle, icon, imgSrc, iconStyle}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.buttonContainer, style]}>
                {icon ? <Image source={imgSrc} style={iconStyle}/> : null}
                <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer:{
        width:100,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#bf3330",
        borderRadius:8,
        marginRight:10,
        flexDirection:"row"
    },
    buttonTitle:{
        fontSize:16,
        fontWeight:"500",
        color:"white"
    }
})

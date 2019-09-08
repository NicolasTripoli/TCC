import React, { Component } from 'react'
import { StyleSheet , Text, View } from 'react-native'
import { black } from 'ansi-colors'

export default class App extends Component {
    render() {
        return (
            <View>
                <Text style={style.text}> Olá Mundo </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        backgroundColor: 'black',
        fontSize: 40

    }
})

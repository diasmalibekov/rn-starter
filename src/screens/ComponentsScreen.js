import React from 'react'
import { Text, StyleSheet, View} from 'react-native'

const ComponentsScreen  = () => {
    const name = 'Dasha'
    const greeting = `My name is ${name}`
    return <View>
        <Text style={styles.firstLineStyle}>{name} greeting everyone</Text>
        <Text style={styles.secondLineStyle}>Hello, my name is {name}</Text>
        </View>

}

const styles = StyleSheet.create({
    firstLineStyle: {
        fontSize: 45
    },
    secondLineStyle: {
        fontSize: 20
    }

})

export default ComponentsScreen

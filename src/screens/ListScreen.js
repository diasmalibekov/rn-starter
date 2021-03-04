import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'friend 1', age : 'Age 23'},
        {name: 'friend 2', age : 'Age 24'},
        {name: 'friend 3', age : 'Age 25'},
        {name: 'friend 4', age : 'Age 26'},
        {name: 'friend 5', age : 'Age 27'},
        {name: 'friend 6', age : 'Age 28'},
        {name: 'friend 7', age : 'Age 29'},
        {name: 'friend 8', age : 'Age 21'},
        {name: 'friend 9', age : 'Age 22'}
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.verticalMargin}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 50
    },
})

export default ListScreen

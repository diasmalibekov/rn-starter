import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'friend #1'},
        {name: 'friend #2'},
        {name: 'friend #3'},
        {name: 'friend #4'},
        {name: 'friend #5'},
        {name: 'friend #6'},
        {name: 'friend #7'},
        {name: 'friend #8'},
        {name: 'friend #9'}
    ]

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.verticalMargin}>{item.name}</Text>
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

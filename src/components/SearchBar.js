import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

export default function SearchBar({
    onSearch = () => {},
}) {
    const [searchText, setSearchText] = useState("")
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={searchText} onChangeText={t => setSearchText(t)}/>
      <TouchableOpacity style={styles.touchable} onPress={() => onSearch(searchText)}>
        <Text style={styles.touchableText}>Search</Text>
       </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        backgroundColor: '#CCC',
        flex: 1,
        height: 40,
        borderRadius: 10,
        padding: 10,
    },
    touchable: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableText: {
        color: 'blue',
    },
});

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function UserListItem({
    user,
    onDelete = () => {},
}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: user?.picture?.thumbnail}} style={styles.image} />
      <View style={styles.userInfoContainer}>
        <Text>{`${user?.name?.first} ${user?.name?.last}`}</Text>
        <Text>{`${user?.location?.country}`}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text> 
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    userInfoContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonText: {
        color: 'blue',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});
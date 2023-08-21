import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Menu({
    title = 'Users',
    onSort,
    onReset,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSort} style={styles.touchable}>
        <Text style={styles.touchableText}>Sort</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity onPress={onReset} style={styles.touchable}>
        <Text style={styles.touchableText}>Restart</Text>
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    touchable: {
    },
    touchableText: {
        color: 'blue',
    },
});

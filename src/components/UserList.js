import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import UserListItem from './UserListItem';

export default function UserList({
    data = [],
    onDelete = () => {},
}) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={(flatListItem, i) => {
            return (
            <UserListItem user={flatListItem.item} key={i} onDelete={() => {
                onDelete(flatListItem.item)
            }}/>
            )
        }
        }        
      />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
    },
});
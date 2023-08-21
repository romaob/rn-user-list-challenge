import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import UserList from '../components/UserList'
import { apiFetchUsers } from '../utils/api'
import SearchBar from '../components/SearchBar'

export default function Home() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function callAPI() {
      setLoading(true);
      apiFetchUsers().then((data) => {
          setUsers(data?.results)
      }).finally(() => {
          setLoading(false)
      })
    }

    function onSortHandler() {
        const newList = [...users].sort((a, b) => {
            return a.location.country.localeCompare(b.location.country);
        })
        setUsers(newList);
    }

    function onResetHandler() {
        callAPI();
    }

    function onDeleteHandler(item) {
        const newList = [...users].filter((user) => {
            return user.email !== item.email
        });
        setUsers(newList);
    }

    function onSearchHandler(searchText) {
        const newList = [...users].filter((user) => {
            return user.location.country.includes(searchText)
        });
        setUsers(newList);
    }

    useEffect(() => {
      callAPI();
    }, [])

    if (!loading){
        return (
          <View style={styles.container}>
              <Menu onSort={onSortHandler} onReset={onResetHandler}/>
              <SearchBar onSearch={onSearchHandler} />
              <UserList data={users} onDelete={onDeleteHandler}/>
          </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
})
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/search/BottomTabs'
import SearchInput from '../components/search/SearchInput'


const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <SearchInput />
    <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
})

export default SearchScreen
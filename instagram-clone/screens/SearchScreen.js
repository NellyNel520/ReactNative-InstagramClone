import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/search/BottomTabs'


const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'white'}}>SearchScreen</Text>
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
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/search/BottomTabs'
import Header from '../components/profile/Header'


const ProfileScreen = ({navigation, route}) => {
  const { userId } = route.params

  // firebase call to get username
  


 
  return (
    <SafeAreaView style={styles.container}>
      <Header userId={userId} navigation={navigation}/>

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
export default ProfileScreen
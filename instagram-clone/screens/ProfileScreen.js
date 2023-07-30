import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/profile/Header'

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BottomTabs navigation={navigation} />
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
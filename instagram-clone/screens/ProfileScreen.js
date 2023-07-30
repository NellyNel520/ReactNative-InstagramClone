import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/profile/Header'
import SubHeader from '../components/profile/SubHeader'
import Bio from '../components/profile/Bio'
import Buttons from '../components/profile/Buttons'


const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader />
      <Bio />
      <Buttons />
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
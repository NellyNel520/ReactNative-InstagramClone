import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/search/BottomTabs'
import Header from '../components/profile/Header'
import { ScrollView } from 'react-native-gesture-handler'
import SubHeader from '../components/profile/SubHeader'


const ProfileScreen = ({navigation, route}) => {
  const { userId } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header userId={userId} navigation={navigation}/>
      <ScrollView>
        <SubHeader userId={userId}/>
      </ScrollView>

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
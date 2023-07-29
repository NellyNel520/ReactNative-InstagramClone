import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'white'}}>ProfileScreen</Text>
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
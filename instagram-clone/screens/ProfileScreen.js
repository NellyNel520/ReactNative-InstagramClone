import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/profile/BottomTabs'
import Header from '../components/profile/Header'
import SubHeader from '../components/profile/SubHeader'
import Bio from '../components/profile/Bio'
import Buttons from '../components/profile/Buttons'

import PostGrid from '../components/profile/PostGrid'
import { ScrollView } from 'react-native-gesture-handler'

const ProfileScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<ScrollView>
				<SubHeader />
				<Bio />
				<Buttons />

				<PostGrid navigation={navigation} />
			</ScrollView>
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

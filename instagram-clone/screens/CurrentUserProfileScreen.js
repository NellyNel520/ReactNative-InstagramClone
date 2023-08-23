import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from '../components/currentUserProfile/BottomTabs'
import Header from '../components/currentUserProfile/Header'
import SubHeader from '../components/currentUserProfile/SubHeader'
import Bio from '../components/currentUserProfile/Bio'
import Buttons from '../components/currentUserProfile/Buttons'

import PostGrid from '../components/currentUserProfile/PostGrid'
import { ScrollView } from 'react-native-gesture-handler'

const CurrentUserProfileScreen = ({ navigation }) => {
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

export default CurrentUserProfileScreen

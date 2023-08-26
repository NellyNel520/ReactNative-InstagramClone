import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import BottomTabs from '../components/search/BottomTabs'
import Header from '../components/profile/Header'
import { ScrollView } from 'react-native-gesture-handler'
import SubHeader from '../components/profile/SubHeader'
import Bio from '../components/profile/Bio'
import Buttons from '../components/profile/Buttons'
import { db, firebase } from '../firebase'
import PostGrid from '../components/profile/PostGrid'

const ProfileScreen = ({ navigation, route }) => {
	const { userId } = route.params
	const [user, setUser] = useState({})

	useEffect(() => {
		const getUser = () => {
			// may need to change doc ref from uid to user email to be consistent
			const docRef = db.collection('users').doc(userId)
			const unsubscribe = docRef
				.get()
				.then((doc) => {
					if (doc.exists) {
						console.log('Document data:', doc.data())
						setUser(doc.data())
					} else {
						console.log('No such document!')
					}
				})
				.catch((error) => {
					console.log('Error getting document:', error)
				})
			return unsubscribe
		}
		getUser()
	}, [])

	

	return (
		<SafeAreaView style={styles.container}>
			<Header user={user} navigation={navigation} />
			<ScrollView>
				<SubHeader user={user} userId={userId} />
				<Bio user={user} />
				<Buttons
					navigation={navigation}
					user={user}
					userId={userId}
				/>
				<PostGrid userId={userId} navigation={navigation}/>

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

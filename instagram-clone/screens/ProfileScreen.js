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
						// console.log('Document data:', doc.data())
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

	

	// const handleFollow = (user) => {
	// 	const currentFollowStatus = !user.followers_by_users.includes(
	// 		firebase.auth().currentUser.email
	// 	)

	// 	db.collection('users')
	// 		.doc(user.email)
	// 		.update({
	// 			followers_by_users: currentFollowStatus
	// 				? firebase.firestore.FieldValue.arrayUnion(
	// 						firebase.auth().currentUser.email
	// 				  )
	// 				: firebase.firestore.FieldValue.arrayRemove(
	// 						firebase.auth().currentUser.email
	// 				  ),
	// 		})
	// 		.then(() => {
	// 			console.log('Successfully updated !!!')
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error updating document: ', error)
	// 		})
	// }

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

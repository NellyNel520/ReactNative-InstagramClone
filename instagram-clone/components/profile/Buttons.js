import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, firebase } from '../../firebase'

const Buttons = ({ user, navigation, userId }) => {
	const [followers, setFollowers] = useState([])
	const [following, setFollowing] = useState(false)

	const currentUser = firebase.auth().currentUser.email

	const getFollowers = async () => {
		const docRef = db.collection('users').doc(userId).collection('followers')
		const subscribe = await docRef.onSnapshot((snapshot) => {
			setFollowers(
				snapshot.docs.map(
					(follower) => follower.id
					// ...follower.data(),}
				)
			)
		})

		return subscribe
	}


	useEffect(() => {
		getFollowers()
	}, [])

	// follow works !!!
	const handleFollow = (userId) => {
		db.collection('users')
			.doc(userId)
			.collection('followers')
			.doc(firebase.auth().currentUser.email)
			.set({})

			.then(() => {
				console.log('Successfully updated !!!')
				navigation.navigate('ProfileScreen', { userId: userId })
			})
			.catch((error) => {
				console.error('Error updating document: ', error)
			})
	}

	const handleUnFollow = (userId) => {
		db.collection('users')
			.doc(userId)
			.collection('followers')
			.doc(firebase.auth().currentUser.email)
			.delete()

			.then(() => {
				console.log('Successfully deleted follow !!!')
				navigation.navigate('ProfileScreen', { userId: userId })
			})
			.catch((error) => {
				console.error('Error deleting document: ', error)
			})
	}

	const FollowButton = (userId) => (
		<TouchableOpacity
			style={styles.follow}
			onPress={() => handleFollow(userId)}
		>
			<Text style={styles.buttonText}>Follow</Text>
		</TouchableOpacity>
	)

	const FollowingButton = () => (
		<TouchableOpacity
			style={styles.following}
			onPress={() => handleUnFollow(userId)}
		>
			<Text style={styles.buttonText}>Following</Text>
		</TouchableOpacity>
	)

	return (
		<View style={styles.buttonContainer}>
			{/* follow or following */}

			{followers.includes(currentUser) ? <FollowingButton /> : <FollowButton />}


			{/* message */}
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Message</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.iconButton}>
				<Image
					style={{ width: 30, height: 30 }}
					source={{
						uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-add-user-instagram-flatart-icons-outline-flatarticons.png',
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 40,
		flexDirection: 'row',
		marginHorizontal: 20,
		justifyContent: 'space-between',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
		backgroundColor: '#5A5A5A',
		width: 165,
		marginRight: 10,
	},
	follow: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
		backgroundColor: '#0080FE',
		width: 165,
		marginRight: 10,
	},
	following: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
		backgroundColor: '#5A5A5A',
		width: 165,
		marginRight: 10,
	},
	iconButton: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
		backgroundColor: '#5A5A5A',
		padding: 5,
	},
	buttonText: {
		fontWeight: 600,
		color: '#fff',
		fontSize: 18,
	},
})

export default Buttons

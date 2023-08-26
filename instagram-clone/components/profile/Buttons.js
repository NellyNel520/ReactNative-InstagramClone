import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, firebase } from '../../firebase'

const Buttons = ({ user, navigation, userId }) => {
	// const [following, setFollowing] = useState('')

	const handleFollow = (user) => {
		let currentFollowStatus = !user.followers_by_users.includes(
			firebase.auth().currentUser.email
		)

		db.collection('users')
			.doc(user.email)
			.update({
				followers_by_users: currentFollowStatus
					? firebase.firestore.FieldValue.arrayUnion(
							firebase.auth().currentUser.email
					  )
					: firebase.firestore.FieldValue.arrayRemove(
							firebase.auth().currentUser.email
					  ),
			})
			.then(() => {
				console.log('Successfully updated !!!')
				navigation.navigate('ProfileScreen', { userId: userId })
			})
			.catch((error) => {
				console.error('Error updating document: ', error)
			})
	}

	const Follow = () => (
		<TouchableOpacity style={styles.follow}>
			<Text style={styles.buttonText}>Follow</Text>
		</TouchableOpacity>
	)

	const UnFollow = () => (
		<TouchableOpacity style={styles.following}>
			<Text style={styles.buttonText}>Following</Text>
		</TouchableOpacity>
	)

	return (
		<View style={styles.buttonContainer}>
			{/* follow or following */}
			<TouchableOpacity
				onPress={() => handleFollow(user)}
				style={
					// followStatus
					styles.following
					// : styles.follow
				}
			>
				<Text style={styles.buttonText}>Follow</Text>
			</TouchableOpacity>

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

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

const Header = ({ navigation, userId }) => {
	const [username, setUsername] = useState('')

	const getUsername = () => {
		// may need to change doc ref from uid to user email to be consistent
		const docRef = db.collection('users').doc(userId)
		const unsubscribe = docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					// console.log('Document data:', doc.data())
					setUsername(doc.data().username)
				} else {
					console.log('No such document!')
				}
			})
			.catch((error) => {
				console.log('Error getting document:', error)
			})
		return unsubscribe
	}

	useEffect(() => {
		getUsername()
		console.log(username)
	}, [])

	return (
		<View style={styles.container}>
			{/* back arrow */}
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image
					source={{ uri: 'https://img.icons8.com/ios/90/ffffff/back--v1.png' }}
					style={{ width: 30, height: 30 }}
				/>
			</TouchableOpacity>
			{/* username */}
			<Text style={styles.username}>{username}</Text>
			{/* bell & 3 dots */}
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity>
					<Image
						// source={{uri: 'https://img.icons8.com/carbon-copy/100/ffffff/bell--v1.png'}}
						source={{
							uri: 'https://img.icons8.com/material-outlined/24/ffffff/filled-appointment-reminders.png',
						}}
						style={{ width: 30, height: 30 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={{
							uri: 'https://img.icons8.com/material-outlined/24/ffffff/more.png',
						}}
						style={{ width: 30, height: 30 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	username: {
		color: 'white',
		fontWeight: 700,
    fontSize: 20,
	},
})

export default Header

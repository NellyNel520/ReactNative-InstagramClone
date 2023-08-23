import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

const Bio = ({ userId }) => {
	const [name, setName] = useState('')
	const [bio, setBio] = useState('')

	const getUserInfo = () => {
		// may need to change doc ref from uid to user email to be consistent
		const docRef = db.collection('users').doc(userId)
		const unsubscribe = docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					// console.log('Document data:', doc.data())
					setName(doc.data().name)
					setBio(doc.data().bio)
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
		getUserInfo()
	}, [])

	return (
		<View style={styles.container}>
			{/* Name */}
      <Text style={styles.name}>{name}</Text>
			{/* Bio */}
      <Text style={styles.bio}>{bio}</Text>

		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, marginHorizontal: 10, minHeight: 80
    
  },
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 600,
	},
	bio: {
		color: 'white',
		marginTop: 5,
		fontSize: 16,
		fontWeight: 500,
	},
})

export default Bio

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase, db } from '../../firebase'

const Bio = () => {
	const [name, setName] = useState('')
	const [bio, setBio] = useState('')

	const getName = () => {
		// may need to change doc ref from uid to user email to be consistent
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('users').doc(user)
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
		getName()
		console.log(name)
		// console.log(profilePic)
	}, [])

	return (
		<View style={{marginTop: 10, marginHorizontal: 10}}>
			{/* Name */}
			<Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>
				{name}
			</Text>
			{/* Bio / about section max character limit 150 copy from caption section in post upload to update/ add bio form field*/}
			<Text style={{color: 'white', marginTop: 5, fontSize: 16, fontWeight: 500}}>
				{bio}
			</Text>
		</View>
	)
}

export default Bio

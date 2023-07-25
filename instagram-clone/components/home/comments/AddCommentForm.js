import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { firebase, db } from '../../../firebase'


const uploadCommentSchema = Yup.object().shape({
	comment: Yup.string().max(2200, 'Comment has reached the character limit'),
})

const AddCommentForm = () => {
  const [username, setUsername] = useState('')
	const [profilePic, setProfilePic] = useState('')

  const getUsername = () => {
		// may need to change doc ref from uid to user email to be consistent 
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('users').doc(user)
		const unsubscribe = docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					// console.log('Document data:', doc.data())
					setUsername(doc.data().username)
					setProfilePic(doc.data().profile_picture)
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
		console.log(profilePic)
	}, [])

  return (
    <View>
      <Text>AddCommentForm</Text>
    </View>
  )
}

export default AddCommentForm
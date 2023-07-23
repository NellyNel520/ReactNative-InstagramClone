import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'

import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'
import { firebase, db } from '../../firebase'

const PLACEHOLDER_IMG =
	'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg'

const uploadPostSchema = Yup.object().shape({
	imageUrl: Yup.string().url().required('A URL is required'),
	caption: Yup.string().max(2200, 'Caption has reached the character limit'),
})

const AddPostForm = ({navigation}) => {
	const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
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


	const uploadPostToFirebase = (imageUrl, caption) => {
		const unsubscribe = db
			.collection('posts')
			.add({
				imageUrl: imageUrl,
				user: username,
				profile_picture: profilePic,
				owner_uid: firebase.auth().currentUser.uid,
				owner_email: firebase.auth().currentUser.email,
				caption: caption,
				createdAt: new Date(),
				likes_by_users: [],
			})
			.then(() => navigation.goBack())

		return unsubscribe
	}

	return (
		<Formik
      initialValues={{ caption: '', imageUrl: '' }}
			onSubmit={(values) => {
				// console.log(values)
				// console.log('Your Post was submitted successfully 🎉')
				// navigation.goBack()
				uploadPostToFirebase(values.imageUrl, values.caption)
				
			}}
			validationSchema={uploadPostSchema}
			validateOnMount={true}
    >

			{({
				handleBlur,
				handleChange,
				handleSubmit,
				values,
				errors,
				isValid,
			}) => (
				<>
					<View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
						<Image
							source={{
								uri: validUrl.isUri(thumbnailUrl)
									? thumbnailUrl
									: PLACEHOLDER_IMG,
							}}
							style={{ width: 100, height: 100 }}
						/>
						<View style={{ flex: 1, marginLeft: 12 }}>
							<TextInput
								style={{ color: 'white', fontSize: 20 }}
								placeholder="Write a Caption"
								placeholderTextColor="gray"
								multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
								value={values.caption}
							/>
						</View>
					</View>

					<Divider width={0.2} orientation="vertical" />
					<TextInput
						onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
						style={{ color: 'white', fontSize: 18 }}
						placeholder="Enter Image Url"
						placeholderTextColor="gray"
						onChangeText={handleChange('imageUrl')}
						onBlur={handleBlur('imageUrl')}
						value={values.imageUrl}
					/>
					{errors.imageUrl && (
						<Text style={{ fontSize: 10, color: 'red' }}>
							{errors.imageUrl}
						</Text>
					)}

          <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
				</>
			)}
		</Formik>
	)
}

export default AddPostForm

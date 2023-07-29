import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
import Post from '../components/home/Post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { firebase, db } from '../firebase'

const HomeScreen = ({ navigation }) => {
	const [posts, setPosts] = useState([])
	const [profilePic, setProfilePic] = useState('')

	const getProfilePic = () => {
		// may need to change doc ref from uid to user email to be consistent
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('users').doc(user)
		const unsubscribe = docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
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
		getProfilePic()
		// console.log(username)
		console.log(profilePic)
	}, [])

	useEffect(() => {
		db.collectionGroup('posts')
		.onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })))
		})
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Stories />

			<ScrollView>
				{posts.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</ScrollView>

			<BottomTabs profilePic={profilePic} icons={bottomTabIcons} navigation={navigation} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
})

export default HomeScreen

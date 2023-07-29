import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
import Post from '../components/home/Post'
import BottomTabs from '../components/home/BottomTabs'
import { firebase, db } from '../firebase'

const HomeScreen = ({ navigation }) => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		db.collectionGroup('posts').onSnapshot((snapshot) => {
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

export default HomeScreen

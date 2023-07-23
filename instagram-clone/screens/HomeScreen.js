import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
import Post from '../components/home/Post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Stories />

			<ScrollView>
				{POSTS.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</ScrollView>

			<BottomTabs bottomTabIcons={bottomTabIcons}/>
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

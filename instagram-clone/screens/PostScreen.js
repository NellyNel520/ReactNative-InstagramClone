import {
	View,
	Text, 
	SafeAreaView, 
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native'
import React from 'react'
import PostHeader from '../components/currentUserProfile/PostHeader'
import Post from '../components/currentUserProfile/Post'
import BottomTabs from '../components/currentUserProfile/BottomTabs'

const PostScreen = ({ navigation, route }) => {
	const { username, post } = route.params
	return (
		<SafeAreaView style={styles.container}>
			<PostHeader navigation={navigation} username={username} />
			<Post post={post} />
			<BottomTabs />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
})

export default PostScreen

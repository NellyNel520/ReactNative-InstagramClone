import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import PostHeader from '../components/posts/PostHeader'

const PostScreen = ({ navigation, route }) => {
  const { username, postId } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<PostHeader navigation={navigation} username={username}/>
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

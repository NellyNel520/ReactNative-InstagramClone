import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import PostHeader from '../components/profile/posts/PostHeader'
import Post from '../components/profile/posts/Post';
import BottomTabs from '../components/profile/BottomTabs';

const PostScreen = ({ navigation, route }) => {
  const { username, post } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<PostHeader navigation={navigation} username={username}/>
      <Post post={post}/>
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

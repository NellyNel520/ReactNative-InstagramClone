import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
	{
		name: 'Like',
		imageUrl: 'https://img.icons8.com/ios/50/ffffff/like--v1.png',
		likedImageUrl: 'https://img.icons8.com/ios-filled/50/F32424/like--v1.png',
	},
	{
		name: 'Comment',
		imageUrl: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png',
	},
	{
		name: 'Share',
		imageUrl: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png',
	},
	{
		name: 'Save',
		imageUrl:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/bookmark-ribbon--v1.png',
	},
]


const Post = ({post}) => {
  return (
    <View>
      <Divider width={1} orientation='vertical'/>
      <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>

    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{ uri: post.profilePic}} style={styles.story}/>
      <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  story: {
    width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
  }
})
export default Post
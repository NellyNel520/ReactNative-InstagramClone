import {
	View,
	Text,
	Image,
	StyleSheet,
	Touchable,
	TouchableOpacity,
	Modal,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Divider } from 'react-native-elements'
import { firebase, db } from '../../firebase'
import CommentSection from './comments/CommentSection'
 
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

const Post = ({ post }) => {
const [comments, setComments ] = useState([])
const [modalVisible, setModalVisible] = useState(false);


	useEffect(() => {
		db.collection('posts').doc(post.id).collection('comments').onSnapshot((snapshot) => {
			setComments(snapshot.docs.map((comment) => ({ id: comment.id, ...comment.data() })))
		})
	}, [])

	return (
		<View style={{ marginBottom: 30 }}>
			<Divider width={1} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View style={{ marginHorizontal: 2, marginTop: 10 }}>
				<PostFooter post={post} />
				<Likes post={post} />
				<Caption post={post} />

				<CommentSection post={post}/>
				{/* <ViewComments comments={comments} />
        <Comments comments={comments}/> */}
			</View>
		</View>
	)
}

const PostHeader = ({ post }) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			margin: 5,
			alignItems: 'center',
		}}
	>
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Image source={{ uri: post.profilePic }} style={styles.story} />
			<Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
				{post.user}
			</Text>
		</View>
	</View>
)

const PostImage = ({ post }) => (
	<View style={{ width: '100%', height: 450 }}>
		<Image
			source={{ uri: post.imageUrl }}
			style={{ height: '100%', resizeMode: 'cover' }}
		/>
	</View>
)

const PostFooter = ({ post }) => (
	<View style={{ flexDirection: 'row' }}>
		<View style={styles.leftFooterIconContainer}>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={{ uri: postFooterIcons[0].imageUrl }}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={{
						uri: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png',
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={{ uri: 'https://img.icons8.com/ios/50/ffffff/sent--v1.png' }}
				/>
			</TouchableOpacity>
		</View>

		<View style={{ flex: 1, alignItems: 'flex-end' }}>
			<TouchableOpacity>
				<Image
					style={styles.footerIcon}
					source={{
						uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/bookmark-ribbon--v1.png',
					}}
				/>
			</TouchableOpacity>
		</View>
	</View>
)

const Likes = ({ post }) => (
	<View style={{ flexDirection: 'row', marginTop: 4 }}>
		<Text style={{color: 'white', fontWeight: 600}}>{post.likes_by_users.toLocaleString('en')} likes</Text>
		{/* <Text style={{ color: 'white', fontWeight: 600 }}>{post.likes} likes</Text> */}
	</View>
)

const Caption = ({ post }) => (
	<View style={{ marginTop: 5 }}>
		<Text style={{ color: 'white' }}>
			<Text style={{ fontWeight: '800' }}>{post.user} </Text>
			<Text>{post.caption}</Text>
		</Text>
	</View>
)


const ViewComments = ({ comments }) => (
	<View style={{ marginTop: 5 }}>
		<Modal
			animationType="slide"
			transparent={false}
			// presentationStyle="FormSheet"
			visible={false}
		>
			{/* view all comments header (on press hide modal) */}
			{/* comments */}
			{/* add comment form */}
		</Modal>

		{/* on press make modal visable */}
		<TouchableOpacity onPress={() => setModalVisible(true)}>
			{!!comments.length && (
				<Text style={{ color: 'gray', fontWeight: 600 }}>
					View {comments.length > 1 ? 'all ' : ''}
					{comments.length} {comments.length > 1 ? 'comments' : 'comment'}
				</Text>
			)}
		</TouchableOpacity>
	</View>
)

const Comments = ({comments}) => (
  <View>
    {comments.slice(0, 2).map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 3}}>
        <Text style={{ color: 'white'}}>
          <Text style={{ fontWeight: 700}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
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
	},
	footerIcon: {
		width: 33,
		height: 33,
		marginRight: 6,
	},
	leftFooterIconContainer: {
		flexDirection: 'row',
		width: '32%',
		justifyContent: 'space-between',
	},
})
export default Post

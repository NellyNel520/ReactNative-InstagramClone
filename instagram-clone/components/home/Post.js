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
import AllComments from './comments/AllComments'

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

const Post = ({ post, navigation }) => {
	const [comments, setComments] = useState([])
	const [modalVisible, setModalVisible] = useState(false)
	const [likesModalVisible, setLikesModalVisible] = useState(false)

	useEffect(() => {
		db.collection('posts')
			.doc(post.id)
			.collection('comments')
			.onSnapshot((snapshot) => {
				setComments(
					snapshot.docs.map((comment) => ({
						id: comment.id,
						...comment.data(),
					}))
				)
			})
	}, [])

	const handleLike = (post) => {
		const currentLikeStatus = !post.likes_by_users.includes(
			firebase.auth().currentUser.email
		)

		db.collection('posts')
			.doc(post.id)
			.update({
				likes_by_users: currentLikeStatus
					? firebase.firestore.FieldValue.arrayUnion(
							firebase.auth().currentUser.email
					  )
					: firebase.firestore.FieldValue.arrayRemove(
							firebase.auth().currentUser.email
					  ),
			})
			.then(() => {
				console.log('Successfully updated !!!')
			})
			.catch((error) => {
				console.error('Error updating document: ', error)
			})
	}

	const PostHeader = ({ post }) => (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				// margin: 5,
				marginTop: 16,
				marginBottom: 10,
				alignItems: 'center',
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('ProfileScreen', {
						userId: post.owner_email,
					})
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={{ uri: post.profile_picture }} style={styles.story} />
					<Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
						{post.user}
					</Text>
				</View>
			</TouchableOpacity>
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

	const PostFooter = ({ post, handleLike, comments }) => (
		<View style={{ flexDirection: 'row' }}>
			{/* Add modal here for link to comment section and form */}
			{/* need to add comment header section too || all comments component already imported */}
			<View style={styles.leftFooterIconContainer}>
				<TouchableOpacity onPress={() => handleLike(post)}>
					<Image
						style={styles.footerIcon}
						source={{
							uri: post.likes_by_users.includes(
								firebase.auth().currentUser.email
							)
								? postFooterIcons[0].likedImageUrl
								: postFooterIcons[0].imageUrl,
						}}
						// source={{uri: postFooterIcons[0].imageUrl}}
					/>
				</TouchableOpacity>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					// visible={false}
				>
					<View
						style={{
							marginTop: 80,
							backgroundColor: '#5A5A5A',
							flex: 1,
						}}
					>
						<View>
							<CommentHeader modalVisible={modalVisible} />
							<AllComments post={post} comments={comments} />
						</View>
					</View>
				</Modal>

				{/* Add on press to trigger modal visibility */}
				<TouchableOpacity onPress={() => setModalVisible(true)}>
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
						source={{
							uri: 'https://img.icons8.com/ios/50/ffffff/sent--v1.png',
						}}
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

	const CommentHeader = ({ modalVisible }) => (
		<View style={{ marginTop: 10 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
					<Image
						source={{
							uri: 'https://img.icons8.com/sf-black/128/horizontal-line.png',
						}}
						style={{ width: 80, height: 40 }}
					/>
				</TouchableOpacity>
				<Text style={styles.headerText}>Comments</Text>
			</View>
		</View>
	)

	const Likes = ({ post }) => (
		<View style={{ flexDirection: 'row', marginTop: 4 }}>
			{/* likes modal pop up */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={likesModalVisible}
			>
				<View
					style={{
						// marginHorizontal: 20,
						marginTop: 200,
						backgroundColor: '#5A5A5A',
						flex: 1,
					}}
				>
					<View>
						{/* likes header */}
						<LikesHeader />
						{/* likes list */}
					</View>
				</View>
			</Modal>
			{/* on press make modal visible */}
			<TouchableOpacity onPress={() => setLikesModalVisible(true)}>
				<Text style={{ color: 'white', fontWeight: 600 }}>
					{post.likes_by_users.length.toLocaleString('en')} likes
				</Text>
			</TouchableOpacity>
			{/* <Text style={{ color: 'white', fontWeight: 600 }}>{post.likes} likes</Text> */}
		</View>
	)

	const LikesHeader = ({ modalVisible }) => (
		<View style={{ marginTop: 10 }}>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
					<Image
						source={{
							uri: 'https://img.icons8.com/sf-black/128/horizontal-line.png',
						}}
						style={{ width: 80, height: 40 }}
					/>
				</TouchableOpacity>
				<Text style={styles.headerText}>Likes</Text>
			</View>
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

	return (
		<View style={{ marginBottom: 30 }}>
			<Divider width={1} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View style={{ marginHorizontal: 2, marginTop: 10 }}>
				{/* pass down modal visible useState to post footer */}
				<PostFooter post={post} handleLike={handleLike} comments={comments} />
				<Likes post={post} />
				<Caption post={post} />

				<CommentSection post={post} />
			</View>
		</View>
	)
}

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
	headerText: {
		color: 'white',
		fontWeight: 700,
		fontSize: 25,
		marginTop: 10,
	},
})
export default Post

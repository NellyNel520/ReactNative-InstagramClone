import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { firebase, db } from '../../../firebase'

const likeIcons = 
	[{
		imageUrl: 'https://img.icons8.com/ios/50/ffffff/like--v1.png',
	likedImageUrl: 'https://img.icons8.com/ios-filled/50/F32424/like--v1.png',
	}]

const AllComments = ({ post, comments }) => {


	const handleLike = (comment) => {
		const currentLikeStatus = !comment.likes_by_users.includes(
			firebase.auth().currentUser.email
		)

		db.collection('posts')
			.doc(post.id)
			.collection('comments')
			.doc(comment.id)
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

	return (
		<View style={{ marginHorizontal: 7, marginTop: 25 }}>
			{comments.map((comment, index) => (
				<View key={index} style={{ marginBottom: 20 }}>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity>
								<Image
									source={{ uri: comment.profile_picture }}
									style={styles.story}
								/>
							</TouchableOpacity>

							<View style={{ marginLeft: 8 }}>
								<View style={{ flexDirection: 'row' }}>
									<Text
										style={{
											fontWeight: 600,
											color: 'white',
											fontSize: 15,
											marginRight: 3,
										}}
									>
										{comment.user}
									</Text>
									{/* instal timeago package to convert timestamp */}
									<Text>15h</Text>
								</View>

								<Text style={{ fontSize: 16, color: 'white', marginTop: 4 }}>
									{comment.comment}
								</Text>

								{/* likes with conditional statement same in post componnt like section*/}

								{comment.likes_by_users.length > 0 ? (
									<Text>
										<Text>{comment.likes_by_users.length} </Text>
										<Text style={{ textDecorationLine: 'underline' }}>
											likes
										</Text>
									</Text>
								) : null}
							</View>
						</View>

						{/* handle like function */}
						<View>
							{/* <TouchableOpacity>
								<Image
									source={{
										uri: 'https://img.icons8.com/ios/50/ffffff/like--v1.png',
									}}
									style={{ width: 20, height: 20 }}
								/>
							</TouchableOpacity> */}
							<LikeButton comment={comment} handleLike={handleLike} />
						</View>
					</View>
				</View>
			))}
		</View>
	)
}

const LikeButton = ({comment, handleLike}) => (
	<TouchableOpacity onPress={() => handleLike(comment)}>
		<Image
			source={{
				uri:  comment.likes_by_users.includes(firebase.auth().currentUser.email)
              ? likeIcons[0].likedImageUrl
              : likeIcons[0].imageUrl
			}}
			style={{ width: 20, height: 20 }}
		/>
	</TouchableOpacity>
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
})
export default AllComments

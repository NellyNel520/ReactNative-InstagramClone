import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase, db } from '../../firebase'

const Comments = ({ post }) => {
	const [comments, setComments] = useState([])

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

	const CommentSection = ({ comments }) => (
		<View style={{ marginTop: 5 }}>
			{!!comments.length && (
				<Text style={{ color: 'gray', fontWeight: 600 }}>
					View {comments.length > 1 ? 'all ' : ''}
					{comments.length} {comments.length > 1 ? 'comments' : 'comment'}
				</Text>
			)}
		</View>
	)

	const Comments = ({ comments }) => (
		<View>
			{comments.slice(0, 2).map((comment, index) => (
				<View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
					<Text style={{ color: 'white' }}>
						<Text style={{ fontWeight: 700 }}>{comment.user}</Text>{' '}
						{comment.comment}
					</Text>
				</View>
			))}
		</View>
	)

	return (
		<View>
			<CommentSection comments={comments} />
			<Comments comments={comments} />
		</View>
	)
}

export default Comments

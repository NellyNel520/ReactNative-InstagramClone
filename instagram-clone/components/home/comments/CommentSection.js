import {
	View,
	Text,
	Image,
	StyleSheet,
	Touchable,
	TouchableOpacity,
	Modal,
	SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase, db } from '../../../firebase'

const CommentSection = ({ post }) => {
	const [comments, setComments] = useState([])
	const [modalVisible, setModalVisible] = useState(false)

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

	const ViewComments = ({ comments }) => (
		<View style={{ marginTop: 8 }}>
			<Modal
				animationType="slide"
				transparent={false}
				// presentationStyle="FormSheet"
				visible={modalVisible}
			>
				<View style={{marginHorizontal: 20, marginTop: 80}}>
					<View>
						{/* view all comments header (on press hide modal) */}
						<CommentHeader />
						{/* comments */}
						{/* add comment form */}
					</View>
				</View>
			</Modal>

			{/* on press make modal visable */}
			<TouchableOpacity 
      onPress={() => setModalVisible(true)}
      >
				{!!comments.length && (
					<Text style={{ color: 'gray', fontWeight: 600 }}>
						View {comments.length > 1 ? 'all ' : ''}
						{comments.length} {comments.length > 1 ? 'comments' : 'comment'}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	)

	const CommentHeader = () => (
		<View>
			<Text>Header jjj</Text>
      <Text>Header jjj</Text>
      

		</View>
	)

	return (
		<View>
			<ViewComments comments={comments} />
			<Comments comments={comments} />
		</View>
	)
}

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

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
})
export default CommentSection

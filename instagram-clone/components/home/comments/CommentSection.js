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
import AllComments from './AllComments'

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

	const ViewComments = ({ post, comments }) => (
		<View style={{ marginTop: 8 }}>
			<Modal
				animationType="slide"
				transparent={true}
				// presentationStyle="FormSheet"
				visible={modalVisible}
			>
				<View
					style={{
						// marginHorizontal: 20,
						marginTop: 80,
						backgroundColor: '#5A5A5A',
						flex: 1
					}}
				>
					<View style={{}}>
						{/* view all comments header (on press hide modal) */}
						<CommentHeader modalVisible={modalVisible}/>
						{/* all comments */}
						<AllComments post={post} comments={comments}/>
						{/* add comment form */}
					</View>
				</View>
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
	// london@gmail.com

	const CommentHeader = ({modalVisible}) => (
		<View style={{marginTop: 10}}>
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

	return (
		<View>
			<ViewComments post={post} comments={comments} />
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
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
		color: 'white',
		fontWeight: 700,
		fontSize: 25,
		marginTop: 10,
	},
})
export default CommentSection

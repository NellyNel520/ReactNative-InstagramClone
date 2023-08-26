import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase, db } from '../../firebase'

const PostGrid = ({ userId, navigation }) => {
	const [posts, setPosts] = useState([])

	const getPost = () => {
		const docRef = db.collection('posts').where('owner_email', '==', userId)
		const unsubscribe = docRef.onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })))
		})
		return unsubscribe
	}

	useEffect(() => {
		getPost()
		console.log(posts)
	}, [])

	const TabIcons = () => (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginHorizontal: 60,
				marginTop: 30,
			}}
		>
			{/* <Text style={{color: 'white'}}>TopTabs</Text> */}

			<TouchableOpacity>
				<Image
					style={styles.icon}
					source={{ uri: 'https://img.icons8.com/small/16/ffffff/grid.png' }}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					style={styles.icon}
					source={{
						uri: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
					}}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					style={styles.icon}
					source={{
						uri: 'https://img.icons8.com/windows/32/ffffff/user-location.png',
					}}
				/>
			</TouchableOpacity>
		</View>
	)

	const Grid = ({ navigation }) => (
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				marginHorizontal: 0,
				marginTop: 15,
			}}
		>
			{/* conditional render no post yet post.length = 0 */}

			{posts.length > 0 ? (
				posts.map((post, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => {
							navigation.navigate('PostScreen', {
								username: post.user,
								post: post,
							})
						}}
					>
						<Image
							style={{ width: 140, height: 140 }}
							source={{ uri: post.imageUrl }}
						/>
					</TouchableOpacity>
				))
			) : (
				<View style={styles.noPostContainer}>
					<View style={styles.cameraBorder}>
						<Image
							source={{
								uri: 'https://img.icons8.com/ios/50/ffffff/camera--v3.png',
							}}
							style={styles.camera}
						/>
					</View>

					<Text style={{ color: 'white' }}>No Posts Yet</Text>
				</View>
			)}
		</View>
	)

	return (
		<View>
			<TabIcons />
			<ScrollView>
				<Grid navigation={navigation} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
  noPostContainer: {
    marginHorizontal: 160,
    marginTop: 30


  },
	icon: {
		width: 40,
		height: 40,
	},
	camera: {
		width: 60,
		height: 60,
		margin: 18,
	},
	cameraBorder: {
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default PostGrid

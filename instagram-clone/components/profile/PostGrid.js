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

const PostGrid = () => {
	const [posts, setPosts] = useState([])

	const getPost = () => {
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('posts').where('owner_email', '==', user)
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

	const Grid = () => (
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				marginHorizontal: 0,
				marginTop: 15,
			}}
		>
			{posts.map((post, index) => (
				<TouchableOpacity key={index}>
					<Image
						style={{ width: 140, height: 140 }}
						source={{ uri: post.imageUrl }}
					/>
				</TouchableOpacity>
			))}
		</View>
	)

	// Reel Grid Component
	//  Tagged images Componet
	return (
		<View>
			<Text>PostGrid</Text>
			<TabIcons />
			{/* post grid */}
			<ScrollView>
				<Grid />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40,
	},
})
export default PostGrid

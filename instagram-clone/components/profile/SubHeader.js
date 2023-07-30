import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase, db } from '../../firebase'

const SubHeader = () => {
	const [profilePic, setProfilePic] = useState('')
	const [posts, setPosts] = useState([])

	const getProfilePic = () => {
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('users').doc(user)
		const unsubscribe = docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					// console.log('Document data:', doc.data())
					// setUsername(doc.data().username)
					setProfilePic(doc.data().profile_picture)
				} else {
					console.log('No such document!')
				}
			})
			.catch((error) => {
				console.log('Error getting document:', error)
			})
		return unsubscribe
	}

	const getPostCount = () => {
		const user = firebase.auth().currentUser.email
		const docRef = db.collection('posts').where('owner_email', '==', user)
		const unsubscribe = docRef.onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })))
		})
		return unsubscribe
	}

	useEffect(() => {
		getProfilePic()
		console.log(profilePic)
		getPostCount()
		console.log(posts)
	}, [])

	return (
		<View style={styles.container}>
			<TouchableOpacity>
				{/* User Profile Image */}
				{
					/* add blue badge with plus icon */
					<View style={styles.addBadge}>
						<Image
							style={styles.add}
							source={{
								uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png',
							}}
						/>
					</View>
				}
				<Image style={styles.profilePic} source={{ uri: profilePic }} />
			</TouchableOpacity>

			<View style={styles.countContainer}>
				{/* post count */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>{posts.length}</Text>
					<Text style={styles.countTitle}>Posts</Text>
				</TouchableOpacity>
				{/* Followers */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>1400</Text>
					<Text  style={styles.countTitle}>Followers</Text>
				</TouchableOpacity>
				{/* Following */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>1000</Text>
					<Text  style={styles.countTitle}>Following</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	profilePic: {
		width: 110,
		height: 110,
		borderRadius: 70,
		marginLeft: 18,
		borderWidth: 3,
    // border color for active story
		// borderColor: '#ff8501',
	},
	add: {
		width: 15,
		height: 15,
	},
	addBadge: {
		backgroundColor: '#0080FE',
		position: 'absolute',
		left: 102,
		bottom: 10,
		width: 30,
		height: 30,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
		borderWidth: 3,
		borderColor: '#000000',
	},
	container: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	countContainer: {
		flexDirection: 'row',
		marginTop: 40,
		marginRight: 20,
	},
	count: {
		marginRight: 10,
    marginLeft: 8,
		alignItems: 'center',
	},
	countTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 600,
  },
	number: {
		color: 'white',
		fontWeight: 800,
		fontSize: 20,
	},
})

export default SubHeader

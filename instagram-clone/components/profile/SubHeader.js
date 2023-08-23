import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { db } from '../../firebase'

const SubHeader = ({userId}) => {
  const [profilePic, setProfilePic] = useState('')
	const [posts, setPosts] = useState([])
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')

  const getProfilePic = () => {
		const docRef = db.collection('users').doc(userId)
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
		const docRef = db.collection('posts').where('owner_email', '==', userId)
		const unsubscribe = docRef.onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })))
		})
		return unsubscribe
	}

  
  const randomFollowerCount = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setFollowers(randomNumber);
  }
  const randomFollowingCount = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setFollowing(randomNumber);
  }
  
  useEffect(() => {
    getProfilePic()
    console.log(profilePic)
    getPostCount()
    console.log(posts)
    randomFollowerCount()
    randomFollowingCount()
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.profilePic} source={{uri: profilePic}}/> 
      </TouchableOpacity>

      <View style={styles.countContainer}>
				{/* post count */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>{posts.length}</Text>
					<Text style={styles.countTitle}>Posts</Text>
				</TouchableOpacity>
				{/* Followers */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>{followers}</Text>
					<Text  style={styles.countTitle}>Followers</Text>
				</TouchableOpacity>
				{/* Following */}
				<TouchableOpacity style={styles.count}>
					<Text style={styles.number}>{following}</Text>
					<Text  style={styles.countTitle}>Following</Text>
				</TouchableOpacity>
			</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
  profilePic: {
		width: 110,
		height: 110,
		borderRadius: 70,
		marginLeft: 18,
		borderWidth: 3,
    // border color for active story
		// borderColor: '#ff8501',
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
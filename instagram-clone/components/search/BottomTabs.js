import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { Divider } from 'react-native-elements'
import { firebase, db } from '../../firebase'


const BottomTabs = ({ navigation }) => {
	const [activeTab, setActiveTab] = useState('Search')
	const [profilePic, setProfilePic] = useState('')

	const getProfilePic = () => {
		// may need to change doc ref from uid to user email to be consistent 
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

	useEffect(() => {
		getProfilePic()
		console.log(profilePic)
	}, [])

	const icons = [
		{
			name: 'Home',
			active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
			inactive:
				'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
				nav: 'HomeScreen'
		},
		{
			name: 'Search',
			active: 'https://img.icons8.com/ios-filled/50/ffffff/search--v1.png',
			inactive: 'https://img.icons8.com/ios/50/ffffff/search--v1.png',
			nav: 'SearchScreen',
		},
		{
			name: 'Add',
			active: 'https://img.icons8.com/ios-filled/50/ffffff/plus-2-math.png',
			inactive: 'https://img.icons8.com/ios/50/ffffff/plus-2-math.png',
			nav: 'NewPostScreen',
		},
		{
			name: 'Reels', 
			active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
			inactive: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
		},
		{
			name: 'Profile',
			active:
				profilePic,
			inactive:
				profilePic,
			nav: 'CurrentUserProfileScreen'
		},
	]
	

	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => ( icon.nav ? navigation.push(icon.nav) : null, setActiveTab(icon.name))}>
			<Image
				source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
				style={[
					styles.icon,
					icon.name === 'Profile' ? styles.profilePic() : null,
					activeTab === 'Profile' && icon.name === activeTab
						? styles.profilePic(activeTab)
						: null,
				]}
			/>
		</TouchableOpacity>
	)
	return (
		<View style={styles.wrapper}>
			<Divider width={1} orientation="vertical" />
			<View style={styles.container}>
				{icons.map((icon, index) => (
					<Icon key={index} icon={icon} />
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
	},
	wrapper: {
		position: 'absolute',
		width: '100%',
		bottom: '3%',
		zIndex: 999,
		backgroundColor: '#000000',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 50,
		paddingTop: 10,
	},
	profilePic: (activeTab = '') => ({
		borderRadius: 50,
		borderColor: 'white',
		borderWidth: activeTab === 'Profile' ? 3 : 0,
	}),
})

export default BottomTabs

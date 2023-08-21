import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'



const SearchInput = () => {
	

	const SearchBar = () => (
		<View>
			<View style={styles.container}>
				{/* gray rounded wrapper */}
				<View style={styles.wrapper}>
					{/* img search icon */}
					<Image
						style={styles.icon}
						source={{
							uri: 'https://img.icons8.com/ios/50/242424/search--v1.png',
						}}
					/>
					{/* input */}
					<TextInput
						style={styles.Input}
						placeholder="Search"
						placeholderTextColor="white"
						// onChangeText={(e) => setUsername(e.target.value)}
						// value={username}
					/>
					{/* {err && <span>User not found!</span>} */}

					<TouchableOpacity>
						<Image
							style={styles.clearIcon}
							source={{
								uri: 'https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png',
							}}
						/>
					</TouchableOpacity>

					{/* </View> */}
					{/* x icon to clear input */}
				</View>
			</View>
		</View>
	)
	const SearchResults = () => (
		<View style={{ marginTop: 30 }}>
			<View
				style={{
					flexDirection: 'row',
					marginBottom: 10,
				}}
			>
				<TouchableOpacity>
					{/* user profile image */}
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1692299577327-728059ed5946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
						}}
						style={styles.story}
					/>
				</TouchableOpacity>
				<View style={{ marginLeft: 12, marginVertical: 15 }}>
					{/* users username and name */}
					<Text style={{ color: 'gray', fontSize: 20 }}>NellyNel01</Text>
					<Text style={{ color: 'white', fontSize: 16 }}>Nelly Nel 🌸</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity>
					{/* user profile image */}
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1692299577327-728059ed5946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
						}}
						style={styles.story}
					/>
				</TouchableOpacity>
				<View style={{ marginLeft: 12, marginVertical: 15 }}>
					{/* users username and name */}
					<Text style={{ color: 'gray', fontSize: 20 }}>NellyNel01</Text>
					<Text style={{ color: 'white', fontSize: 16 }}>Nelly Nel 🌸</Text>
				</View>
			</View>
		</View>
	)
	return (
		<View>
			<SearchBar />
			<SearchResults />
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 23,
		height: 23,
		marginVertical: 8,
		marginRight: 5,
	},
	clearIcon: {
		backgroundColor: '#242424',
		// padding: 5,
		width: 20,
		height: 20,
		borderRadius: 50,
		marginVertical: 8,
		// justifyContent: 'flex-end'
	},
	Input: {
		color: '#242424',
		// backgroundColor: 'gray',
		fontSize: 19,
		width: 345,
	},
	wrapper: {
		flexDirection: 'row',
		height: 40,
	},
	container: {
		backgroundColor: '#5A5A5A',
		padding: 6,
		borderRadius: 10,
		marginHorizontal: 5,
		// justifyContent: 'space-around'
	},
	story: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
	},
})

export default SearchInput

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Bio = ({ user }) => {
const bio = user.bio


	return (
		<View style={styles.container}>
			{/* Name */}
      <Text style={styles.name}>{user.name}</Text>
			{/* Bio */}
			{bio 
			?  <Text style={styles.bio}>{user.bio}</Text>
			: null
			}

		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10, 
		marginHorizontal: 10, 
  },
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 600,
	},
	bio: {
		color: 'white',
		marginTop: 5,
		fontSize: 16,
		fontWeight: 500,
	},
})

export default Bio

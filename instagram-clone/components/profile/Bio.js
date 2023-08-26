import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Bio = ({ user }) => {



	return (
		<View style={styles.container}>
			{/* Name */}
      <Text style={styles.name}>{user.name}</Text>
			{/* Bio */}
      <Text style={styles.bio}>{user.bio}</Text>

		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, marginHorizontal: 10, minHeight: 80
    
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

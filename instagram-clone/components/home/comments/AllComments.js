import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const AllComments = ({ comments }) => {
	return (
		<View>
			{comments.map((comment, index) => (
				<View key={index}>
					<TouchableOpacity>
						<Image source={{uri: comment.profile_picture}} style={styles.story}/>
					</TouchableOpacity>
				</View>
			))}
			<Text>AllComments</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  story: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
	},
})
export default AllComments

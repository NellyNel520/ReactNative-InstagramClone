import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const PostHeader = ({navigation, username}) => {
  
  return (
    <View style={{flexDirection: 'row', }}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
				<Image
					source={{uri: 'https://img.icons8.com/ios/90/ffffff/back--v1.png' }} style={{ width: 30, height: 30}}
				/>
			</TouchableOpacity>

      <View style={{alignItems: 'center', marginLeft: 160}}>
        <Text style={styles.username}>{username.toUpperCase()}</Text>
        <Text style={styles.headerText}>Posts</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  username: {
		color: 'gray',
		fontWeight: 700,
		fontSize: 15,
		marginTop: 10,
	},
  headerText: {
		color: 'white',
		fontWeight: 700,
		fontSize: 18,
		// marginTop: 10,
	},
})

export default PostHeader
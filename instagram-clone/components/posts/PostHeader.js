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
        <Text style={{color: 'white'}}>{username}</Text>
        <Text style={{color: 'white'}}>Posts</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({

})

export default PostHeader
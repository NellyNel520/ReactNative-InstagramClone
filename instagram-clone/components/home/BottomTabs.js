import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
	{
		name: 'Home',
		active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
		inactive:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
	},
	{
		name: 'Search',
		active: 'https://img.icons8.com/ios-filled/50/ffffff/search--v1.png',
		inactive: 'https://img.icons8.com/ios/50/ffffff/search--v1.png',
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
			'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
		inactive:
			'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWQlMjBzaG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
]

const BottomTabs = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>BottomTabs</Text>
    </View>
  )
}

export default BottomTabs
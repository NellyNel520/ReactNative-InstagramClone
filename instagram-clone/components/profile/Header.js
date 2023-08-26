import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

const Header = ({ navigation, user }) => {
	



	return (
		<View style={styles.container}>
			{/* back arrow */}
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image
					source={{ uri: 'https://img.icons8.com/ios/90/ffffff/back--v1.png' }}
					style={{ width: 30, height: 30 }}
				/>
			</TouchableOpacity>
			{/* username */}
			<Text style={styles.username}>{user.username}</Text>
			{/* bell & 3 dots */}
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity>
					<Image
						// source={{uri: 'https://img.icons8.com/carbon-copy/100/ffffff/bell--v1.png'}}
						source={{
							uri: 'https://img.icons8.com/material-outlined/24/ffffff/filled-appointment-reminders.png',
						}}
						style={{ width: 30, height: 30 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={{
							uri: 'https://img.icons8.com/material-outlined/24/ffffff/more.png',
						}}
						style={{ width: 30, height: 30 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	username: {
		color: 'white',
		fontWeight: 700,
    fontSize: 20,
	},
})

export default Header

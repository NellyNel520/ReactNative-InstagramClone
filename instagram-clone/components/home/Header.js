import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { firebase } from '../../firebase'


const handleSignout = async () => {
	try{
		await firebase.auth().signOut()
		console.log('Signed out successfully')
	} catch (error) {
		console.log(error)
	}
}

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <TouchableOpacity onPress={handleSignout}>
        <Image style={styles.logo} source={require('../../assets/ig-logo.png')}/>
      </TouchableOpacity>

      {/* icons on right */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material-outlined/24/ffffff/like--v1.png'}}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.undreadBadgeText}>15</Text>
        </View>
          <Image 
            style={styles.icon}
            source={{uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-messenger-social-media-tanah-basah-basic-outline-tanah-basah.png'}}
          />
        </TouchableOpacity> 


      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},
  icon: {
		width: 30,
		height: 30,
		marginLeft: 14,
		resizeMode: 'contain',
	},
  container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	iconsContainer: {
		flexDirection: 'row',
	},
  unreadBadge: {
		backgroundColor: '#FF3250',
		position: 'absolute',
		left: 20,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	undreadBadgeText: {
		color: 'white',
		fontWeight: '600',
	},
})

export default Header
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      {/* Logo */}
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/ig-logo.png')}/>
      </TouchableOpacity>

      {/* icons on right */}
      <View>
        <TouchableOpacity>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material-outlined/24/ffffff/like--v1.png'}}/>
        </TouchableOpacity>

        <TouchableOpacity>
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
})

export default Header
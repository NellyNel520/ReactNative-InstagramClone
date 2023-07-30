import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      {/* username + down arrow */}
      <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={styles.headerText}>Username</Text>
        <Image style={{ width: 20,
		height: 20, marginTop: 10, fontWeight: 700}} source={{uri: 'https://img.icons8.com/ios-filled/50/ffffff/expand-arrow--v1.png'}}/>
      </TouchableOpacity>

      {/* add & menu icon */}
      <View style={styles.iconsContainer}>

        <TouchableOpacity>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/ffffff/plus-2-math.png'}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png'}} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
		height: 30,
		marginLeft: 14,
		resizeMode: 'contain',
  },
  headerText: {
		color: 'white',
		fontWeight: 700,
		fontSize: 25,
    textDecorationLine: 'underline',
		// marginTop: 10,
	},
  iconsContainer: {
		flexDirection: 'row',
	},
  container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
})

export default Header
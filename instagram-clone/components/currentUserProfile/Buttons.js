import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
 
const Buttons = () => {
  return (
    <View style={{marginTop: 40, flexDirection: 'row', marginHorizontal: 20}}>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image style={{width: 30, height: 30}} source={{uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-add-user-instagram-flatart-icons-outline-flatarticons.png'}}/>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
    backgroundColor: '#5A5A5A',
    width: 165,
    marginRight: 10
  }, 
  iconButton: {
    alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 10,
    backgroundColor: '#5A5A5A',
    padding: 5,
  },
  buttonText: {
    fontWeight: 600,
		color: '#fff',
		fontSize: 18,
  }
})

export default Buttons
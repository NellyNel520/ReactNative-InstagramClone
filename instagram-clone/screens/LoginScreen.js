import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const INSTAGRAM_LOGO = 'https://img.icons8.com/fluency/48/instagram-new.png'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100}} />
      </View>
      {/* Login Form */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  }
})

export default LoginScreen
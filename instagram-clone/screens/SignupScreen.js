import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import SignupForm from '../components/signup/SignupForm'

const INSTAGRAM_LOGO = 'https://img.icons8.com/fluency/96/instagram-new.png'


const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100}}/>
      </View>
      {/* signup form */}
      <SignupForm navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  }
})

export default SignupScreen
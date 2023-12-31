import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AddPostForm from './AddPostForm'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>AddNewPost</Text>
      {/* header / page navigation */}
      <Header navigation={navigation}/>
      {/* post form */}
      <AddPostForm navigation={navigation}/>
    </View>
  )
}

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={{uri: 'https://img.icons8.com/ios/90/ffffff/back--v1.png' }} style={{ width: 30, height: 30}}/>
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
    {/* empty text component to center tittle */}
  </View>
)

const styles = StyleSheet.create({
  container: {
		marginHorizontal: 10,
	},
  headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 20,
    marginRight: 25

  },
})
export default AddNewPost
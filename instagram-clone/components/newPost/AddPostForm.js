import { View, Text, Image, TextInput, Button  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'

import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'


const PLACEHOLDER_IMG =
	'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg'


const AddPostForm = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>AddPostForm</Text>
    </View>
  )
}

export default AddPostForm
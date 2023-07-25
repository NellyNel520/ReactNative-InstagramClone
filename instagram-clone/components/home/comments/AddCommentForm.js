import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { firebase, db } from '../../../firebase'


const uploadCommentSchema = Yup.object().shape({
	comment: Yup.string().max(2200, 'Comment has reached the character limit'),
})

const AddCommentForm = () => {
  return (
    <View>
      <Text>AddCommentForm</Text>
    </View>
  )
}

export default AddCommentForm
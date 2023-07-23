import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'



const signupFormSchema = Yup.object().shape({
	email: Yup.string().email().required('An email'),
	username: Yup.string().required().min(2, 'A username is required'),
	password: Yup.string()
		.required()
		.min(6, 'Your password has to have at least 8 characters '),
})

const SignupForm = () => {
  return (
    <View>
      <Formik>
        
      </Formik>
    </View>
  )
}

export default SignupForm
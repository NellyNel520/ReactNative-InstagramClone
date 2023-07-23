import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	TouchableOpacity,
	Alert,
} from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'

const LoginForm = () => {
  // Form Schema 

  const loginForSchema = Yup.object().shape({
		email: Yup.string()
			.email()
			.required('An email, username, or phone number is required'),
		password: Yup.string()
			.required()
			.min(6, 'Your password has to have at least 6 characters '),
	})


  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  )
}

export default LoginForm
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

	const loginFormSchema = Yup.object().shape({
		email: Yup.string()
			.email()
			.required('An email, username, or phone number is required'),
		password: Yup.string()
			.required()
			.min(6, 'Your password has to have at least 6 characters '),
	})

	return (
		<View>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
					onLogin(values.email, values.password)
				}}
				validationSchema={loginFormSchema}
				validateOnMount={true}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					isValid,
				}) => (
					<>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.email.length < 1 || Validator.validate(values.email)
											? '#ccc'
											: 'red',
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Phone number, username, or email"
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
								autoFocus={true}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
							/>
						</View>

						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.password.length || values.password.length > 6
											? '#ccc'
											: 'red',
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Password"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								textContentType="password"
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
							/>
						</View>
					</>
				)}
			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({
	inputField: {
		borderRadius: 4,
		padding: 12,
		backgroundColor: '#FAFAFA',
		marginBottom: 10,
		borderWidth: 1,
	},
	wrapper: {
		marginTop: 80,
	},
})

export default LoginForm

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
		<View style={styles.wrapper}>
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
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
							/>
						</View>

            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <Text style={{ color: '#6BB0F5'}}>Forgot Password?</Text>
            </View>

            <Pressable 
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text style={{color: 'white'}}>Don't have an account?</Text>
              {/* add navigation to sign up screen once created */}
              <TouchableOpacity>
                <Text style={{color: '#6BB0F5'}}>  Sign up</Text>
              </TouchableOpacity>
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
		borderWidth: 2.5,
	},
	wrapper: {
		marginTop: 80,
	},
  signupContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		marginTop: 50,
	},
  button: (isValid) => ({
		backgroundColor: isValid ? '#0096f6' : '#9ACAF7',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 42,
		borderRadius: 4,
	}),
	buttonText: {
		fontWeight: 600,
		color: '#fff',
		fontSize: 20,
	},
})

export default LoginForm

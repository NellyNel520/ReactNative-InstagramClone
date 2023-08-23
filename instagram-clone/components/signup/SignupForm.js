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
import { firebase, db } from '../../firebase'


const signupFormSchema = Yup.object().shape({
	email: Yup.string().email().required('An email'),
	username: Yup.string().required().min(2, 'A username is required'),
	password: Yup.string()
		.required()
		.min(6, 'Your password has to have at least 8 characters '),
})


// gives every user a random profile image on sign up
const getRandomProfilePicture = async () => {
	const response = await fetch('https://randomuser.me/api/')
	const data = await response.json()
	return data.results[0].picture.large
}


const onSignup = async (email, password, username) => {
	try {
		const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
		console.log('🔥 Firebase Signup Successful ✅', email, password)

		db.collection('users').doc(authUser.user.email).set({
			owner_uid: authUser.user.uid,
			username: username,
			email: authUser.user.email,
			profile_picture: await getRandomProfilePicture(),
			followers_by_users: [],
		})
	} catch (error) {
		Alert.alert('Opps ...', error.message)
	}
}



const SignupForm = ({navigation}) => {
	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', password: '', username: '' }}
				onSubmit={(values) => {
					onSignup(values.email, values.password, values.username)
          // console.log(values.email, values.password, values.username)
				}}
				validationSchema={signupFormSchema}
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
								placeholder="Email"
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
								autoFocus={true}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
							/>
						</View>

						<View style={[
								styles.inputField,
								{
									borderColor:
										values.username.length || values.username.length > 6
											? '#ccc'
											: 'red',
								},
							]}>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Username"
								autoCapitalize="none"
								textContentType="username"
								onChangeText={handleChange('username')}
								onBlur={handleBlur('username')}
								value={values.username}
							/>
						</View>

						<View style={[
								styles.inputField,
								{
									borderColor:
										values.password.length || values.password.length > 6
											? '#ccc'
											: 'red',
								},
							]}>
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

						<View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
							<Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
						</View>

						<Pressable
							titleSize={20}
							style={styles.button(isValid)}
							onPress={handleSubmit}
							disabled={!isValid}
						>
							<Text style={styles.buttonText}>Sign Up</Text>
						</Pressable>

            <View style={styles.signupContainer}>
            <Text style={{color: 'white'}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
              <Text style={{ color: '#6BB0F5' }}>  Login</Text>
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
		borderWidth: 1,
	},
	wrapper: {
		marginTop: 80,
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
	signupContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		marginTop: 50,
	},
})

export default SignupForm

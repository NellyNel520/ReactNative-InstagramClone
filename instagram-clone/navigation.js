import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import CurrentUserProfileScreen from './screens/CurrentUserProfileScreen'
import PostScreen from './screens/PostScreen'
import SearchScreen from './screens/SearchScreen'

const Stack = createStackNavigator()

const screenOptions = {
	headerShown: false,
}

export const SignedInStack = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="SearchScreen"
			screenOptions={screenOptions}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
			<Stack.Screen name="CurrentUserProfileScreen" component={CurrentUserProfileScreen} />
			<Stack.Screen name="PostScreen" component={PostScreen} />
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
		</Stack.Navigator>
	</NavigationContainer>
)

export const SignedOutStack = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="LoginScreen"
			screenOptions={screenOptions}
		>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignupScreen" component={SignupScreen} />
		</Stack.Navigator>
	</NavigationContainer>
)

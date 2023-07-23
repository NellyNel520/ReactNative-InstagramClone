import { View, Text, SafeAreaView } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import SignedInStack from './navigation'

export default function App() {
	return (
		<SignedInStack />
	)
}

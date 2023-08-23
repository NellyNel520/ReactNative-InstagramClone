import {
	Text,
	StyleSheet,
	TextInput,
	View,
	Keyboard,
	Button,
	Image,
} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchBar = ({
	clicked,
	setClicked,
	searchFilterFunction,
	search,
	setSearch,
}) => {
	return (
		<View style={styles.container}>
			<View
				style={
					clicked
						? styles.searchWrapper_clicked
						: styles.searchWrapper_unclicked
				}
			>
				{/* search icon */}
				<Image
					style={styles.icon}
					source={{
						uri: 'https://img.icons8.com/ios/50/ffffff/search--v1.png',
					}}
					// 242424
				/>
				{/* Input field */}
				<TextInput
					placeholder="Search"
					placeholderTextColor="white"
					style={styles.input}
					value={search}
					clearButtonMode="always"
					onChangeText={(text) => searchFilterFunction(text)}
					onFocus={() => {
						setClicked(true)
					}}
				/>
				{/* ***Using ios built in clearButtonMode for now  for text input clearing functionality */}
				
				{/*cross Icon, depending on whether the search bar is clicked or not from scratch*/}
				{/* {clicked && (
					<TouchableOpacity onPress={() => setSearch('')}>
						<Image
							style={styles.deleteIcon}
							source={{
								uri: 'https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png',
							}}
							
						/>
					</TouchableOpacity>
				)} */}
			</View>

			{/*cancel button, depending on whether the search bar is clicked or not */}
			{clicked && (
				<View>
					<Button
						title="Cancel"
						onPress={() => {
							Keyboard.dismiss()
							setClicked(false)
						}}
					></Button>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 23,
		height: 23,
	},
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
		marginBottom: 15,
	},
	searchWrapper_unclicked: {
		padding: 10,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#5A5A5A',
		borderRadius: 15,
		alignItems: 'center',
	},
	searchWrapper_clicked: {
		padding: 10,
		flexDirection: 'row',
		width: '80%',
		backgroundColor: '#5A5A5A',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	input: {
		fontSize: 20,
		marginLeft: 10,
		width: '85%',
	},
	deleteIcon: {
		// backgroundColor: '#242424',
		width: 20,
		height: 20,
		borderRadius: 50,
		marginVertical: 8,
		// justifyContent: 'flex-end'
	},
})

export default SearchBar

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

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
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
					// value={searchPhrase}
					// onChangeText={setSearchPhrase}
					// onFocus={() => {
					//   setClicked(true);
					// }}
				/>
				{/*cross Icon, depending on whether the search bar is clicked or not */}
				{/* {clicked && ( */}
					<Image
						style={styles.deleteIcon}
						source={{
							uri: 'https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png',
						}}
					/>
				{/* )} */}
			</View>

			{/*cancel button, depending on whether the search bar is clicked or not */}
			<View>
        <Button title='Cancel' onPress={() => {
          Keyboard.dismiss();
          setCLicked(false);
        }}></Button>
      </View>
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
	},
	searchWrapper_unclicked: {
		padding: 10,
		flexDirection: 'row',
		width: '95%',
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
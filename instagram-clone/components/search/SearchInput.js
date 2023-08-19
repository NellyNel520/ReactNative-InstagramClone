import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchInput = () => {
	const SearchBar = () => (
		<View>
			<View style={styles.container}>
				{/* gray rounded wrapper */}
				<View style={styles.wrapper}>
					{/* img search icon */}
					<Image
						style={styles.icon}
						source={{
							uri: 'https://img.icons8.com/ios/50/242424/search--v1.png',
						}}
					/>
					{/* input */}
					<TextInput
						style={styles.Input}
						placeholder="Search"
						placeholderTextColor="white"
						// onChangeText={}
						// value=''
					/>

					<TouchableOpacity>
						<Image
							style={styles.clearIcon}
							source={{
								uri: 'https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png',
							}}
						/>
					</TouchableOpacity>

					{/* </View> */}
					{/* x icon to clear input */}
				</View>
			</View>
		</View>
	)
	const SearchResults = () => (
		<View style={{marginTop: 30,}}>
			<View
				style={{
					flexDirection: 'row',
				}}
			>
        <TouchableOpacity>
          {/* user profile image */}
          <Image source={{}}
            style={styles.story}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 12, marginVertical: 15}}>
          {/* users username and name */}
          <Text style={{color: 'gray', fontSize: 20}}>NellyNel01</Text>
          <Text style={{color: 'white'}}>Nelly Nel 🌸</Text>
        </View>
      </View>
		</View>
	)
	return (
		<View>
			<SearchBar />
			<SearchResults />
		</View>
	)
}

const styles = StyleSheet.create({
	icon: {
		width: 23,
		height: 23,
		marginVertical: 8,
		marginRight: 5,
	},
	clearIcon: {
		backgroundColor: '#242424',
		// padding: 5,
		width: 20,
		height: 20,
		borderRadius: 50,
		marginVertical: 8,
		// justifyContent: 'flex-end'
	},
	Input: {
		color: '#242424',
		// backgroundColor: 'gray',
		fontSize: 19,
		width: 345,
	},
	wrapper: {
		flexDirection: 'row',
		height: 40,
	},
	container: {
		backgroundColor: '#5A5A5A',
		padding: 6,
		borderRadius: 10,
		marginHorizontal: 5,
		// justifyContent: 'space-around'
	},
  story: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
	},
})

export default SearchInput

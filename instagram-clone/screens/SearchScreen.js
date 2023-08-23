import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import BottomTabs from '../components/search/BottomTabs'
import SearchBar from '../components/search/SearchBar'
import {  db } from '../firebase'
import { FlatList } from 'react-native-gesture-handler'

const SearchScreen = ({ navigation }) => {
	const [search, setSearch] = useState('')
	const [filteredDataSource, setFilteredDataSource] = useState([])
	const [masterDataSource, setMasterDataSource] = useState([])
  const [clicked, setClicked] = useState(false);

	useEffect(() => {
		db.collectionGroup('users').onSnapshot((snapshot) => {
			setFilteredDataSource(snapshot.docs.map((user) => ({ id: user.id, ...user.data() })))
      setMasterDataSource(snapshot.docs.map((user) => ({ id: user.id, ...user.data() })))
		})
	}, [])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.username
          ? item.username.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
       // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }

  const ItemView = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 10,
      }}
    >
      <TouchableOpacity>
        {/* user profile image */}
        <Image
          source={{
            uri: item.profile_picture
          }}
          style={styles.profilePic}
        />
      </TouchableOpacity>
      {/* users username and name */}
      <TouchableOpacity>
        <View style={{ marginLeft: 12, marginVertical: 15 }}>
          <Text style={{ color: 'gray', fontSize: 20 }}>{item.username}</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  
  

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar
				searchFilterFunction={searchFilterFunction}
				clicked={clicked}
				setClicked={setClicked}
        setSearch={setSearch}
        search={search}
			/>
      <FlatList 
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
		

			<BottomTabs navigation={navigation} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
  searchBarContainer: {
    justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
  },
  icon: {
		width: 23,
		height: 23,
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
  profilePic: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.7,
		borderColor: '#ff8501',
	},
})

export default SearchScreen

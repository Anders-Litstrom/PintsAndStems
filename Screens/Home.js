import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import WineCard from '../Shared/WineCard'
import {Card} from 'react-native-elements'
import {BevContext} from '../Shared/StateManagement'

const reducer = (state, action) => {
	switch (action.type) {
		
		case "FETCH_WINE_SUCCESS":
			console.log(action.payload);
			return {
				...state,
				wine: action.payload.wine
			}
		case "FETCH_BEER_SUCCESS":
			return {
				...state,
				beer: action.payload.beer
			}
	}
}


const Home = ({ navigation }) => {
	
	const { wine, setWine, beer, setBeer } = React.useContext(BevContext);
	
	var returnData = {};

	baseURL = 'http://18-220-99-150:8080';
  getData = (ev) => {
    let url = baseURL + '/posts';
    let h = new Headers();
    let req = new Request(url, {
      headers: h,
      method: 'POST',
    });

    fetch(req)
			.then(response=>response.json())
			.then(this.showData)
			.catch(this.badStuff)

  }
  showData = (data) => {
    console.log(data);
  }
  badStuff = (err) => {
    console.log(err);
  }

  return (
    <View style={{justifyContent: 'center', backgroundColor: '#023F77', flex: 1}}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Welcome!</Text>
					{//<Text style={styles.headerUserText}>{this.state}</Text> 
					}
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={wine}
        renderItem={({ item }) => (
            <WineCard>
              <TouchableOpacity onPress={() => navigation.navigate('WineInfo', item)}>
                <Image source={{uri: item.image}} style={styles.wineCardImage}/>
                <Text style={styles.wineCardTitle}>{item.name}</Text>
                <View style={styles.wineDescriptionContainer}>
                  <Text style={styles.wineCardDescriptionTitile}>Description:</Text>
                  <Text style={styles.wineCardDescription}>{item.description.substring(0,140)}...</Text>
                </View>
              </TouchableOpacity>
            </WineCard>

        )}
      />
    </View>
	);
};

const styles = StyleSheet.create({
  wineCardImage: {
    height: 80,
    width: 80,
    borderRadius: 150/2,
    right: '12%',
    bottom: '12%'
  },
  wineCardTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: '7%',
    top: '-12%'
  },
  wineDescriptionContainer: {
    backgroundColor:'#f68d6e',
  },
  wineCardDescriptionTitile: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '5%',
    marginTop: '5%'
  },
  wineCardDescription: {
    backgroundColor: '#f68d6e',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    marginHorizontal: '10%',
    marginTop: '3%',
    marginBottom: '10%'
  },
  welcomeTextContainer: {
    backgroundColor: 'white',
  },
  headerWelcomeText: {
    color: '#f68d6e',
    fontSize: 55,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginHorizontal: '7%'
  },
  headerUserText: {
    color: '#023F77',
    fontSize: 35,
    letterSpacing: 1,
    marginHorizontal: '8%',
    marginBottom: '8%'
  },

});

export default Home;

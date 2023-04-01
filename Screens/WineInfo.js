import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, Image, View, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {favorites} from './../Shared/User'
import WineCard from '../Shared/WineCard'



export default function WineInfo({ route, navigation }) {

  const pressHandler = () => {
      favorites.push(navigation.state.params)
  }

  return (
    <View>
      <ScrollView style={styles.container}>
        <Image source={{uri: route.params.image}} style={{width: 200, height: 200, borderRadius: 200/2, marginTop: '7%', marginLeft: '7%'}}/>
        <WineCard>
          <Text style={styles.title}>Title:  {route.params.name}</Text>
          <View style={styles.wineDescriptionContainer}>
            <Text style={styles.description}>Description: {route.params.description}</Text>
            <View style={styles.winePriceContainer}>
              <Text style={styles.price}>Price: ${route.params.price}</Text>
            </View>
            <TouchableOpacity onPress={pressHandler}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add to my List</Text>
              </View>
            </TouchableOpacity>
          </View>
        </WineCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023F77'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 1,
    marginHorizontal: '7%',
    marginVertical: '7%'
  },
  description: {
    color: 'white',
    fontSize: 13,
    letterSpacing: 1,
    marginHorizontal: '7%',
    marginTop: '7%'
  },
  price: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 1,
    marginHorizontal: '7%',
    marginVertical: '7%',
  },
  wineDescriptionContainer: {
    backgroundColor: '#f68d6e'
  },
  winePriceContainer: {
    backgroundColor: '#f68d6e',
  },
  buttonContainer: {
    backgroundColor: '#023F77',
    width: '70%',
    alignSelf: 'center',
    marginBottom: '4%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: '4%',
  }
});

import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements'
import {favorites} from './../Shared/User'
import WineCard from './../Shared/WineCard'
import {WineContext} from './Wine/WineResults'
export default function MyList ({ navigation }) {
  return (
    <View style={{justifyContent: 'center', backgroundColor: '#023F77', flex: 1}}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>My List</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('WineInfo', item)}>
            <WineCard>
              <Image source={{uri: item.image}} style={styles.wineCardImage}/>
              <Text style={styles.wineCardTitle}> Name: {item.name} </Text>
              <View style={styles.wineDescriptionContainer}>
                <Text style={styles.wineCardDescriptionTitile}>Description:</Text>
                <Text style={styles.wineCardDescription}>{item.description.substring(0,140)}...</Text>

              </View>
            </WineCard>
          </TouchableOpacity>
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
    marginHorizontal: '7%',
    marginBottom: '7%'
  },
  headerUserText: {
    color: '#023F77',
    fontSize: 35,
    letterSpacing: 1,
    marginHorizontal: '8%',
    marginBottom: '8%'
  },

});

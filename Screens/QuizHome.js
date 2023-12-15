import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import WineCard from '../Shared/WineCard'
import wineGlass from './../Images/WineGlass.png'
import beerGlass from './../Images/BeerGlass.png'

const QuizHome = ({ navigation }) => {

  const winePressHandler = () => {
    navigation.navigate('WineIntro');
  }

  const beerPressHandler = () => {
    navigation.navigate('BeerIntro');
  }

  return (
    <View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Quiz Time</Text>
        <Text style={styles.headerUserText}>Choose Wisely</Text>
      </View>
      <View style={styles.bodyContainer}>

					{//<Image style={styles.glassImage} source={wineGlass}/>
									}

        <TouchableOpacity style={styles.button} onPress={winePressHandler}>
          <Text style={styles.buttonText}> Begin Wine Quiz</Text>
        </TouchableOpacity>

					{//<Image style={styles.glassImage} source={beerGlass}/>
									}

        <TouchableOpacity style={styles.button} onPress={beerPressHandler}>
          <Text style={styles.buttonText}> Begin Beer Quiz</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 30,
    letterSpacing: 1,
    marginHorizontal: '8%',
    marginBottom: '8%'
  },
  bodyContainer: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#f68d6e',
    height: 40,
    width: '60%',
    alignSelf: 'center',
    marginVertical: '5%',
    marginBottom: '5%',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    marginHorizontal: '10%',
    marginVertical: '4%',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#023F77'

  },
  glassImage: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginHorizontal: '7%',
    marginVertical: '7%',
  }
});

export default QuizHome;

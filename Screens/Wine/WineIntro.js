import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements'


export default function WineIntro ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('WineQuestion1');
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Wine Quiz</Text>
      </View>
      <Text style={styles.quizText}>
        Welcome to our wine taste profile Quiz! Please answer these question to help us get your recomendations.
      </Text>
      <TouchableOpacity onPress={pressHandler}>
        <Card>
          <Text style={styles.answer}> Begin </Text>
        </Card>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023F77',
    flexDirection: 'column',
    flex:1,
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
  quizText: {
    color: 'white',
    fontSize: 22,
    marginHorizontal: '7%',
    marginVertical: '7%'
  },
  answer: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f68d6e'
  },

})

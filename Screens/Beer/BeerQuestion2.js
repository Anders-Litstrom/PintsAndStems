import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements'
import {beerAnswers} from './BeerAnswers'
import dropDown from './../../Images/btn_dropdown.png'


export default function BeerQuestion2 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('BeerQuestion3');
  }

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {beerAnswers[1]=item.id}}>
				<Card>
					<Text style={styles.answer}> {item.title} </Text>
				</Card>
			</TouchableOpacity>
			</View>
		);
	};

	const DATA = [
		{
			id: 'a',
			title: " I don't want to feel my tongue "
		},
		{
			id: 'b',
			title: " I've heard they're good, but I don't know if I can pull off a hipster look "
		},
		{
			id: 'c',
			title: " I don't want to kill all my tastebuds "
		},
		{
			id: 'd',
			title: " I hop around like the Easter Bunny and really don't care too much "
		},
	]

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Question 2</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>Bitterness: Hop or Not? / A.k.a./ how hoppy are we feeling?</Text>
        </View>

			<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{flexGrow:1}}
			/>
        <TouchableOpacity onPress={pressHandler}>
          <Card>
            <Text style={styles.next}> Next </Text>
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
  questionContainer: {
    flexDirection:'row',
    marginRight: '10%'
  },
  welcomeTextContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
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
    marginVertical: '7%',
  },
  answer: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#023F77'
  },
  dropDownImage: {
    height: 30,
    width: 30,
    marginLeft: '7%',
    marginTop: '7%',
    flexDirection: 'row'
  },
  next:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f68d6e'
  }
})

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {Card} from 'react-native-elements'
import {beerAnswers} from './BeerAnswers'
import dropDown from './../../Images/btn_dropdown.png'

export default function BeerQuestion6 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('BeerResults');
  }

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {beerAnswers[5]=item.id}}>
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
			title: " Coffee "
		},
		{
			id: 'b',
			title: " Apple Cider with Cinnamon "
		},
		{
			id: 'c',
			title: " Lemonade "
		},
		{
			id: 'd',
			title: " Gin and Tonic "
		},
		{
			id: 'e',
			title: " Bourbon " 
		},
		{
			id: 'f',
			title: " Straight cocktail bitters "
		},
		{
			id: 'g',
			title: " A life without beer is a life not worth living... so I only drink beer "
		},
	]

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Question 6</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>Flavor profiles: What do you like to drink outside of beer?</Text>
        </View>

			<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{flexGrow:1}}
			/>
          <TouchableOpacity onPress={pressHandler} style={{marginBottom: '20%'}}>
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

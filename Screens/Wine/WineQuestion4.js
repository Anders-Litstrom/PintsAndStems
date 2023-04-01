import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements'
import {wineAnswers} from './WineAnswers'
import dropDown from './../../Images/btn_dropdown.png'


export default function WineQuestion4 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('WineQuestion5');
  }

	const DATA = [
		{
			id: 'a',
			title: 'Tomato juice '
		},
		{
			id: 'b',
			title: 'Orange juice '
		},
		{
			id: 'c',
			title: 'POG'
		},
		{
			id: 'd',
			title: 'Cranberry juice '
		},
		{
			id: 'e',
			title: 'Grapefruit juice'
		},
		{
			id: 'f',
			title: 'Grapefruit juice'
		},
		{
			id: 'g',
			title: 'Find another bar'
		}
	]

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {wineAnswers[3]=item.id}}>
				<Card>
					<Text style={styles.answer}> {item.title} </Text>
				</Card>
			</TouchableOpacity>
			</View>
		);
	};

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Question 4</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>For some reason, the bar ran out of liquor… but the show must go on! The dude behind the bar gives
            you these choices, what do you choose?</Text>
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

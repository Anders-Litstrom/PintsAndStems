import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity, TouchableHighlight, Image, ScrollView} from 'react-native';
import {Card} from 'react-native-elements'
import {wineAnswers} from './WineAnswers'
import dropDown from './../../Images/btn_dropdown.png'



export default function WineQuestion1 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('WineQuestion2');
  }

	const DATA = [
		{
			id: 'a',
			title: 'Beef'
		},
		{
			id: 'b',
			title: 'Pork'
		},
		{
			id: 'c',
			title: 'Chicken'
		},
		{
			id: 'd',
			title: 'Duck'
		},
		{
			id: 'e',
			title: 'Wild Game'
		},
		{
			id: 'f',
			title: "I'm a vegetarian"
		}
	];
	
	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {wineAnswers[0]=item.id}}>
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
        <Text style={styles.headerWelcomeText}>Question 1</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>What kind of meat do you generally find yourself enjoying?</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023F77',
    flexDirection: 'column',
		flex: 1
  },
  questionContainer: {
    flexDirection:'row'
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
    marginLeft: '7%',
    marginRight: '13%',
    marginVertical: '7%'
  },
  answer: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#023F77'
  },
	answerContainer: {
		width: '50%'
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

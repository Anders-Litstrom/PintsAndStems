import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements'
import {beerAnswers} from './BeerAnswers'
import dropDown from './../../Images/btn_dropdown.png'


export default function BeerQuestion1 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('BeerQuestion2');
  }

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {beerAnswers[0]=item.id}}>
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
			title: ' Climbing a mountain '
		},
		{
			id: 'b',
			title: ' Kicking my feet up by the fireplace, moving as little as possible '
		},
		{
			id: 'c',
			title: ' Having some friends over for dinner  '
		},
		{
			id: 'd',
			title: ' I have no plans. I go with the flow and let life come to me '
		},
	]

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Question 1</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>What are you usually doing while drinking your beer?</Text>
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
    marginHorizontal: '7%',
    marginVertical: '7%'
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

import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements'
import {wineAnswers} from './WineAnswers'
import dropDown from './../../Images/btn_dropdown.png'


export default function WineQuestion6 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('WineResults');
  }

	const DATA = [
		{
			id: 'a',
			title: 'Straight coco bean '
		},
		{
			id: 'b',
			title: 'Dark chocolate '
		},
		{
			id: 'c',
			title: 'Milk chocolate '
		},
		{
			id: 'd',
			title: 'White chocolate '
		},
		{
			id: 'e',
			title: 'Gummies!!! '
		}
	]

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {wineAnswers[5]=item.id}}>
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
        <Text style={styles.headerWelcomeText}>Question 6</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>Candles lit, drinks poured, blanket on standby, the romantic setup is almost complete, but what
            about the chocolate?</Text>
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

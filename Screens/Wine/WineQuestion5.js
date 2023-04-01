import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Card} from 'react-native-elements'
import {wineAnswers} from './WineAnswers'
import dropDown from './../../Images/btn_dropdown.png'


export default function WineQuestion5 ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('WineQuestion6');
  }

	const DATA = [
		{
			id: 'a',
			title: 'Black and strong '
		},
		{
			id: 'b',
			title: 'With cream no sugar '
		},
		{
			id: 'c',
			title: 'The English standard (cream and sugar) '
		},
		{
			id: 'd',
      title: 'Super vanilla frape from Starbucks hold the spanunkle and toss the nutmeg ' 
		},
		{
			id: 'e',
			title: 'I like glacial water '
		},
		{
			id: 'f',
			title: 'Can I have tea instead? '
		}
	]

	const renderItem = ({ item }) => {
		return(
			<View>
			<TouchableOpacity onPress={() => {wineAnswers[4]=item.id}}>
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
        <Text style={styles.headerWelcomeText}>Question 5</Text>
      </View>
        <View style={styles.questionContainer}>
          <Image style={styles.dropDownImage} source={dropDown}/>
          <Text style={styles.quizText}>Yeah, yeah, we know you really like coffee, but let us know how you usual enjoy your cup. We tried to
            condense the 1,000,000,000,000&#39;s of ways to enjoy coffee.</Text>
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
    fontSize: 18,
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

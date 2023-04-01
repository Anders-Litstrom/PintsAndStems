import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, } from 'react-native';
import {Card} from 'react-native-elements';
import {beerAnswers} from './BeerAnswers';
import dropDown from './../../Images/btn_dropdown.png';
import {BevContext} from '../../Shared/StateManagement'

export default function BeerResults ({ navigation }) {
	const { setBeer } = React.useContext(BevContext);
	baseURL = 'http://18.220.99.150:8080/?bev=0'
	
  const pressHandler = () => {
    navigation.popToTop();
		// build request
		let url = baseURL;
		for (var i = 1; i <= 6; i++) {
			url += '&a' + i + "=" + beerAnswers[i - 1];
		}
					
    let h = new Headers();
    let req = new Request(url, {
      headers: h,
      method: 'GET',
    });
		
    fetch(req)
			.then(response=>response.text())
			.then(showData)
			.catch(badStuff)

    navigation.navigate('Home')
  }
  showData = (data) => {
		setBeer(data);
  }
  badStuff = (err) => {
    console.log(err);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.headerWelcomeText}>Review</Text>
      </View>
      <View style={styles.questionContainer}>
        <Image style={styles.dropDownImage} source={dropDown}/>
				{/* Render a JS string literal so the apostrophe won't break JSX */}
        <Text style={styles.quizText}>{"Awesome, thanks for completing our quiz! Submit your answers to get your Beers. You won't be able to change your answers once you submit, but feel free to retake the quiz anytime to change your Tasting Profile. "}</Text>
      </View>

      <TouchableOpacity onPress = {pressHandler}>
        <Card>
          <Text style={styles.next}> SUBMIT </Text>
        </Card>
      </TouchableOpacity>

    </View>
  );
};

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

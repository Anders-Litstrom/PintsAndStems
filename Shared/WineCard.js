import React from 'react';
import {StyleSheet, View} from 'react-native';

const WineCard = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          {props.children}
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-end',
    marginTop: '10%',
    marginVertical: '10%',
    flexDirection: 'column',
    left: 25
  },
  card:{
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#f68d6e',
    shadowOffset: {height: 1, width:1},
    shadowColor: 'rgb(22,65,117)',
    shadowOpacity: .4,
    shadowRadius: 2,
    marginHorizontal: 40,
    marginVertical: 10,
    flex: 2
  },
  card2:{
    borderRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: {height: 1, width:1},
    shadowColor: 'rgb(22,65,117)',
    shadowOpacity: .4,
    shadowRadius: 2,
    marginHorizontal: 40,
    marginVertical: 10,
    flex: 2
  },
  cardContent:{
    backgroundColor: '#023F77',
    marginHorizontal: 2,
    marginVertical: 2
  }
});

export default WineCard;

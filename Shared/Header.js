import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import logo from '../Images/P&S-Icon-4C.png';
import menu from '../Images/hamburger-menu-462145.png';
import Home from '../Screens/Home';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
	const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer()
  }

  const goHome = () => {
    navigation.navigate('Home')
  }


  return (
    <View style={styles.headerStyle}>

      <TouchableOpacity onPress= {openMenu}>
        <Image style={styles.headerMenuImage} source={menu} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goHome}>
        <Image style={styles.headerLogoImage} source={logo}/>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerLogoImage: {
    height: 60,
    width: 60,
    right: -170,
    top: -50
  },
  headerMenuImage: {
    height: 60,
    width: 60,
    left: -155,
    top: 10,
  },

});

export default Header;

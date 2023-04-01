import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements'

export const favorites = [];

export const getFavorites = () => {
  return favorites
}

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontFamily: 'Nunito-Bold'}}> textInComponent </Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

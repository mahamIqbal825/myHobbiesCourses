import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {Card} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

const UserComponent = ({onPress, text, smallText, icon, img}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.img} source={img} />
        <View style={styles.textBg}>
          <Text style={styles.myText}>{text}</Text>
          <Text style={styles.smallText}>{smallText}</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.icon} source={icon} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    paddingVertical: '4%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textBg: {},
  myText: {
    fontSize: 18,
    color: Theme.headingColor,
    fontFamily: Theme.fontFamily,
  },
  smallText: {
    fontSize: 17,
    color: Theme.textColor,
    fontFamily: Theme.fontFamily,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default UserComponent;

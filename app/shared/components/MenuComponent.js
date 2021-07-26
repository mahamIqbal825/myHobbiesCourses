import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import ButtonComponent from '../../shared/components/Button';
import Theme from '../../utils/Theme';

const MenuComponent = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imgBg}>
          <Image style={styles.img} source={props.icon} />
        </View>
        <Text style={styles.myText}>{props.myText}</Text>
      </View>
      <MaterialIcons name="navigate-next" size={20} color={Theme.textColor} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Theme.borderColor,
    paddingVertical: 17,
    marginHorizontal: '5%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgBg: {
    backgroundColor: Theme.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '7%',
    borderRadius: 11,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  myText: {
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
    fontSize: 14,
  },
});
export default MenuComponent;

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

const ButtonComponent = ({onPress, text, isGreen, icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          isGreen ? {...styles.btn, backgroundColor: Theme.primary} : styles.btn
        }>
        <Text numberOfLines={1} style={styles.btnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: Theme.hp('3%'),
    alignItems: 'center',
    backgroundColor: Theme.accent,
    paddingVertical: 16,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: Theme.white,
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
  },
});

export default ButtonComponent;

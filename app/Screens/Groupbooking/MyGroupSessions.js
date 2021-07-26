import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import MyGroupSessionsComponent from '../../components/MyGroupSessionsComponent';
import Icons from '../../constants/Icons';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';

export default class MyGroupSessions extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image source={Images.leftArrow} style={styles.arrowImage} />
          <Text style={styles.bankTransfer}>My Group Sessions</Text>
          <Image source={Icons.menu} style={styles.arrowImage} />
          <Text></Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: Theme.hp(10)}}>
          <Text style={styles.text}>Introduction to Bussnise managment</Text>
          <View style={{margin: 5}}>
            <MyGroupSessionsComponent />
          </View>

          <View style={{margin: 5}}>
            <MyGroupSessionsComponent />
          </View>
          <Text style={{...styles.text, color: Theme.accent}}>
            Closed Session
          </Text>
          <Text style={styles.text}>Introduction to Bussnise managment</Text>
          <View style={{margin: 5}}>
            <MyGroupSessionsComponent />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
    marginTop: Theme.hp('1'),
    marginLeft: Theme.wp('3.5'),
    color: Theme.searchIcon,
  },
  arrowImage: {
    height: 20,
    width: 20,
    justifyContent: 'center',
  },
  bankTransfer: {
    fontSize: 20,

    fontFamily: Theme.fontFamily,
    flex: 1,
    marginLeft: '25%',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: Theme.wp(5),
    marginTop: '8%',
    marginBottom: '6%',
  },
});

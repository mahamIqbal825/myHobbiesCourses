import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import ButtonComponent from '../../shared/components/Button';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Theme from '../../utils/Theme';
import Images from '../../constants/Images';

export default class DateOfBirth extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Image source={Images.logo} style={styles.image} />
          <Text style={styles.coursesText}>My Hobby Courses</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.oldText}>
              You must be at least 15 Years old to use holiday activities. other
              people won’t see your birthday
            </Text>
            <Text style={styles.bdy}>Choose B'day Month</Text>
            <View style={styles.greenLine} />
            <Calendar
              onDayPress={day => {
                console.log('selected day', day);
              }}
              onDayLongPress={day => {
                console.log('selected day', day);
              }}
              monthFormat={'yyyy MM'}
              onMonthChange={month => {
                console.log('month changed', month);
              }}
              style={styles.Calendar}
            />
          </View>
          <View style={styles.btnView}>
            <ButtonComponent
              text="Next"
              onPress={() => navigation.navigate('MainHomeScreen')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: Theme.hp('8%'),
    width: 130,
    height: 43,
  },
  coursesText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: Theme.hp('2%'),
    fontFamily: Theme.fontFamily,
  },
  bottomContainer: {
    backgroundColor: Theme.blueshBg,
    marginTop: '5%',
    padding: '7%',
  },
  oldText: {
    color: Theme.fontColorLight,
    fontSize: 15,
    fontFamily: Theme.fontFamily,
  },
  bdy: {
    fontSize: 25,
    color: Theme.grey,
    fontFamily: Theme.fontFamilyBold,
    alignSelf: 'center',
    marginTop: '5%',
  },
  greenLine: {
    width: '40%',
    height: 3,
    backgroundColor: Theme.primary,
    alignSelf: 'center',
  },
  btnView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: -28,
  },
  Calendar: {
    backgroundColor: Theme.blueshBg,
    color: Theme.black,
  },
});

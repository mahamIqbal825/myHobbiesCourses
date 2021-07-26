import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import MapView from 'react-native-maps';
import Images from '../../constants/Images';
import {TextInput} from 'react-native-paper';

export default class AcceptGPSLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header text="Finding courses" />
        </View>
        <View style={styles.primaryContainer}>
          <Text style={styles.bestCourseText}>Want to see the best </Text>
          <Text style={styles.bestCourseText}>courses in your area?</Text>
          <View>
            <Image source={Images.maps} style={styles.map} />
            <Text style={styles.locationText}>
              We need your location to find nearby courses
            </Text>
          </View>
          <View style={styles.searchBtn}>
            <Image source={Images.searchInput} style={styles.searchIcon} />
            <Text style={styles.searchText}>Locate Me</Text>
          </View>
          <Text style={styles.dontText}>Don’t show again</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Theme.backgroundColor,
  },
  scroll: {
    backgroundColor: Theme.backgroundColor,
  },
  primaryContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: Theme.primary,
  },
  bestCourseText: {
    fontFamily: Theme.fontFamily,
    color: Theme.white,
    fontSize: 17,
    marginLeft: Theme.wp('6%'),
  },
  map: {
    marginTop: Theme.hp('4%'),
    height: 300,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center',
  },
  locationText: {
    // textAlign: 'center',
    marginLeft: Theme.wp('6%'),
    fontFamily: Theme.fontFamilyBold,
    fontSize: 17,
    color: Theme.white,
    marginTop: Theme.hp('3%'),
  },
  searchBtn: {
    borderRadius: 10,
    marginTop: Theme.hp('4%'),
    alignItems: 'center',
    backgroundColor: Theme.white,
    paddingVertical: 16,
    paddingHorizontal: 4,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: Theme.wp('5%'),
  },
  searchText: {
    marginLeft: Theme.wp('5%'),
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.accent,
  },
  dontText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    textAlign: 'center',
    color: Theme.chip,
    marginTop: Theme.hp('3%'),
  },
});

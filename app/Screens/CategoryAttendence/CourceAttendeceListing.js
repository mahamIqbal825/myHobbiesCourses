import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import CourceAttendeceListingComponent from '../../components/CourceAttendeceListingComponent';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import Header from '../../shared/components/Header';
export default class CourceAttendeceListing extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Header
            navigation={this.props.navigation}
            text="Courses Attendance"
          />
          <View style={styles.SearchView}>
            <Text style={styles.searchText}>Search Icon To Be Added</Text>
            <Image source={Icons.triangle} style={styles.triangleIcon} />
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <CourceAttendeceListingComponent />
            <CourceAttendeceListingComponent />
            <CourceAttendeceListingComponent />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  triangleIcon: {
    width: Theme.wp('7'),
    height: Theme.hp('3'),
    alignSelf: 'center',
    marginLeft: Theme.hp('2'),
  },
  SearchView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchText: {
    fontFamily: Theme.fontFamily,
    fontSize: 18,
    color: Theme.chip,
  },
  container: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
});

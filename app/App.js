import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Signup from './Screens/Auth/Signup';
import SmsVerification from '../app/Screens/Auth/SmsVerification';
import Login from '../app/Screens/Auth/Login';
import BankTransferDetails from '../app/Screens/Cart/BankTransferDetails';
import MarkAttendance from './Screens/CategoryAttendence/MarkAttendance';
import AddEditReview from './Screens/CategoryAttendence/AddEditreview';
import MyCourcesOnSale from './Screens/CategoryAttendence/MyCourcesOnSale';
import LeisureCourse from './Screens/CategoryAttendence/LeisureCourse';
import SubjectFilterOption from './Screens/Search/SubjectFilterOption';
import SalesDashboardDetail from './Screens/CategoryAttendence/SalesDashboardDetail';
import Routes from './navigations/index';
import CardSettings from './Screens/Cart/CardSettings';
import ShowCourseDetails from './Screens/Cart/ShowCourseDetails';
import BookGroupSession from './Screens/Groupbooking/BookGroupSession';
import AcceptGPSLocation from './Screens/Search/AcceptGPSLocation';
import GPSResult from './Screens/Search/GPSResult';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

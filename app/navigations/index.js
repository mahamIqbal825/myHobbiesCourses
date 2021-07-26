import * as React from 'react';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import DateOfBirth from '../Screens/Auth/DateOfBirth';
import SmsVerification from '../Screens/Auth/SmsVerification';
import BankTransferDetails from '../Screens/Cart/BankTransferDetails';
import LeisureCategories from '../Screens/CategoryAttendence/LeisureCategories';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CourceAttendeceListing from '../Screens/CategoryAttendence/CourceAttendeceListing';
import MenuScreen from '../Screens/Home/MenuScreen';
import MainHomeScreen from '../Screens/Home/MainHomeScreen';
import OrderSuccess from '../Screens/Home/OrderSuccess';
import SalesDashboard from '../Screens/CategoryAttendence/SalesDashboard';
import TutorProfileDetail from '../Screens/Home/TutorProfileDetail';
import ReportAttendance from '../Screens/CategoryAttendence/ReportAttendance';
import MyGroupSessions from '../Screens/Groupbooking/MyGroupSessions';
import MyCourcesOnSale from '../Screens/CategoryAttendence/MyCourcesOnSale';
import AddEditReview from '../Screens/CategoryAttendence/AddEditreview';
import AttendenceSceesionList from '../Screens/CategoryAttendence/AttendenceSceesionList';
import CardCheckout from '../Screens/Cart/CardCheckout';
import Splash from '../Screens/Splash';
import ShowCourseDetails from '../Screens/Cart/ShowCourseDetails';
import CardSettings from '../Screens/Cart/CardSettings';
import SearchByCity from '../Screens/Search/SearchByCity';
import SubjectTutorResult from '../Screens/Search/SubjectTutorResult';
import LeisureCourcesResult from '../Screens/Search/LeisureCourcesResult';
import SubjectSearch from '../Screens/Search/SubjectSearch';
import SubjectFilterOption from '../Screens/Search/SubjectFilterOption';
import BookGroupSession from '../Screens/Groupbooking/BookGroupSession';
import SalesDashboardDetail from '../Screens/CategoryAttendence/SalesDashboardDetail';
import SubjectSearchFilterOption from '../Screens/Search/SubjectSearchFilterOption';
import LeisureCourse from '../Screens/CategoryAttendence/LeisureCourse';
import Dashboard from '../Screens/Home/Dashboard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="MainHomeScreen" component={MainHomeScreen} />
        <Stack.Screen name="SmsVerification" component={SmsVerification} />
        <Stack.Screen name="DateOfBirth" component={DateOfBirth} />
        <Stack.Screen name="ShowCourseDetails" component={ShowCourseDetails} />
        <Stack.Screen name="CardSettings" component={CardSettings} />
        <Stack.Screen name="SalesDashboard" component={SalesDashboard} />
        <Stack.Screen name="LeisureCategories" component={LeisureCategories} />
        <Stack.Screen name="MyGroupSessions" component={MyGroupSessions} />
        <Stack.Screen
          name="AttendenceSceesionList"
          component={AttendenceSceesionList}
        />
        <Stack.Screen name="MyCourcesOnSale" component={MyCourcesOnSale} />
        <Stack.Screen name="CardCheckout" component={CardCheckout} />

        <Stack.Screen
          name="TutorProfileDetail"
          component={TutorProfileDetail}
        />
        <Stack.Screen
          name="BankTransferDetails"
          component={BankTransferDetails}
        />
        <Stack.Screen
          name="CourceAttendeceListing"
          component={CourceAttendeceListing}
        />
        <Stack.Screen
          name="SubjectTutorResult"
          component={SubjectTutorResult}
        />

        <Stack.Screen
          name="LeisureCourcesResult"
          component={LeisureCourcesResult}
        />

        <Stack.Screen
          name="SubjectFilterOption"
          component={SubjectFilterOption}
        />

        <Stack.Screen
          name="SubjectSearchFilterOption"
          component={SubjectSearchFilterOption}
        />
        <Stack.Screen name="AddEditReview" component={AddEditReview} />

        <Stack.Screen name="SearchByCity" component={SearchByCity} />
        <Stack.Screen name="LeisureCourse" component={LeisureCourse} />
        <Stack.Screen name="BookGroupSession" component={BookGroupSession} />
        <Stack.Screen name="SubjectSearch" component={SubjectSearch} />
        <Stack.Screen
          name="SalesDashboardDetail"
          component={SalesDashboardDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHomeScreen from './MainHomeScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Images from '../../constants/Images';
import TutorProfileDetail from './TutorProfileDetail';
import MenuScreen from './MenuScreen';
import LeisureCourse from '../CategoryAttendence/LeisureCourse';
import Theme from '../../utils/Theme';
const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.accent,
        inactiveTintColor: Theme.grey,
        showLabel: true,
        style: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '8%',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? Images.homeIcon : Images.homeIcon;
          } else if (route.name === 'Tasks') {
            iconName = focused ? Images.tasks : Images.tasks;
          } else if (route.name === 'LeisureCourse') {
            iconName = focused ? Images.comment : Images.comment;
          } else if (route.name === 'Profile') {
            iconName = focused ? Images.profile1 : Images.profile1;
          }
          return (
            <Image
              source={iconName}
              style={{height: 20, width: 20, resizeMode: 'stretch'}}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={MainHomeScreen} />
      <Tab.Screen name="Tasks" component={MenuScreen} />
      <Tab.Screen name="LeisureCourse" component={LeisureCourse} />
      <Tab.Screen name="Profile" component={TutorProfileDetail} />
    </Tab.Navigator>
  );
}

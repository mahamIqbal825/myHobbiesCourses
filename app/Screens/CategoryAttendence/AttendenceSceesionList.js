import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import Header from '../../shared/components/Header';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import ButtonComponent from '../../shared/components/Button';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Junvary',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'Juily',
    'August',
    'September',
    'October',
    'November',
    'Décember',
  ],
  monthNamesShort: [
    'Jan.',
    'Féb.',
    'Mar',
    'Aprl',
    'May',
    'June',
    'July.',
    'Aug',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Mon.', 'Tue.', 'Wed.', 'Thr.', 'Fri.', 'Sat.', 'Sun.'],
  today: 'Mon',
};
LocaleConfig.defaultLocale = 'fr';

export default class AttendenceSceesionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      items: [
        {
          tittle: 'STUDENT LIST',
          dateIcon: Images.dateIcon,
          path: Images.path,
          pathText: '15-Sep-2016',
          btnText: 'Report',
          day: 'Sunday, 09:00 pm',
        },
        {
          tittle: 'STUDENT LIST',
          dateIcon: Images.dateIcon,
          path: Images.path,
          pathText: '15-Sep-2016',
          btnText: 'Mark Attendence',
          day: 'Sunday, 09:00 pm',
        },
        {
          tittle: 'STUDENT LIST',
          dateIcon: Images.dateIcon,
          path: Images.path,
          pathText: '15-Sep-2016',
          btnText: 'Mark Attendence',
          day: 'Sunday, 09:00 pm',
        },
        {
          tittle: 'STUDENT LIST',
          dateIcon: Images.dateIcon,
          path: Images.path,
          pathText: '15-Sep-2016',
          btnText: 'Mark Attendence',
          day: 'Sunday, 09:00 pm',
        },
      ],
    };
  }
  render() {
    const {items} = this.state;

    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header
            navigation={this.props.navigation}
            text="Class Session List"
          />
          <Card elevation={5} style={styles.card}>
            <Calendar
              // Initially visible month. Default = Date()

              // Hide month navigation arrows. Default = false
              hideArrows={false}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              // renderArrow={direction => <Arrow />}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              // disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
              firstDay={1}
              hideDayNames={true}
              // Hide day names. Default = false
              // Show week numbers to the left. Default = false
              showWeekNumbers={false}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              // onPressArrowLeft={subtractMonth => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              // onPressArrowRight={addMonth => addMonth()}
              // Disable left arrow. Default = false
              disableArrowLeft={false}
              // Disable right arrow. Default = false
              disableArrowRight={false}
              // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
              disableAllTouchEventsForDisabledDays={true}
              // Replace default month and year title with custom one. the function receive a date as parameter

              // Enable the option to swipe between months. Default = false
              enableSwipeMonths={true}
              markingType={'custom'}
              markedDates={{
                '2021-07-20': {
                  customStyles: {
                    container: {
                      backgroundColor: Theme.primary,
                      borderRadius: 4,
                    },
                    text: {
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                },
              }}
            />
          </Card>

          <FlatList
            data={items}
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              return (
                <View>
                  <Text style={styles.label}>{item.tittle}</Text>
                  <View style={styles.cardView}>
                    <Card elevation={5} style={styles.card}>
                      <View style={styles.rowContainer}>
                        <View style={styles.rowIcon}>
                          <Image source={item.path} style={styles.icon} />
                          <Text style={styles.iconText}>{item.pathText}</Text>
                        </View>
                        <View style={styles.rowIcon}>
                          <Image
                            source={item.dateIcon}
                            style={styles.dateIcon}
                          />
                          <Text style={styles.iconText}>{item.day}</Text>
                        </View>
                        <View style={styles.btn}>
                          <Text style={styles.btnText}>{item.btnText}</Text>
                        </View>
                      </View>
                    </Card>
                  </View>
                </View>
              );
            }}
          />
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
  card: {
    padding: Theme.wp('5%'),
    borderRadius: 10,
  },
  cardView: {
    padding: Theme.wp('1%'),
    marginTop: Theme.hp('3%'),
    borderRadius: 10,
  },
  icon: {
    width: 18,
    height: 25,
  },
  dateIcon: {
    width: 18,
    height: 18,
  },

  rowIcon: {
    flexDirection: 'row',
    marginTop: Theme.hp('2%'),
  },
  iconText: {
    marginLeft: Theme.wp('2%'),
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 17,
    textAlign: 'justify',
    color: Theme.fontColor,
  },
  label: {
    marginTop: Theme.hp('3%'),
    fontSize: 20,
    fontFamily: Theme.fontFamilySemiBold,
  },
  btn: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    marginTop: Theme.hp('4%'),
    alignItems: 'center',
    backgroundColor: Theme.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // width: '100%',

    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  btnText: {
    color: Theme.white,
    fontSize: 17,
    fontFamily: Theme.fontFamily,
  },
});

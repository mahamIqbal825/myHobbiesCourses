import {ThemeProvider} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import Images from '../../constants/Images';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import SigninTextComponent from '../../shared/components/SigninTextComponent';
import {Calendar} from 'react-native-calendars';
import ButtonComponent from '../../shared/components/Button';

export default class BookGroupSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      subcatagory: '',
      price: '',
      age: '',
    };
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header
            navigation={this.props.navigation}
            text="Create your Group Booking"
          />
          <View style={styles.messageContainer}>
            <Image source={Images.message} style={styles.mesage} />
            <Text style={styles.messageText}>Session Title</Text>
          </View>
          <View style={styles.InputMessageContainer}>
            <TextInput
              style={styles.messageInput}
              numberOfLines={4}
              textAlignVertical="top"
            />
            <Text style={styles.CountText}>100</Text>
          </View>
          <View style={styles.subjectContainer}>
            <Image source={Images.business} style={styles.mesage} />
            <Text style={styles.messageText}>Add your Subject</Text>
          </View>
          <View style={styles.subjeRowView}>
            <Image source={Images.apps} style={styles.app} />
            <Icon
              name="down"
              size={17}
              color={Theme.fontColorLight}
              style={{
                marginLeft: Theme.hp('2%'),
              }}
            />
            <Picker
              mode={'dropdown'}
              selectedValue={this.state.subject}
              style={styles.picker1}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({subject: itemValue})
              }>
              <Picker.Item label="Catagory" color="black" value="6" />
              <Picker.Item label="Mathis" color="black" value="Mathis " />
              <Picker.Item label="Scince" color="black" value="Scince" />
              <Picker.Item label="English" color="black" value="English" />
              <Picker.Item label="Languages" color="black" value="Languages" />
              <Picker.Item label="Primacy" color="black" value="Primacy" />
              <Picker.Item label="Music" color="black" value="Music" />
            </Picker>
          </View>
          <View style={styles.subjectContainer}>
            <Image source={Images.apps} style={styles.mesage} />
            <Text style={styles.messageText}>Sub-Catagory</Text>
          </View>
          <View style={styles.subjeRowView}>
            <Icon
              name="down"
              size={17}
              color={Theme.fontColorLight}
              style={{
                marginLeft: Theme.hp('2%'),
              }}
            />
            <Picker
              mode={'dialog'}
              selectedValue={this.state.subcatagory}
              style={styles.picker1}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({subcatagory: itemValue})
              }>
              <Picker.Item
                label="Business studies"
                value="Business studies "
                color="black"
              />
              <Picker.Item
                label="Business management "
                color="black"
                value="Business management "
              />
              <Picker.Item label="Economocs" color="black" value="Economocs" />
              <Picker.Item label="History" color="black" value="History " />
              <Picker.Item label="Marketing" color="black" value="Marketing " />
              <Picker.Item
                label="Sociall sciences"
                color="black"
                value="Sociall sciences"
              />
              <Picker.Item label="Sociology" color="black" value="Sociology" />
            </Picker>
          </View>
          <View style={styles.subjectContainer}>
            <Image source={Images.age} style={styles.ages} />
            <Text style={styles.messageText}>Age</Text>
          </View>
          <View style={styles.subjeRowView}>
            <Icon
              name="down"
              size={15}
              color={Theme.fontColorLight}
              style={{
                marginLeft: Theme.hp('2%'),
              }}
            />
            <Picker
              mode={'dialog'}
              selectedValue={this.state.age}
              style={styles.picker1}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({age: itemValue})
              }>
              <Picker.Item label="-Select a Value-" color="black" value="" />
              <Picker.Item
                label="Teenger(13to19"
                color="black"
                value="Teenger(13to19"
              />
              <Picker.Item label="Adult(18+" color="black" value="Adult(18+" />
              <Picker.Item
                label="Child(03to 12"
                color="black"
                value="Child(03to 12"
              />
            </Picker>
          </View>
          <View style={styles.subjectContainer}>
            <Image source={Images.price} style={styles.price} />
            <Text style={styles.messageText}>Price</Text>
          </View>
          <View style={styles.priceComponent}>
            <SigninTextComponent
              placeholder="$ 30"
              keyboardType="number-pad"
              onChangeText={price => this.setState({price})}
              value={this.state.price}
            />
          </View>

          <View style={styles.subjectContainer}>
            <Image source={Images.users} style={styles.users} />
            <Text style={styles.messageText}>Group Strength</Text>
          </View>
          <View style={styles.priceComponent}>
            <SigninTextComponent placeholder="6" keyboardType="number-pad" />
          </View>

          <View style={styles.selectDateView}>
            <Text style={styles.selectDateText}>Select Date</Text>
            <View style={styles.divider} />
          </View>
          <View>
            <Calendar
              theme={{
                arrowColor: Theme.grey,
              }}
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
          <View style={styles.timerView}>
            <View style={styles.subView}>
              <Text style={styles.startTime}>Start Time</Text>
              <View style={styles.flexTimer}>
                <Image source={Images.timer} style={styles.timer} />
                <View>
                  <Text style={styles.timee}>Time</Text>
                  <Text style={styles.timeSeconds}>13:00</Text>
                </View>
                <View>
                  <Image source={Images.up} style={styles.upDown} />
                  <Image source={Images.down} style={styles.down} />
                </View>
              </View>
            </View>

            <View style={styles.subView}>
              <Text style={styles.endTime}>End Time</Text>
              <View style={styles.flexTimer}>
                <Image source={Images.timer} style={styles.timer} />
                <View>
                  <Text style={styles.timee}>Time</Text>
                  <Text style={styles.timeSeconds}>13:00</Text>
                </View>
                <View>
                  <Image source={Images.up} style={styles.upDown} />
                  <Image source={Images.down} style={styles.down} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.DurationView}>
          <View style={styles.durationSubView}>
            <Image source={Images.durationIcon} style={styles.durationIcon} />
            <View style={styles.durationSubView2}>
              <Text style={styles.durationText}>Duration</Text>
              <Text style={styles.time}>1 hours 30min </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnView}>
          <ButtonComponent
            onPress={() => {
              this.props.navigation.navigate('LeisureCourse');
            }}
            text="Add Class/Batch"
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
  mesage: {
    height: 20,
    width: 20,
  },
  app: {
    height: 18,
    width: 18,
    marginLeft: Theme.wp('2%'),
  },
  ages: {
    height: 25,
    width: 22,
  },
  price: {
    height: 21,
    width: 20,
  },
  users: {
    height: 16,
    width: 29,
  },
  messageContainer: {
    flexDirection: 'row',
    marginTop: Theme.hp('3%'),
  },
  subjectContainer: {
    flexDirection: 'row',
    marginTop: Theme.hp('2%'),
  },
  messageText: {
    fontSize: 15,
    fontFamily: Theme.fontFamily,
    paddingLeft: Theme.wp('2%'),
  },
  messageText1: {
    fontSize: 29,
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
  },
  messageInput: {
    color: Theme.fontColor,
    fontFamily: Theme.fontFamily,
    height: 100,
  },
  InputMessageContainer: {
    borderColor: Theme.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: Theme.hp('2%'),
    paddingLeft: Theme.wp('2%'),
  },
  CountText: {
    fontFamily: Theme.fontFamily,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    fontSize: 15,
    color: Theme.grey,
    top: 10,
  },
  subjeRowView: {
    backgroundColor: Theme.TextInputBackground,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: Theme.hp('2%'),
    alignItems: 'center',
  },
  picker1: {
    width: '80%',
    color: Theme.primary,
    fontFamily: Theme.fontFamily,
    fontSize: 15,
    // color: Theme.fontColor,
  },
  priceComponent: {
    marginTop: Theme.hp('2%'),
    padding: 3,
  },
  selectDateView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Theme.hp('2%'),
  },
  selectDateText: {
    fontSize: 29,
    alignSelf: 'center',
    fontFamily: Theme.fontFamilyBold,
    color: Theme.grey,
  },
  divider: {
    width: Theme.wp('56%'),
    height: 2,
    marginTop: Theme.hp('1%'),
    alignSelf: 'center',
    backgroundColor: Theme.primary,
  },
  subView: {
    width: Theme.wp('40%'),
    padding: 10,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
  },
  timer: {
    width: 40,
    height: 40,
  },
  upDown: {height: 16, width: 16},
  down: {height: 16, width: 16, marginTop: 10},
  timerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Theme.hp('10%'),
  },
  flexTimer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.hp('1%'),
  },
  endTime: {
    fontFamily: Theme.fontFamily,
    color: Theme.accent,
  },
  startTime: {
    fontFamily: Theme.ubuntuRegular,
    fontSize: 14,
    color: Theme.primary,
  },
  timee: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 12,
    color: Theme.black,
  },
  timeSeconds: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    color: Theme.grey,
  },
  DurationView: {
    backgroundColor: Theme.duration,
    padding: 20,
  },
  durationIcon: {
    height: 28,
    width: 28,
  },
  durationText: {
    fontSize: 30,
    fontFamily: Theme.ubuntuRegular,
    color: Theme.primary,
    marginLeft: Theme.wp('3%'),
  },
  durationSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: Theme.wp('3%'),
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
    fontSize: 16,
  },
  btnView: {
    padding: 20,
  },
  durationSubView2: {
    marginLeft: Theme.wp('3%'),
  },
});

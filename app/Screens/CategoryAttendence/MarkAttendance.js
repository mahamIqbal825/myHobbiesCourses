import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import {Card, Checkbox} from 'react-native-paper';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';

export default class MarkAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      items: [
        {
          profileImage: Images.profile,
          name: 'STUDENT NAME',
          crossIcon: Images.crossSelect,
          tickIcon: Images.tickSelect,
          date: '   Thuesday, 14:00 03-Jan-2017',
        },
        {
          profileImage: Images.profile,
          name: 'STUDENT NAME',
          crossIcon: Images.crossSelect,
          tickIcon: Images.tickSelect,
          date: '   Thuesday, 14:00 03-Jan-2017',
        },
        {
          profileImage: Images.profile,
          name: 'STUDENT NAME',
          crossIcon: Images.crossSelect,
          tickIcon: Images.tickSelect,
          date: '   Thuesday, 14:00 03-Jan-2017',
        },
      ],
    };
  }
  render() {
    const {items} = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header navigation={this.props.navigation} text="Mark Attendence" />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.studentName}>
            Thomas Michael Voss : Cha Cha Cha, Samba, Rumba, Paso Doble, Jive,
            Waltz, Tango, Viennese Waltz, Foxtrot
          </Text>
        </View>
        <View style={styles.paddingContainer}>
          <View style={styles.batchContainer}>
            <View>
              <Text style={styles.batchText}>Batch start</Text>
              <Text style={styles.dateText}>25-Nov-2016 </Text>
            </View>
            <View>
              <Text style={styles.batchText}>Batch end</Text>
              <Text style={styles.dateText}>25-Jan-2017</Text>
            </View>
          </View>
          <Text style={styles.sessionText}>Session</Text>
          <Text style={styles.fullDate}>Thuesday, 14:00 03-Jan-2017</Text>

          <FlatList
            data={items}
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              return (
                <Card elevation={5} style={styles.card}>
                  <View style={styles.cardContainer}>
                    <Image source={item.profileImage} style={styles.proImage} />
                    <View>
                      <Text style={styles.stuName}>{item.name}</Text>
                      <Text style={styles.fullDateCard}>{item.date}</Text>
                      <View style={styles.selectIcon}>
                        <Image
                          source={item.crossIcon}
                          style={styles.crosIcon}
                        />
                        <Image source={item.tickIcon} style={styles.tickIcon} />
                      </View>
                    </View>
                  </View>

                  <View style={styles.tagContainer}>
                    <View style={styles.tag}>
                      <Text>Late</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text>Comment</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text>Late</Text>
                      <Checkbox
                        status={this.state.checked ? 'checked' : 'unchecked'}
                        onPress={checked => {
                          this.setState({checked: !this.state.checked});
                        }}
                      />
                    </View>
                  </View>
                </Card>
              );
            }}
          />
          <View style={styles.rowBtn}>
            <View style={styles.btn}>
              <ButtonComponent text="Cancel" />
            </View>
            <View style={styles.btn}>
              <ButtonComponent isGreen text="Save" />
            </View>
          </View>
          <Card elevation={5} style={styles.cardSecond}>
            <TextInput
              placeholder="Add your comment here max 100 characters"
              multiline={true}
              numberOfLines={25}
              textAlignVertical="top"
              style={styles.textIn}
              fontSize={16}
              placeholderTextColor={Theme.fontColor}
            />
            <Image source={Images.cros} style={styles.crIcon} />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
  scroll: {
    backgroundColor: Theme.backgroundColor,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  studentName: {
    fontSize: 16,
    color: Theme.attendenceFontColor,
    fontFamily: Theme.fontFamily,
  },
  nameView: {
    padding: Theme.hp('3%'),
  },
  batchText: {
    color: Theme.fontColor,
    fontSize: 18,
    fontFamily: Theme.fontFamily,
  },
  dateText: {
    color: Theme.fontColorLight,
    textAlign: 'center',
  },
  batchContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  paddingContainer: {
    padding: 3,
  },
  sessionText: {
    color: Theme.accent,
    fontSize: 18,
    marginTop: Theme.hp('3%'),
  },
  fullDate: {
    color: Theme.accent,
    opacity: 0.6,
  },
  fullDateCard: {
    color: Theme.accent,
    opacity: 0.6,
    fontSize: 12.5,
    fontFamily: Theme.fontFamilyBold,
  },
  proImage: {
    width: 100,
    height: 110,
  },
  cardContainer: {
    padding: 8,

    flexDirection: 'row',
  },
  stuName: {
    fontSize: 15,
    color: Theme.accent,
    fontFamily: Theme.fontFamily,
    marginLeft: Theme.wp('2%'),
  },
  card: {
    marginTop: Theme.hp('3%'),
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  selectIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: Theme.hp('3%'),
  },
  tickIcon: {
    height: 27,
    width: 26,
    opacity: 0.7,
  },
  crosIcon: {
    height: 26,
    opacity: 0.5,
    width: 26,
    marginRight: 10,
  },
  tag: {
    backgroundColor: Theme.primary,
    opacity: 0.3,
    width: Theme.wp('25%'),
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: Theme.hp('5%'),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: Theme.wp('40%'),
  },
  crIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    top: 10,
    right: 10,
    // paddingRight: Theme.wp('5%'),
  },
  cardSecond: {
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: Theme.hp('4%'),
  },
  textIn: {
    paddingStart: 10,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor,
  },
});

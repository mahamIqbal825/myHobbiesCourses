import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import Theme from '../../utils/Theme';
import Header from '../../shared/components/Header';
import ButtonComponent from '../../shared/components/Button';
import UserComponent from '../../shared/components/UserComponent';

export default class ReportAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerBg}>
            <Header
              navigation={this.props.navigation}
              text="Report Attendance"
            />
          </View>
          <Text style={styles.myText}>
            Thomas Michael Voss:Cha Cha Cha, Samba, Rumba, Paso, Doble, Jive,
            Waltz, Tango, Viennese Waltz, Foxtrot
          </Text>
          <Card style={styles.card}>
            <View style={styles.startEnd}>
              <View style={styles.batchDate}>
                <Text style={styles.batch}>Batch start</Text>
                <Text style={styles.date}>25-Nov-2016</Text>
              </View>
              <View style={styles.batchDate}>
                <Text style={styles.batch}>Batch end</Text>
                <Text style={styles.date}>25-Jan-2017</Text>
              </View>
            </View>
            <Text style={styles.session}>Session B/W:</Text>
            <Text
              style={{
                ...styles.date,
                color: Theme.premiumBtn,
                marginBottom: '5%',
              }}>
              03-jan-2017 - 10-jan-2017
            </Text>
            <View style={styles.row}>
              <Text style={styles.days}>NAME</Text>
              <Text style={styles.days}>MON</Text>
              <Text style={styles.days}>TUE</Text>
              <Text style={styles.days}>WED</Text>
              <Text style={styles.days}>THU</Text>
              <Text style={styles.days}>FRI</Text>
              <Text style={styles.days}>SAT</Text>
              <Text style={styles.days}>SUN</Text>
            </View>

            <View style={styles.row1}>
              <Image
                style={styles.img1}
                source={require('../../assets/Images/man.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/wrong.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
            </View>

            <View style={styles.row1}>
              <Image
                style={styles.img1}
                source={require('../../assets/Images/man1.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/wrong.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
            </View>

            <View style={styles.row1}>
              <Image
                style={styles.img1}
                source={require('../../assets/Images/woman.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/wrong.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
            </View>

            <View style={styles.row1}>
              <Image
                style={styles.img1}
                source={require('../../assets/Images/woman1.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/wrong.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
            </View>

            <View style={styles.row1}>
              <Image
                style={styles.img1}
                source={require('../../assets/Images/woman2.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/wrong.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/icons/correct.png')}
              />
            </View>
          </Card>
          <ButtonComponent text="OK" style={styles.btn} />
          <Text style={{...styles.session, marginVertical: '7%'}}>USER 1</Text>
          <View style={styles.notification}>
            <UserComponent
              img={require('../../assets/Images/userWoman.png')}
              text="Mary Smith"
              smallText="ethan.jackson@mail.com"
              icon={require('../../assets/icons/cross.png')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    paddingHorizontal: '2%',
  },
  headerBg: {
    marginLeft: '7%',
  },
  myText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.headingColor,
    alignSelf: 'center',
    marginVertical: '5%',
    paddingHorizontal: '7%',
  },
  card: {
    elevation: 5,
    paddingHorizontal: '5%',
    borderRadius: 12,
  },
  startEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
  batchDate: {},
  batch: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.headingColor,
  },
  date: {
    fontSize: 13,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.textColor,
  },
  session: {
    fontSize: 18,
    color: Theme.premiumBtn,
    fontFamily: Theme.fontFamily,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '7%',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  img: {
    width: 18,
    height: 18,
  },
  img1: {
    width: 42,
    height: 42,
  },
  days: {
    color: Theme.primary,
    fontSize: 14,
    fontFamily: Theme.fontFamilyBold,
  },
  notification: {
    marginVertical: '5%',
  },
});

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

export default class GroupBookingListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutGroup: [
        {
          title: 'Introduction to Bussnise management',
          ageGroup: 'Adult (18+)',
          CancelitonType: 'Mlid',
          subject: 'Bussnise management Bussnise studies ',
          day: 'Fri, 2 Apr',
          time: '10:00 - 13:00',
          GroupStrength: '5 person',
          Euro: '£ 8.75/ person',
          btnTxt: 'Choose',
          btnCol: Theme.primary,
          ClosedSession: '',
        },
        {
          title: '',
          ageGroup: 'Adult (18+)',
          CancelitonType: 'Mlid',
          subject: 'Bussnise management Bussnise studies ',
          day: 'Fri, 2 Apr',
          time: '10:00 - 13:00',
          GroupStrength: '5 person',
          Euro: '£ 8.75/ person',
          btnTxt: 'Choose',
          btnCol: Theme.primary,
          ClosedSession: '',
        },
        {
          title: 'Introduction to Bussnise management',
          ageGroup: 'Adult (18+)',
          CancelitonType: 'Mlid',
          subject: 'Bussnise management Bussnise studies ',
          day: 'Fri, 2 Apr',
          time: '10:00 - 13:00',
          GroupStrength: '5 person',
          Euro: '£ 8.75/ person',
          btnTxt: 'Choose',
          btnCol: '#BEBEBE',
          ClosedSession: 'Closed Session',
        },
      ],
    };
  }
  render() {
    const {aboutGroup} = this.state;
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerWrap}>
          <Text style={styles.titleHead}>My Group sessions</Text>
          <Image source={Icons.menu} style={styles.imgMenu} />
        </View>
        <Card
          elevation={5}
          style={{
            width: '100%',
            height: 0.5,
          }}
        />
        <ScrollView>
          <FlatList
            data={aboutGroup}
            keyExtractor={(item, index) => item.title}
            renderItem={({item, index}) => {
              return (
                <View style={styles.wrapFlatList}>
                  <Text style={{...styles.txtTitle, color: Theme.accent}}>
                    {item.ClosedSession}
                  </Text>
                  <Text style={styles.txtTitle}>{item.title}</Text>
                  <View style={styles.boxFlatList}>
                    <View style={styles.flexRow}>
                      <View>
                        <Text style={{...styles.txtTitle, color: Theme.white}}>
                          Age group
                        </Text>
                        <Text style={styles.smallFonts}>Adult (18+)</Text>
                      </View>
                      <View style={{left: '50%'}}>
                        <Text style={{...styles.txtTitle, color: Theme.white}}>
                          Canceliton type
                        </Text>
                        <Text style={styles.smallFonts}>
                          {item.CancelitonType}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{...styles.txtTitle, color: Theme.white}}>
                        Subject
                      </Text>
                      <Text style={styles.smallFonts}>{item.subject}</Text>
                    </View>

                    <View style={styles.flexRow}>
                      <View>
                        <Text style={{...styles.txtTitle, color: Theme.white}}>
                          {item.day}
                        </Text>
                        <Text style={styles.smallFonts}> {item.time}</Text>
                      </View>
                      <View style={{left: '50%'}}>
                        <Text style={{...styles.txtTitle, color: Theme.white}}>
                          Group strength
                        </Text>
                        <View
                          style={{
                            ...styles.flexRow,
                            justifyContent: 'space-between',
                          }}>
                          <Text style={styles.smallFonts}>
                            {item.GroupStrength}
                          </Text>
                          <Text
                            style={{
                              ...styles.txtTitle,
                              left: '5%',
                              marginTop: '0%',
                              color: Theme.white,
                              fontSize: 14,
                            }}>
                            {item.Euro}
                          </Text>
                          <TouchableOpacity
                            style={{
                              ...styles.btnStyle,
                              backgroundColor: item.btnCol,
                            }}>
                            <Text style={styles.btnTxt}>{item.btnTxt}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  btnTxt: {
    color: Theme.white,
    fontSize: 12,
  },
  btnStyle: {
    width: '35%',
    height: 40,
    top: 30,
    right: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  smallFonts: {
    fontSize: 14,
    opacity: 0.5607843137254902,
    color: Theme.black,
  },
  wrapFlatList: {width: '85%', alignSelf: 'center'},
  txtTitle: {
    marginTop: '5%',
    color: Theme.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imgMenu: {width: 25, height: 20},
  boxFlatList: {
    backgroundColor: Theme.boxColor,
    borderRadius: 10,
    width: '100%',
    height: 250,
    marginTop: '5%',
    padding: 5,
  },
  headerWrap: {
    padding: '5%',
    width: '80%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleHead: {
    fontSize: 17,
    color: '#222222',
    opacity: 1,
  },
});

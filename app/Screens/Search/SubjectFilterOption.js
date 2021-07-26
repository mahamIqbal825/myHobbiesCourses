import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, Checkbox} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import Swiper from 'react-native-swiper';
import Images from '../../constants/Images';
import {color} from 'react-native-reanimated';

export default class SubjectFilterOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
      isEdit: true,
      checked: false,
      EnglishSub: [
        {
          courseName: 'A-Level',
        },
        {
          courseName: 'Degree',
        },
        {
          courseName: 'GCSE',
        },
        {
          courseName: 'IB',
        },
        {
          courseName: 'KS3',
        },
        {
          courseName: 'Primary',
        },
      ],
    };
  }
  render() {
    const {isEnglish, isEdit, EnglishSub, checked} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.widthWrap}>
            <View style={styles.header}>
              <TouchableOpacity>
                <Text style={styles.txtHeaderTit}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txtHeaderTit}>Qualification</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    ...styles.txtHeaderTit,
                    color: Theme.accent,
                  }}>
                  Subject
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={Images.swiper1} style={styles.imgHome} />
            <Text style={styles.txtCaption}>
              Add the subjects and ALL levels that your are confident to tutor
              at. Scroll to the right to see all subjects that we offer
            </Text>
            <Card elevation={5}>
              <View style={styles.btnWrap}>
                <TouchableOpacity
                  style={
                    isEnglish === true
                      ? styles.btnTxtWrap
                      : {
                          ...styles.btnTxtWrap,
                          backgroundColor: Theme.accent,
                          right: '30%',
                        }
                  }
                  onPress={() => this.setState({isEnglish: !isEnglish})}>
                  <Text
                    style={
                      isEnglish === true
                        ? styles.txtCaption
                        : {...styles.txtCaption, color: Theme.white}
                    }>
                    English
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isEnglish !== true
                      ? styles.btnTxtWrap
                      : {
                          ...styles.btnTxtWrap,
                          backgroundColor: Theme.accent,
                          left: '30%',
                        }
                  }>
                  <Text
                    style={
                      isEnglish !== true
                        ? styles.txtCaption
                        : {...styles.txtCaption, color: Theme.white}
                    }>
                    Maths
                  </Text>
                </TouchableOpacity>
              </View>
              {isEnglish === true ? (
                <View>
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, top: '5%'}}>
                      Math
                    </Text>
                    <View style={styles.btnWrap}>
                      <TouchableOpacity
                        style={
                          isEdit === true
                            ? {...styles.btnTxtWrap, width: 70, height: 35}
                            : {
                                ...styles.btnTxtWrap,
                                backgroundColor: Theme.accent,
                                right: '30%',
                                width: 70,
                                height: 35,
                              }
                        }
                        onPress={() => this.setState({isEdit: !isEdit})}>
                        <Text
                          style={
                            isEdit === true
                              ? styles.txtCaption
                              : {...styles.txtCaption, color: Theme.white}
                          }>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          isEdit !== true
                            ? {...styles.btnTxtWrap, width: 70, height: 35}
                            : {
                                ...styles.btnTxtWrap,
                                backgroundColor: Theme.accent,
                                left: '30%',
                                width: 70,
                                height: 35,
                              }
                        }>
                        <Text
                          style={
                            isEdit !== true
                              ? styles.txtCaption
                              : {...styles.txtCaption, color: Theme.white}
                          }>
                          Save
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Math Literature
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Phonics
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Reading
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Spelling, Punctuation and Grammar
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              ) : (
                <View>
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, top: '5%'}}>
                      English
                    </Text>
                    <View style={styles.btnWrap}>
                      <TouchableOpacity
                        style={
                          isEdit === true
                            ? {...styles.btnTxtWrap, width: 70, height: 35}
                            : {
                                ...styles.btnTxtWrap,
                                backgroundColor: Theme.accent,
                                right: '30%',
                                width: 70,
                                height: 35,
                              }
                        }
                        onPress={() => this.setState({isEdit: !isEdit})}>
                        <Text
                          style={
                            isEdit === true
                              ? styles.txtCaption
                              : {...styles.txtCaption, color: Theme.white}
                          }>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          isEdit !== true
                            ? {...styles.btnTxtWrap, width: 70, height: 35}
                            : {
                                ...styles.btnTxtWrap,
                                backgroundColor: Theme.accent,
                                left: '30%',
                                width: 70,
                                height: 35,
                              }
                        }>
                        <Text
                          style={
                            isEdit !== true
                              ? styles.txtCaption
                              : {...styles.txtCaption, color: Theme.white}
                          }>
                          Save
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      English Literature
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Phonics
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Reading
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <View style={styles.wrapCourseTitle}>
                    <Text style={{...styles.txtTitleCour, marginTop: '5%'}}>
                      Spelling, Punctuation and Grammar
                    </Text>
                  </View>
                  <FlatList
                    data={EnglishSub}
                    numColumns={2}
                    keyExtractor={(item, index) => item.courseName}
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.wrapFlatList}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Theme.checkBox}
                          />
                          <Text style={styles.courseName}>
                            {item.courseName}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </Card>
            <TouchableOpacity style={styles.btnSave}>
              <Text style={{...styles.txtTitleCour, color: Theme.white}}>
                Save changes
              </Text>
            </TouchableOpacity>
          </View>
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
  btnSave: {
    backgroundColor: Theme.accent,
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  wrapFlatList: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapCourseTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  courseName: {
    fontSize: 14,
    color: '#9F9F9F',
  },
  txtTitleCour: {
    fontSize: 14,
    color: '#00A89B',
    fontWeight: 'bold',
  },
  btnWrap: {
    flexDirection: 'row',
    // paddingTop: '5%',
    margin: '5%',
  },
  btnTxtWrap: {
    backgroundColor: Theme.white,
    height: 40,
    width: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtCaption: {
    fontSize: 14,
    color: '#656565',
    textAlign: 'left',
  },
  imgHome: {
    width: '100%',
    height: 300,
    margin: '10%',
    alignSelf: 'center',
  },
  widthWrap: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: '10%',
  },
  txtHeaderTit: {
    fontSize: 15,
    color: '#656565',
  },
});

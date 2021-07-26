import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class SubjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [
        {
          name: 'Subject Tuitions',
          subject:
            'Find online and in-person tutors to meet your learning needsSubject Tuition.',
          fee: ' (Adult 18+)   $500',
          pic: Images.science1,
        },
        {
          name: 'Subject Tuitions',
          subject:
            'Find online and in-person tutors to meet your learning needsSubject Tuition.',
          fee: ' (Adult 18+)   $500',
          pic: Images.science2,
        },
        {
          name: 'Subject Tuitions',
          subject:
            'Find online and in-person tutors to meet your learning needsSubject Tuition.',
          fee: ' (Adult 18+)   $500',
          pic: Images.subject1,
        },
        {
          name: 'Subject Tuitions',
          subject:
            'Find online and in-person tutors to meet your learning needsSubject Tuition.',
          fee: ' (Adult 18+)   $500',
          pic: Images.subject2,
        },
      ],
    };
  }
  render() {
    const navigation = this.props.navigation;
    const {tutors} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={Images.back} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Lsle of wight </Text>
            <View />
          </View>
          <Card elevation={5} style={styles.search}>
            <View style={styles.searchBar}>
              <Image
                source={Images.search}
                style={{...styles.searchIcon, tintColor: Theme.fontColorLight}}
              />
              <TextInput
                placeholder="Add a date  "
                placeholderTextColor={Theme.fontColorLight}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SubjectSearchFilterOption')
                }>
                <Image source={Images.filter} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </Card>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Group Tuitions</Text>
            <Text style={styles.more}>
              Find online and in-person tutors to meet your learning needs
              Subject Tuition.
            </Text>
          </View>

          <FlatList
            data={tutors}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <Card
                  style={styles.tutorContainer}
                  elevation={3}
                  onPress={() => {
                    //navigation.navigate('SubjectTutorResult');
                  }}>
                  <View style={styles.tutorInnerContainer}>
                    <Image source={item.pic} style={styles.avatar} />
                    <View style={styles.nameContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image source={Images.tag} style={styles.tag} />
                    </View>
                    <Text style={styles.subject}>{item.subject}</Text>
                  </View>
                </Card>
              );
            }}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Leisure Courses</Text>
            <Text style={styles.more}>
              Rethink learning, find recreational online and in-person courses.
            </Text>
          </View>

          <FlatList
            data={tutors}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <Card style={styles.tutorContainer} elevation={3}>
                  <View style={styles.tutorInnerContainer}>
                    <Image source={item.pic} style={styles.avatar} />
                    <View style={styles.nameContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image source={Images.tag} style={styles.tag} />
                    </View>
                    <Text style={styles.subject}>{item.subject}</Text>
                  </View>
                </Card>
              );
            }}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Group Tuitions</Text>
            <Text style={styles.more}>
              Find exciting online group sessions by our Verified tutors
            </Text>
          </View>

          <FlatList
            data={tutors}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <Card style={styles.tutorContainer} elevation={3}>
                  <View style={styles.tutorInnerContainer}>
                    <Image source={item.pic} style={styles.avatar} />
                    <View style={styles.nameContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Image source={Images.tag} style={styles.tag} />
                    </View>
                    <Text style={styles.subject}>{item.subject}</Text>
                  </View>
                </Card>
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
    paddingTop: '5%',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  header: {
    width: '100%',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '5%',
  },
  title: {
    fontSize: 18,
    fontFamily: Theme.fontFamilySemiBold,
  },
  searchBar: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 55,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: Theme.fontFamilySemiBold,
    flex: 1,
  },
  search: {
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: '7%',
    justifyContent: 'space-between',
  },
  btnView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: -18,
  },
  chipContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  chip: {
    backgroundColor: Theme.primary,
    padding: 6,
    borderRadius: 6,
    paddingHorizontal: 6,
  },
  chipText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 16,
  },
  headingContainer: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    marginBottom: 10,
    marginTop: 10,
  },
  heading: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 15,
  },
  more: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 15,
    color: Theme.fontColorLight,
  },
  tutorInnerContainer: {},
  tutorContainer: {
    width: '46%',
    margin: '2%',
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: '100%',
    height: 170,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  reviewButton: {
    backgroundColor: Theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 18,
  },
  fee: {
    color: Theme.accent,
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  name: {
    fontFamily: Theme.fontFamily,
    fontSize: 16,
    // paddingHorizontal: 10,
    textAlign: 'left',
  },
  subject: {
    fontFamily: Theme.fontFamily,
    color: Theme.fontColorLight,
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  tag: {
    width: 15,
    height: 24,
    // margin: 5,
    marginTop: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

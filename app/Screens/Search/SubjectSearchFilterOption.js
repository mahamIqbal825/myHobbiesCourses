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
import ProfileComponent from '../../components/ProfileComponent';
import ProfileInput from '../../components/ProfileInput';
import ProfileInputText from '../../components/ProfileInputText';
import {SearchBar} from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import SigninTextComponent from '../../shared/components/SigninTextComponent';

export default class SubjectSearchFilterOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      category: '',
      search: '',
      start: 0,
      end: 36,
      start1: 0,
      end1: 36,
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  enableScroll = () => this.setState({scrollEnabled: true});
  disableScroll = () => this.setState({scrollEnabled: false});
  render() {
    const {search} = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            <Header navigation={this.props.navigation} />
          </View>
          <Text style={styles.label}>Subject</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Choose Subject for your session"
              value={this.state.subject}
              onChangeText={subject => this.setState({subject})}
            />
          </View>
          <Text style={styles.label1}>Subject-Category</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Choose Sub-category for your session"
              value={this.state.category}
              onChangeText={category => this.setState({category})}
            />
          </View>
          <Text style={styles.label}>Tutor Name</Text>
          <TextInput
            style={styles.myInput}
            placeholder="Search by Tutor Name"
            value={this.state.search}
            onChangeText={search => this.setState({search})}
          />
          <Text style={styles.label}>Hourly Rate</Text>
          <Text style={styles.rate}>$5-$100</Text>
          <MultiSlider
            markerStyle={{
              ...Platform.select({
                ios: {
                  height: 15,
                  width: 15,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                },
                android: {
                  height: 15,
                  width: 15,
                  borderRadius: 50,
                  backgroundColor: Theme.borderColor,
                },
              }),
            }}
            pressedMarkerStyle={{
              ...Platform.select({
                android: {
                  height: 15,
                  width: 15,
                  borderRadius: 20,
                  backgroundColor: Theme.borderColor,
                },
              }),
            }}
            selectedStyle={{
              backgroundColor: Theme.primary,
            }}
            trackStyle={{
              backgroundColor: Theme.textColor,
              height: 5,
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            values={[this.state.start, this.state.end]}
            sliderLength={320}
            onValuesChange={v => {
              this.setState({start: v[0], end: v[1]});
            }}
            min={0}
            max={20}
            allowOverlap={false}
            minMarkerOverlapDistance={20}
          />
          <View style={styles.hourBg}>
            <Text style={styles.hourText}>less than 20</Text>
            <Text style={styles.hourText}>less than 20</Text>
            <Text style={styles.hourText}>less than 20</Text>
            <Text style={styles.hourText}>less than 20</Text>
            <Text style={styles.hourText}>less than 20</Text>
            <Text style={styles.hourText}>less than 20</Text>
          </View>
          <Text style={styles.label}>Travel Policy</Text>
          <Text style={styles.rate}>1 mile-20 miles</Text>
          <MultiSlider
            markerStyle={{
              ...Platform.select({
                ios: {
                  height: 15,
                  width: 15,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                },
                android: {
                  height: 15,
                  width: 15,
                  borderRadius: 50,
                  backgroundColor: Theme.borderColor,
                },
              }),
            }}
            pressedMarkerStyle={{
              ...Platform.select({
                android: {
                  height: 15,
                  width: 15,
                  borderRadius: 20,
                  backgroundColor: Theme.borderColor,
                },
              }),
            }}
            selectedStyle={{
              backgroundColor: Theme.primary,
            }}
            trackStyle={{
              backgroundColor: Theme.textColor,
              height: 5,
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            values={[this.state.start1, this.state.end1]}
            sliderLength={320}
            onValuesChange={v => {
              this.setState({start1: v[0], end1: v[1]});
            }}
            min={0}
            max={20}
            allowOverlap={false}
            minMarkerOverlapDistance={20}
          />
          <View style={styles.hourBg}>
            <Text style={styles.hourText}>1 mile</Text>
            <Text style={styles.hourText}>2 mile</Text>
            <Text style={styles.hourText}>5 mile</Text>
            <Text style={styles.hourText}>10 mile</Text>
            <Text style={styles.hourText}>15 mile</Text>
            <Text style={styles.hourText}>20 mile</Text>
          </View>
          <Text style={styles.heading}>Order Results By</Text>
          <Text style={styles.simpleText}>Price (ASC) </Text>
          <Text style={styles.simpleText}>Price (DESC)</Text>
          <View style={styles.sortByBg}>
            <View />
            <Text style={styles.sortBy}>Sort by</Text>
            <TouchableOpacity style={styles.crossBg}>
              <Image
                style={styles.cross}
                source={require('../../assets/icons/cross.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.sortingBg}>Sort by</Text>
          <Text style={styles.sorting}>Newest courses</Text>
          <Text style={styles.sorting}>Earliest courses</Text>
          <Text style={styles.sorting}>Most discussed</Text>
          <Text style={styles.sorting}>Least discussed</Text>
          <Text style={styles.sorting}>Newest courses</Text>
          <Text style={styles.sorting}>Price descending</Text>
          <Text style={styles.sorting}>Price Ascending</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Theme.wp('100%'),
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    paddingHorizontal: '5%',
    marginBottom: 44,
  },
  label: {
    color: Theme.fontColor,
    marginTop: Theme.hp('4%'),
    fontSize: 15,
    fontFamily: Theme.fontFamilySemiBold,
  },
  label1: {
    color: Theme.fontColor,
    marginTop: Theme.hp('3%'),
    fontSize: 15,
    fontFamily: Theme.fontFamilySemiBold,
  },
  rate: {
    fontSize: 12,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    marginTop: '2%',
  },
  inputView: {
    marginTop: Theme.hp('1%'),
    justifyContent: 'center',
  },
  myInput: {
    backgroundColor: Theme.textInputColor,
    width: '65%',
    borderRadius: 12,
    paddingLeft: 12,
    height: 50,
    color: Theme.headingColor,
    fontFamily: Theme.fontFamily,
    fontSize: 17,
    marginTop: '2%',
  },
  hourBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 7,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
  },
  heading: {
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
    fontSize: 17,
    marginTop: '10%',
    marginBottom: '2%',
  },
  simpleText: {
    color: Theme.textColor,

    marginTop: '3%',
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 15,
  },
  sortByBg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '5%',
  },
  sortBy: {
    fontSize: 25,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
  },
  crossBg: {
    width: 26,
    height: 26,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    width: '100%',
    height: '100%',
  },
  sortingBg: {
    color: Theme.headingColor,
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
    marginBottom: '1%',
  },
  sorting: {
    color: Theme.textColor,
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 17,
    marginVertical: '1%',
  },
});

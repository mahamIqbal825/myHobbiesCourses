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
import ButtonComponent from '../../shared/components/Button';

export default class LeisureCourcesFilterOption extends Component {
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
      start2: 0,
      end2: 36,
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
            <Header />
          </View>
          <Text style={styles.label}>Subject</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Choose Subject for your session"
              value={this.state.subject}
              onChangeText={subject => this.setState({subject})}
            />
          </View>
          <Text style={styles.label}>Subject-Category</Text>
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
          <Text style={styles.label}>Group size</Text>
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

          <Text style={styles.sortingBg}>Age Group</Text>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Adult (18+)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/colorIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Teenager (13 to 19)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Child (03 to 12)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <Text style={styles.label}>Time of Day</Text>
          <Text style={styles.rate}>08 am-08 miles</Text>
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
            values={[this.state.start2, this.state.end2]}
            sliderLength={320}
            onValuesChange={v => {
              this.setState({start2: v[0], end2: v[1]});
            }}
            min={0}
            max={20}
            allowOverlap={false}
            minMarkerOverlapDistance={20}
          />
          <View style={styles.hourBg}>
            <Text style={styles.hourText}>Mornig 08am- 12am</Text>
            <Text style={styles.hourText}>Afternoon 12am- 03pm</Text>
            <Text style={styles.hourText}>Last afternoon 03pm- 05pm</Text>
            <Text style={styles.hourText}>Evening 05pm- 08pm</Text>
          </View>
          <Text style={styles.sortingBg}>Order Results By</Text>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Price (ASC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/colorIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Price (DESC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Distance</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Start date (DESC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/colorIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Start date (ASC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Review count (DESC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/colorIcon.png')}
            />
          </View>
          <View style={styles.itemBg}>
            <Text style={styles.sorting}>Review count (ASC)</Text>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/emptyIcon.png')}
            />
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.btnBg}>
              <Text style={styles.btnText}>Clear All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.btnBg, backgroundColor: Theme.accent}}>
              <Text style={{...styles.btnText, color: Theme.white}}>
                Review 80+ results
              </Text>
            </TouchableOpacity>
          </View>
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
    marginTop: Theme.hp('3%'),
    fontSize: 17,
    fontFamily: Theme.fontFamily,
  },
  rate: {
    fontSize: 13,
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 6,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.textColor,
  },
  heading: {
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
    fontSize: 16,
    marginTop: '6%',
    marginBottom: '2%',
  },
  simpleText: {
    color: Theme.textColor,
    fontFamily: Theme.fontFamily,
    fontSize: 15,
  },
  sortByBg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '5%',
  },
  sortBy: {
    fontSize: 22,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
  },
  crossBg: {
    width: 26,
    height: 26,
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
    fontSize: 18,
    marginBottom: '1%',
    marginTop: '5%',
  },
  itemBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sorting: {
    color: Theme.textColor,
    fontFamily: Theme.fontFamily,
    fontSize: 17,
    marginVertical: '1%',
  },
  icon: {
    width: 15,
    height: 15,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '15%',
  },
  btnBg: {
    backgroundColor: Theme.textInputColor,
    paddingVertical: 12,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.headingColor,
  },
});

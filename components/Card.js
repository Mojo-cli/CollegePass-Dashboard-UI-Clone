import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from './Button';
import axios from 'axios';

import 'intl';
import 'intl/locale-data/jsonp/en-US';
import {LIVE_CLASSES, PREVIOUS_CLASSES} from '../api/api';

const Card = ({title, callFrom}) => {
  const [slides, setSlides] = useState();

  const api = async () => {
    const res = await axios.get(
      callFrom === 'Previous Classes' ? PREVIOUS_CLASSES : LIVE_CLASSES,
    );
    setSlides(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    api();
  }, []);

  const renderItem = item => {
    const date = new Date(item.item.DATE_TIME);
    // console.log(date);
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // console.log(timezone);
    // console.log(days[date.getDay()]);
    // console.log(months[date.getMonth()]);
    // console.log(dateNumber);

    const hour = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // console.log(hour);

    let [month, dateNumber, year] = date.toLocaleDateString('en-US').split('/');

    return (
      <View style={styles.content} key={item.item.ID}>
        <Image source={{uri: item.item.s3_image}} style={styles.bgImage} />
        <View style={styles.overlay} />
        <View style={styles.buttonContainer}>
          <Button
            title={
              callFrom === 'UPCOMING LIVE CLASSES' ? 'LIVE CLASS' : 'RECORDING'
            }
            style={{height: 30}}
            titleStyle={{fontSize: 12}}
          />
          <Button
            title="PREMIUM+"
            icon={true}
            imgSrc={require('../assets/collegepassblack.png')}
            iconStyle={{width: 15, height: 15}}
            style={{height: 30, backgroundColor: '#ffffff'}}
            titleStyle={{fontSize: 12, color: 'black'}}
          />
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.courseTitle}>
            {callFrom === 'UPCOMING LIVE CLASSES'
              ? item.item.NAME
              : item.item.ARCHIVE_NAME}
          </Text>
          {callFrom === 'UPCOMING LIVE CLASSES' ? (
            <Text
              style={{color: 'yellow', fontWeight: '500', textAlign: 'center'}}>
              {days[date.getDay()]}, {months[date.getMonth()]} {dateNumber}
            </Text>
          ) : null}
          {callFrom === 'UPCOMING LIVE CLASSES' ? (
            <Text style={{color: 'white', textAlign: 'center'}}>
              {hour} Asia/Kolkata
            </Text>
          ) : null}
        </View>
        <Button
          title={
            callFrom === 'UPCOMING LIVE CLASSES'
              ? 'BOOK A FREE TRIAL CLASS'
              : 'WATCH NOW'
          }
          style={{
            height: 30,
            width: callFrom === 'UPCOMING LIVE CLASSES' ? 250 : 100,
            position: 'absolute',
            marginTop: 180,
          }}
          titleStyle={{fontSize: 12}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {slides ? (
        <AppIntroSlider
          data={slides.data}
          renderItem={item => renderItem(item)}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        />
      ) : null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '90%',
    // borderWidth: 1,
    borderColor: 'white',
  },
  titleContainer: {
    // borderWidth: 2,
    borderColor: 'green',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  content: {
    // borderWidth: 3,
    borderColor: 'red',
    height: '90%',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  bgImage: {
    height: '100%',
    width: '100%',
    borderRadius: 18,
  },
  dotStyle: {
    marginTop: 45,
    backgroundColor: 'gray',
    height: 6,
    width: 6,
  },
  activeDotStyle: {
    marginTop: 45,
    backgroundColor: 'white',
    height: 6,
    width: 6,
  },
  infoContent: {
    width: '70%',
    height: '45%',
    // borderWidth: 2,
    position: 'absolute',
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    marginTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 8,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  courseTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

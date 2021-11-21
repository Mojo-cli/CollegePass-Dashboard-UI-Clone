import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from './Button';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContent}>
        <Image source={require('../assets/menu.png')} />
        <Image
          source={require('../assets/collegepass.png')}
          style={styles.logo}
        />
      </View>

      <View>
        <Button title="LOG IN"/>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    justifyContent:"space-between"
  },
  logo: {
    height: 50,
    width: 50,
    marginLeft: 10,
  },
  leftContent: {
    width: '35%',
    height: '100%',
    // borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

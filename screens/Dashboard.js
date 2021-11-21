import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />
      <Header />
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <Card title="UPCOMING LIVE CLASSES" callFrom="UPCOMING LIVE CLASSES" />
        <Card title="PREVIOUS LIVE STREAMS" callFrom="Previous Classes" />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

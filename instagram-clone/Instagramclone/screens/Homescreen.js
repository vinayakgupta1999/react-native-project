import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Stories from '../components/home/Stories';
import Header from '../components/home/Header';
const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Stories/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'black',
      flex:1,
    },
  });

export default Homescreen
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#eee",flex: 1}}>
      <View style={{backgroundColor:"white", padding: 15}} >
      <HeaderTabs/>
    </View>
    </SafeAreaView>
  )
}

export default Home
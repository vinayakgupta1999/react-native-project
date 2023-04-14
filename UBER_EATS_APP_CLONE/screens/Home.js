import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e59149d52msh88befbe9c95f315p16ece1jsn1681570f211b',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  // useEffect = (() => {
  //   fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // },[])
  useEffect(()=>{
    fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",options)
    .then((res)=>res.json())
    .then(res=>console.log(res,"datataaaaa"))
  })
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }} >
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants=[
    {
        name: "Beachside Bar",
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F04%2F24%2Fppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg&q=60",
        categories:["cafe","Bar"],
        price:"$$",
        reviews:1244,
        rating:4.5,
    },
    {
        name: "Benihana",
        image_url:"https://static.toiimg.com/photo/51076300/.jpg",
        categories:["cafe","Bar"],
        price:"$$",
        reviews:1244,
        rating:3.7,  
    },
    {
        name: "India's Grill",
        image_url:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories:["Indian","Bar"],
        price:"$$",
        reviews:700,
        rating:4.7,  
    }
]


const RestaurantItems = (props) => {
  
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {props.restaurantData.map((restaurant,index)=>(
            
            <View  key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
        ))}
        </TouchableOpacity>
    )
}

export default RestaurantItems;

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{
                width: "100%",
                height: 180,
            }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold",color: "gray" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 * min</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
        }} >

            <Text>
                {props.rating}
            </Text>
        </View>
    </View>
)
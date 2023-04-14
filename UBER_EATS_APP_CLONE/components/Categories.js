import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drink"
    },
    {
        image: require("../assets/images/bakery-items.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../assets/images/deal.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee-&-tea.jpg"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/dessert.png"),
        text: "Desserts"
    },
]
const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
                        <Image source={item.image} style={{
                            width: 50,
                            height: 50,
                            resizeMode: "contain"
                        }} />
                        <Text style={{ fontSize: 13, fontWeight: "900",color:"#000" }}>{item.text}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

export default Categories
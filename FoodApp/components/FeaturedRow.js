import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { themeColor } from "../themes";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
    return (
        <View>
            <View style={tw`flex-row justify-between items-center px-4`}>
                <View>
                    <Text style={tw`text-lg font-bold `}>{title}</Text>
                    <Text style={tw`text-xs text-gray-500`}>
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={[{ color: themeColor.text }, tw`font-semibold`]}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={tw`overflow-visible py-2`}
            >
                {
                    restaurants.map((restaurants, index) => {
                        return (
                            <RestaurantCard key={index}
                            item={restaurants} />
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}
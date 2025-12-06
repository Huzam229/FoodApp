import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import tw, { style } from 'twrnc'
import { themeColor } from "../themes";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import { featured } from "../constants";
import { getFeaturedRestaurant } from "../api";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function HomeScreen() {
const [featurdRestaurant,setFeaturedRestaurant]=useState([]);

const handleLogOut = async ()=>{
    await signOut(auth)
}
    useEffect(()=>{
        getFeaturedRestaurant().then(data=>{
            // console.log('Data:', data)
            setFeaturedRestaurant(data);
        })
    },[])

    return (
        <SafeAreaView style={tw`bg-white`}>
            {/* search bar */}
            <View style={tw`flex-row items-center px-4 py-2.5 pb-2`}>

                <View style={tw`flex-row flex-1 items-center p-1 rounded-full border border-gray-400 `}>
                    <Icon.Search height={25} width={25} stroke="gray" style={tw`ml-1`} />
                    <TextInput placeholder="Restaurant" style={tw`ml-1 flex-1`} />
                    <View style={tw`flex-row items-center border-0 border-l-2 border-l-gray-300 pl-1 mr-1`}>
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text style={tw`text-gray-600 text-xs`}> New York, NYC </Text>
                    </View>
                </View>
                <TouchableOpacity
                onPress={handleLogOut}>
                <View style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`p-3  rounded-full ml-1`]}>
                    <Icon.LogOut height="20" width="20" stroke="white" strokeWidth={2.5} />
                </View>
                </TouchableOpacity>

            </View>

            {/* main content area */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 70 }}>

                {/* categories */}

                <Categories />

                {/* featured */}

                <View style={tw`mt-5`}>
                    {
                        featurdRestaurant.map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.name}
                                    description={item.description}
                                    restaurants={item.restaurants}
                                />
                            )
                        })
                    }

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
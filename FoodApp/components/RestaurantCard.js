import React from "react";
import { View, Text, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import * as Icon from "react-native-feather";
import { themeColor } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";


export default function RestaurantCard({ item }) {
    const navigation=useNavigation();
    return (
        
        <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('Restaurant',{...item})}>
            <View style={[tw`mr-6 bg-white rounded-3xl shadow-xl`, {shadowColor:themeColor.bgcolor(0.9)} ]}>
                <Image style={tw`w-64 h-36 rounded-t-3xl `}
                    source={{uri:urlFor(item.image).url()}} />
                <View style={tw`px-3 pb-4`}>
                    <Text style={tw`mt-2 text-lg font-bold`}>{item.name} </Text>
                    <View style={tw`flex-row items-center`}>
                        <Image source={require('../assets/starImage.png')}
                            style={tw`h-4 w-4 ml-1 mr-0.5`} />
                        <Text style={tw`text-xs`}>
                            <Text style={tw`text-green-700 mr-1`}>{item.stars}</Text>
                            <Text style={tw`text-gray-700`}> ({item.reviews} reviews) ·
                                <Text style={tw`font-semibold`}> {item?.type?.name}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={tw`flex-row items-center mt-1 ml-1`}>
                        <Icon.MapPin color="gray" height="17" width="17" />
                        <Text style={tw`text-gray-500 text-xs`}> NearBy · {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}
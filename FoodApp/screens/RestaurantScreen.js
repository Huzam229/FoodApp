import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import * as Icon from "react-native-feather";
import { themeColor } from "../themes";
import DishesRow from "../components/dishesRow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlices";
import { urlFor } from "../sanity";


export default function RestaurantScreen({ }) {
    const { params } = useRoute();
    const navigation = useNavigation();
    const dispatch=useDispatch();
    let item = params;
    useEffect(()=>{
        if(item && item._id){
            dispatch(setRestaurant({...item}))
        }

    },[])
    return (
        <View>
            <CartIcon/>
            <ScrollView contentContainerStyle={{paddingBottom:5}}>
                <View style={tw`relative`}>
                    <Image style={tw`w-full h-75 `} source={{uri:urlFor(item.image).url()}} resizeMode="stretch" />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()} style={tw`absolute top-8 left-2 bg-gray-50 p-2 rounded-full`}>
                        <Icon.ArrowLeft stroke={themeColor.bgcolor(1)} strokeWidth={3} height="20" width="20" />
                    </TouchableOpacity>
                </View>
                <View style={[{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }, tw`bg-white pt-6 -mt-12`]}>
                    <Text style={tw`text-3xl font-bold text-left ml-3`}>{item.name}</Text>
                    <View style={tw`flex-row my-1 mx-2`}>
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
                    </View>
                    <View style={tw`flex-row items-center  ml-3`}>
                        <Icon.MapPin color="gray" height="17" width="17" />
                        <Text style={tw`text-gray-500 text-xs`}> NearBy · {item.address}</Text>

                    </View>
                    <View style={tw`ml-3.5 mt-2`}>
                        <Text style={tw`text-sm text-gray-600`}>{item.description}</Text>
                    </View>

                </View>
                <View style={tw`pb-36 bg-white`}>
                    <Text style={tw`text-2xl px-3 py-3 font-bold`}>Menu</Text>
                    {/* dishes */}
                    {
                        item.dishes.map((dishes,index)=>{
                            return(
                               <DishesRow item={{...dishes}} key={index} />
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View>
    )
}
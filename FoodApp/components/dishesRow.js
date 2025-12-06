import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import { themeColor } from '../themes';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, selectCartById, selectCartTotal } from '../slices/cartSlices';
import { urlFor } from '../sanity';


export default function DishesRow({ item }) {
    const dispatch = useDispatch()
    const toltalItem = useSelector(state => selectCartById(state, item._id))
    const handleIncrease = () => {
        dispatch(addToCart({ ...item }))
    }
    const handleDecrease = () => {

        dispatch(removeToCart({ id: item._id }))
    }
    return (
        <View style={tw`flex-row items-center bg-white p-3 rounded-3xl shadow mx-2 mb-3 `}>
            <Image style={[{ height: 100, width: 100 }, tw`rounded-3xl`]}
                source={{uri:urlFor(item.image).url()}} />
            <View style={tw`flex flex-1 `}>
                <View style={tw`pl-3`}>
                    <Text style={tw` text-xl`}>{item.name} </Text>
                    <Text style={tw` text-sm text-gray-700`}>{item.description} </Text>
                </View>
                <View style={tw`flex-row justify-between items-center pl-3 `}>
                    <Text style={tw`text-gray-700 text-lg font-bold`}>${item.price}</Text>
                    <View style={tw`flex-row items-center`}>
                        <TouchableOpacity
                            disabled={!toltalItem.length} // when cart has not item touchable is not workng
                            onPress={handleDecrease}
                            style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`p-1  rounded-full`]} >
                            <Icon.Minus strokeWidth={2} height="20" width="20" color="white" />
                        </TouchableOpacity>
                        <Text style={tw`px-3`}>
                            {toltalItem.length}
                        </Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`p-1 rounded-full`]} >
                            <Icon.Plus strokeWidth={2} height="20" width="20" color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    )
}
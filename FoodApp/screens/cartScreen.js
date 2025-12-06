import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import tw from 'twrnc';
import { themeColor } from '../themes';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlices';
import { removeToCart, selectCart, selectCartTotal } from '../slices/cartSlices';
import { urlFor } from '../sanity';

export default function CartScreen() {
    const navigation = useNavigation();
    const [visible, setvisible] = useState(true)
    const restaurants = useSelector(selectRestaurant)
    const cartItem = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItem, setGroupedItem] = useState({});
    const dispatch = useDispatch();
    const deliveryFee = 2;
    useEffect(() => {
        const item = cartItem.reduce((group, item) => {
            if (group[item._id]) {
                group[item._id].push(item)
            } else {
                group[item._id] = [item]
            }
            return group
        }, {});
        setGroupedItem(item)
    }, [cartItem])
    const closeModal = () => {
        setTimeout(() => {
            setvisible(false);
            navigation.goBack();
        }, 500);
    };

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}>
            <View style={tw`bg-white flex-1`}>
                <View style={tw`relative py-4 shadow-sm`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`absolute rounded-full top-3 left-3 p-2 `]}>
                        <Icon.ArrowLeft stroke="white" strokeWidth={3} />

                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={tw`text-center font-bold text-xl`}>Your Cart</Text>
                    <Text style={tw`text-center font-bold text-gray-500`}>{restaurants.name}</Text>
                </View>
                <View style={[{ backgroundColor: themeColor.bgcolor(0.2) }, tw`flex-row px-2 items-center  mt-2`]}>
                    <Image style={tw`h-20 w-20 rounded-full`}
                        source={require('../assets/deliveryGuy3.png')} />
                    <Text style={tw`flex-1 pl-4`}>Delivery in 20-30 minutes</Text>
                    <TouchableOpacity
                    >
                        <Text style={[{ color: themeColor.text }, tw`font-bold`]}>Change</Text>
                    </TouchableOpacity>
                </View>
                {/* dishes */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    style={tw`bg-white pt-5`}
                >
                    {
                        Object.entries(groupedItem).map(([key, items]) => {
                            let dish = items[0];
                            return (
                                <View key={key} style={tw`flex-row items-center px-4 py-4 rounded-3xl mb-3 mx-2 shadow-md bg-white`}>
                                    <Text stule={[{ color: themeColor.text }, tw`font-bold`]}>
                                        {items.length} x
                                    </Text>
                                    <Image style={tw`h-15 w-15 rounded-xl ml-2`}
                                        source={{uri:urlFor(dish.image).url()}} />
                                    <Text style={tw`font-bold text-gray-700 flex-1 ml-3`}>{dish.name}</Text>
                                    <Text style={tw`font-semibold text-base ml-2`}>${dish.price}</Text>
                                    <TouchableOpacity
                                        onPress={() => dispatch(removeToCart({ id: dish._id }))}
                                        style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`rounded-full p-1 ml-1`]} >
                                        <Icon.Minus stroke="white" strokeWidth={2} height="20" width="20" />
                                    </TouchableOpacity>

                                </View>

                            )
                        })
                    }

                </ScrollView>
                {/* totols */}

                <View style={[{ backgroundColor: themeColor.bgcolor(0.2) }, tw`p-6 px-5 rounded-t-2xl`]}>
                    <View style={tw`flex-row justify-between mb-1`}>
                        <Text style={tw`text-gray-700`}>Subtotals</Text>
                        <Text style={tw`text-gray-700`}>${cartTotal}</Text>
                    </View>
                    <View style={tw`flex-row justify-between mb-1`}>
                        <Text style={tw`text-gray-700`}>Delivery Fee</Text>
                        <Text style={tw`text-gray-700`}>${deliveryFee}</Text>
                    </View><View style={tw`flex-row justify-between mb-2`}>
                        <Text style={tw`text-gray-700 font-bold`}>Order Totals</Text>
                        <Text style={tw`text-gray-700 font-bold`}>${cartTotal+deliveryFee}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPreparing')}
                        style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`p-3 rounded-full`]}
                    >
                        <Text style={tw`text-white text-center font-bold text-base `}>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}
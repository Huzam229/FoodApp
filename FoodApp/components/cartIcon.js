import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { themeColor } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCart, selectCartTotal } from '../slices/cartSlices';

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCart)
    const cartTotal = useSelector(selectCartTotal)
    if (!cartItems || cartItems.length === 0) return null;
    return (
        <View style={tw`absolute bottom-2 w-full z-50`}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={[{ backgroundColor: themeColor.bgcolor(1) }, tw`flex-row justify-between items-center mx-5 rounded-full py-3 p-3 shadow-lg`]}>
                <View style={[{ backgroundColor: " rgba(255,255,255,0.3)" }, tw`p-2 px-5 rounded-full`]}>
                    <Text style={tw`text-white font-bold text-lg`}>
                        {cartItems.length}
                    </Text>
                </View>
                <Text style={tw`flex-1 text-center text-white font-bold text-lg`}>View Cart</Text>
                <Text style={tw`text-white font-bold text-lg mr-2`}>${cartTotal}</Text>
            </TouchableOpacity>

        </View>
    )
}
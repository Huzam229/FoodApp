import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps'
import { themeColor } from '../themes';
import { Image } from 'expo-image';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlices';
import { emptyCart } from '../slices/cartSlices';
import { BackHandler } from 'react-native';

export default function DeliveryScreen() {
    const restaurants = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const backAction = () => {
                return true; // Prevent back navigation
            };

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [])
    );

    const cancelOrder = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
        });
        dispatch(emptyCart());
        setReload(!reload);
    };

    const lat = 31.5204;
    const lng = 74.3587;



    return (
        <View style={tw`flex-1`}>
            <MapView
                key={reload}
                provider="google"
                initialRegion={{
                    longitude: lng,
                    latitude: lat,
                    longitudeDelta: 0.06,
                    latitudeDelta: 0.06
                }}
                style={tw`flex-1 h-100 w-100`}
                mapType='standard'
            >
                {restaurants && restaurants.name && (
                    <Marker
                        coordinate={{
                            longitude: lng,
                            latitude: lat,
                        }}
                        title={restaurants.name}
                        description={restaurants.description}
                        pinColor={themeColor.bgcolor(1)}
                    />
                )}

            </MapView>
            <View style={tw`rounded-t-3xl -mt-12 bg-white relative`} >
                <View style={tw`flex-row justify-between px-5 pt-10`}>
                    <View>
                        <Text style={tw`text-lg font-bold text-gray-700`}>
                            Estimated Arrival
                        </Text>
                        <Text style={tw`text-2xl font-bold text-gray-700`}>
                            20-30 Minutes
                        </Text>
                        <Text style={tw`text-gray-700  mt-2`}>
                            Your order is on it's way
                        </Text>
                    </View>
                    <Image
                        style={tw`h-24 w-24`} source={require('../assets/deliveryGuy3.png')} />
                </View>
                <View style={[{ backgroundColor: themeColor.bgcolor(0.8) }, tw`rounded-3xl mx-3 my-3 p-2 justify-between items-center flex-row`]}>
                    <View style={[{ backgroundColor: 'rgba(255,255,255,0.4' }, tw`p-1 rounded-full flex-row items-center`]}>
                        <Image style={tw`h-15 w-15 rounded-full `}
                            source={require('../assets/riderImg.png')} />
                        <View style={tw`flex-1 ml-3`}>
                            <Text style={tw`text-lg text-white`}>
                                John Wick
                            </Text>
                            <Text style={tw`text-white font-bold text-xs`}>
                                Your Delivery Guy
                            </Text>
                        </View>
                        <View style={tw`flex-row justify-between items-center mr-1`}>
                            <TouchableOpacity style={tw`bg-white p-2 rounded-full`}>
                                <Icon.Phone fill={themeColor.bgcolor(1)} strokeWidth={1} />
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`bg-white p-2 rounded-full ml-2`}
                                onPress={cancelOrder}>
                                <Icon.X stroke={'red'} strokeWidth={3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
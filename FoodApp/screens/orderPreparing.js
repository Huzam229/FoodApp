import {  useNavigation } from '@react-navigation/native';
import React, {useEffect, useState } from 'react';
import { View, Text, Modal } from 'react-native';
import tw from 'twrnc';
import { Image } from 'expo-image'

export default function OrderPreparing() {
    const navigation = useNavigation();
    const [modal, setmodal] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            // move to delivery screen
            navigation.replace('Delivery')
        }, 3000)
    }, [])


    return (
        <Modal
            transparent={true}
            visible={modal}
            onRequestClose={() => setmodal(false)}
        >
            <View style={tw`flex-1 justify-center items-center bg-white`}>
                <Image
                    style={tw`h-100 w-90`}
                    source={require('../assets/Delivery.gif')} />
            </View>
        </Modal>
    )
}
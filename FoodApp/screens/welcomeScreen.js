import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { themeColor1 } from '../themes';
import { useNavigation } from '@react-navigation/native';

export default function WelocomeScreen() {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={[{ backgroundColor: 'white' }, tw`flex-1`]}>
            <View style={tw`flex flex-1 justify-around my-4`}>
                <Text style={[{ color: themeColor1.bgcolor(1) }, tw`font-bold text-3xl text-center mt-2`]}>Let's Get Started! </Text>
                <View style={tw`flex-row justify-center`}>
                    <Image source={require('../assets/welcome.png')}
                        style={[{ width: 350, height: 350 }]} />
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('SignUp')} 
                    style={[{ backgroundColor: themeColor1.bgcolor(1) }, tw`py-3 mx-7 rounded-xl items-center `]}>
                        <Text style={tw`text-white text-xl font-bold`}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={tw`flex-row justify-center mt-1`}>
                        <Text style={tw`text-gray-500  `}>Already Have an Account?</Text>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Login')} >
                            <Text style={[{color:themeColor1.bgcolor(1)},tw`font-bold`]}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
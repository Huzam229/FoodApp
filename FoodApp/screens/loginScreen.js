import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import tw from 'twrnc';
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColor1 } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (!email || !password) {
            console.log("Email and Password are required");
            return;
        }
        const trimmedEmail = email.trim(); // Trim spaces before checking
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmedEmail)) {
            console.log("Invalid email format");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, trimmedEmail, password);
            console.log("User login successfully");
        } catch (error) {
            console.log("Got Error", error.message);
        }
    };
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 5 }}>
            <View style={[{ backgroundColor: themeColor1.bgcolor(0.6) }, tw`flex-1`]}>
                <SafeAreaView style={tw`flex`}>
                    <View style={tw`flex-row justify-start`}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Welcome')}
                            style={[{ backgroundColor: "white" }, tw`rounded-tr-2xl rounded-bl-2xl p-1 mt-3 ml-3`]}>
                            <Icon.ArrowLeft
                                stroke={themeColor1.bgcolor(1)} strokeWidth={3} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row justify-center`}>
                        <Image source={require('../assets/login1.png')}
                            style={{ width: 250, height: 200 }} />
                    </View>
                </SafeAreaView>
                <View style={[{ borderTopRightRadius: 50, borderTopStartRadius: 50 }, tw` bg-white flex-1 px-8 pt-8`]}>
                    <View>
                        <Text style={tw`text-gray-600 ml-2 font-bold`}>Email Address</Text>
                        <TextInput
                            placeholder=' Enter Email'
                            style={tw`p-4 bg-gray-200 text-gray-700 rounded-2xl mt-1`}
                            value={email}
                            onChangeText={value => setEmail(value)}
                        />
                        <Text style={tw`text-gray-600 ml-2  mt-3 font-bold`}>Password</Text>
                        <TextInput
                            placeholder='Enter Password'
                            style={tw`p-4 bg-gray-200 text-gray-700 rounded-2xl mt-1`}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={value => setPassword(value)}
                        />
                        <View style={tw`mt-3 self-end`}>
                            <TouchableOpacity style={tw`mb-3`}
                                onPress={() => navigation.navigate('Welcome')}>
                                <Text style={tw`text-gray-600 text-right font-bold`}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={[{ backgroundColor: themeColor1.bgcolor(0.8) }, tw`py-3 mx-7 rounded-2xl`]}>
                            <Text style={tw`text-white text-xl text-center font-bold`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={tw`font-bold text-lg text-gray-700 text-center py-1 `}>
                        Or
                    </Text>
                    <View style={tw`flex-row justify-center mb-2 `}>

                        <TouchableOpacity>
                            <Image
                                source={require("../assets/facebookIcon.png")}
                                style={{ width: 50, height: 50, marginRight: 45 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/googleIcon.png")}
                                style={{ width: 50, height: 50, marginRight: 45 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/instagramIcon.png")}
                                style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={tw`flex-row justify-center`}>
                            <Text style={tw`text-gray-500  `}>Don't Have an Account?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignUp')} >
                                <Text style={[{ color: themeColor1.bgcolor(1) }, tw`font-bold`]}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
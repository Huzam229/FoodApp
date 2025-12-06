import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/cartScreen';
import OrderPreparing from './screens/orderPreparing';
import DeliveryScreen from './screens/deliveryScreen';
import { StatusBar, Platform } from 'react-native'
import WelocomeScreen from './screens/welcomeScreen';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUp';
import useAuth from './hooks/useAuth';
const Stack = createNativeStackNavigator();

export default function Navigation() {
    const { user } = useAuth();
    if (user) {
        return (
            <NavigationContainer>
                <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
                    backgroundColor="white"
                    translucent={true}
                />
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Restaurant' component={RestaurantScreen} />
                    <Stack.Screen name='Cart' options={{ presentation: 'modal' }} component={CartScreen} />
                    <Stack.Screen name='OrderPreparing' component={OrderPreparing} />
                    <Stack.Screen name='Delivery' component={DeliveryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    } else {
        return (
            <NavigationContainer>
                <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
                    backgroundColor="white"
                    translucent={true}
                />
                <Stack.Navigator
                    initialRouteName='Welcome'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name='Welcome' component={WelocomeScreen} />
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    }

}
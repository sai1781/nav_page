import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Home from './Screens/Home'
import Details from './Screens/Details'

export type RootStackParamList = {
  Home:undefined;
  Details: {product:Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          title:"Trending Products"
        }}
        />
        <Stack.Screen name="Details" component={Details}
        options={{
          title:"Product Details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({})
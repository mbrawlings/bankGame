import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./screens/StartScreen";
import AddPlayers from "./screens/AddPlayers";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" options={{ headerShown: false }} component={StartScreen} />
          <Stack.Screen name="Add Players" component={AddPlayers} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

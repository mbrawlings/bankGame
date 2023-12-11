import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./screens/StartScreen";
import AddPlayers from "./screens/AddPlayers";
import Rounds from "./screens/Rounds";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rounds">
          <Stack.Screen name="Start" options={{ headerShown: false }} component={StartScreen} />
          <Stack.Screen name="Add Players" component={AddPlayers} />
          <Stack.Screen name="Rounds" options={{ headerShown: false }} component={Rounds} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from "./pages/Game";
import HomePage from "./pages/HomePage";
import { PersonsProvider } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PersonsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersonsProvider>
  );
}

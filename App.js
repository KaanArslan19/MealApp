import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";
import FavoritesScreen from "./screen/FavoritesScreen";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#a0ff01" },
              headerTintColor: "#4e4c4c",
              contentStyle: { backgroundColor: "#c1c1c1" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                headerRight: () => {
                  return <Text>In the header</Text>;
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

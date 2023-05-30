import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const favMealCtx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
};

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

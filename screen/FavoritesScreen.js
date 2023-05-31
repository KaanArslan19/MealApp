import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
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

import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
  id,
  title,
  image,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 5,
    elevation: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  details: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.65,
  },
});

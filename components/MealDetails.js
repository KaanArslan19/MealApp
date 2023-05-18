import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.details}>{duration} / minutes to make </Text>
      <Text style={styles.details}> {complexity.toUpperCase()} </Text>
      <Text style={styles.details}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  details: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

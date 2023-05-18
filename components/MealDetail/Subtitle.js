import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#434242",
    borderBottomWidth: 2,
    marginBottom: 6,
    marginHorizontal: 12,
  },
  subTitle: {
    fontStyle: "italic",
    marginBottom: 4,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

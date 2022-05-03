import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
    padding: 10,
  },
  optionsContainer: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
});

export default style;

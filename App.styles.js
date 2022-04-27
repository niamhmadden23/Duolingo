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
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    width: "50%",
    height: "50%",
  },
  optionsContainer: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionImage: {
    width: 100,
    height: 100,
  },
  optionText: {},
});

export default style;

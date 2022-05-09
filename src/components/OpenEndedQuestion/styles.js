import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
  },
  mascot: {
    marginRight: 10,
    width: "30%",
    aspectRatio: 3 / 4,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 15,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "lightgrey",
    alignSelf: "stretch",
    flex: 1,
    margin: 10,
    borderRadius: 7,
    padding: 20,
  },
});

export default styles;

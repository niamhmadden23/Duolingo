import React from "react";
import { Text, View } from "react-native";
import style from "./App.styles";

const App = () => {
  return (
    <View style={style.root}>
      <Text style={style.title}>Which of these is the "glass"?</Text>
    </View>
  );
};

export default App;

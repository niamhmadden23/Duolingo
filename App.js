import React from "react";
import { Text, View, Image } from "react-native";
import style from "./App.styles";
import ImageOption from "./src/components/ImageOption";

const App = () => {
  return (
    <View style={style.root}>
      <Text style={style.title}>Which of these is the "glass"?</Text>
      <View style={style.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
    </View>
  );
};

export default App;

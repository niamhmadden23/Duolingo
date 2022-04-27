import React from "react";
import { Text, View, Image } from "react-native";
import style from "./App.styles";

const App = () => {
  return (
    <View style={style.root}>
      <Text style={style.title}>Which of these is the "glass"?</Text>
      <View style={style.optionsContainer}>
        <View style={style.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            }}
            style={style.optionImage}
          />
          <Text style={style.optionText}>Glass</Text>
        </View>
        <View style={style.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            }}
            style={style.optionImage}
          />
          <Text style={style.optionText}>Glass</Text>
        </View>
        <View style={style.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            }}
            style={style.optionImage}
          />
          <Text style={style.optionText}>Glass</Text>
        </View>
        <View style={style.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            }}
            style={style.optionImage}
          />
          <Text style={style.optionText}>Glass</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

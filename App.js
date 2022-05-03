import React from "react";
import { Text, View, Image } from "react-native";
import style from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";

const App = () => {
  return (
    <View style={style.root}>
      <Text style={style.title}>{question.question}</Text>
      <View style={style.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption image={option.image} text={option.text} />
        ))}
      </View>
    </View>
  );
};

export default App;

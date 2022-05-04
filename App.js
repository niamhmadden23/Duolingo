import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import style from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";
import Button from "./src/components/Button";

const App = () => {
  const onButtonPress = () => {
    console.warn("button pressed");
  };
  const [selected, setSelected] = useState(null);
  return (
    <View style={style.root}>
      <Text style={style.title}>{question.question}</Text>
      <View style={style.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} />
    </View>
  );
};

export default App;

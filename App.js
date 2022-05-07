import React, { useState, useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";
import style from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import Button from "./src/components/Button";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    console.log("use effect");
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selected.correct === true) {
      Alert.alert("corrrect answer");
      // if correct move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert("Not quite...try again");
    }
  };
  return (
    <View style={style.root}>
      <Text style={style.title}>{currentQuestion.question}</Text>
      <View style={style.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
};

export default App;

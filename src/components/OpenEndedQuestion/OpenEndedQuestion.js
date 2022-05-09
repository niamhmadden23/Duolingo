import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const onButtonPress = () => {
    console.log("selected");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="type in english"
      ></TextInput>
      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </>
  );
};

export default OpenEndedQuestion;

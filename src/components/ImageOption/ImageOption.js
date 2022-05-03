import React from "react";
import { View, Image, Text } from "react-native";
import style from "./styles";
const ImageOption = ({ image, text }) => (
  <View style={style.optionContainer}>
    <Image
      source={{
        uri: image,
      }}
      resizeMode="contain"
      style={style.optionImage}
    />
    <Text style={style.optionText}>{text}</Text>
  </View>
);

export default ImageOption;

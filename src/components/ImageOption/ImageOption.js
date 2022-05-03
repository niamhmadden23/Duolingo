import React from "react";
import { View, Image, Text } from "react-native";
import style from "./styles";
const ImageOption = () => {
  return (
    <View style={style.optionContainer}>
      <Image
        source={{
          uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        }}
        resizeMode="contain"
        style={style.optionImage}
      />
      <Text style={style.optionText}>Glass</Text>
    </View>
  );
};

export default ImageOption;

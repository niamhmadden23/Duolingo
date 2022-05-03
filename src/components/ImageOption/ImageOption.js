import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";
const ImageOption = ({ image, text, isSelected }) => (
  <View
    style={[style.optionContainer, isSelected ? style.selectedContainer : {}]}
  >
    <Image
      source={{
        uri: image,
      }}
      resizeMode="contain"
      style={style.optionImage}
    />
    <Text style={isSelected ? style.selectedText : style.optionText}>
      {text}
    </Text>
  </View>
);

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
};

export default ImageOption;

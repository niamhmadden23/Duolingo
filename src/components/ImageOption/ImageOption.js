import React, { useState } from "react";
import { View, Image, Text, Pressable, PointPropType } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => (
  <Pressable
    onPress={onPress}
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
  </Pressable>
);

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;

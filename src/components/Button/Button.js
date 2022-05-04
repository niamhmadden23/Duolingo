import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};
export default Button;

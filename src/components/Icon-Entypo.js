import React from "react";
import Icon from "react-native-vector-icons/Entypo";

export default ({ name, ...props }) => (
  <Icon
    name={name}
    {...props}
  />
);
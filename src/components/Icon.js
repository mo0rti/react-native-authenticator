import React from "react";
import IconEntypo from "./Icon-Entypo";
import IconIonicons from "./Icon-Ionicons";
import IconTypes from "@Lib/icon-types";

const Icon = ({ type, name, ...props }) => {
    type = (type) ? type : IconTypes.ENTYPO;
    return (type == IconTypes.ENTYPO) ?
        <IconEntypo name={name} {...props} /> :
        <IconIonicons name={name} {...props} />
}

export default Icon;
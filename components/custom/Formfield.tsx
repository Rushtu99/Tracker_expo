import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { IconSymbol } from "../ui/IconSymbol";

const Formfield = ({ title, value, placeholder, handleChange, type }) => {
    const [showP, setShowP] = useState(true);
    return (
        <View className="space-y-2 flex-col">
            <Text className="text-primary text-lg ">{title}</Text>
            <View className="text-base flex-row bg-grey h-16 px-4 border-2 border-black-200  rounded-lg focus:border-orange-300 items-center">
                <TextInput
                    className="flex-1 text-textlight text-lg w-full px-5"
                    placeholderTextColor="#aaaaaa"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    secureTextEntry={type == "password" && showP}
                />

                {type == "password" ? (
                    showP ? (
                        <TouchableOpacity
                            onPress={() => {
                                setShowP(!showP);
                            }}
                        >
                            <IconSymbol type="Entypo" name="eye" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                setShowP(!showP);
                            }}
                        >
                            <IconSymbol type="Entypo" name="eye-with-line" />
                        </TouchableOpacity>
                    )
                ) : (
                    ""
                )}
            </View>
        </View>
    );
};

export const CustomButton = ({ title, handlePress, styles = "" }) => {
    return (
        <View className={`${styles} rounded-md w-1/4 justify-center p-3`}>
            <TouchableOpacity onPress={handlePress}><Text className=" font-medium text-lg text-center">{title ? title : "Submit"}</Text></TouchableOpacity>
        </View>
    );
};

export default Formfield;

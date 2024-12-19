import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { IconSymbol } from "../ui/IconSymbol";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ExpandableModal = ({ buttonText = "Expand Modal", children, onClick, hideTitle = false }) => {
    let [vis, setVis] = useState(false);
    let handleClick = () => {
        setVis(!vis);
        if (onClick) onClick();
    };
    return (
        <>
            <View className={`bg-bgsec rounded border-border border p-2 `}>
                <TouchableOpacity onPress={handleClick}>
                    <View className={" flex-row-reverse justify-between mx-4"}>
                        {vis ? (
                            <>
                                <IconSymbol type="AntDesign" name="close" size={24} color="primary" />
                                {!hideTitle ? <Text className="text-primary text-base">{buttonText}</Text> : ""}
                            </>
                        ) : (
                            <>
                                <IconSymbol type="AntDesign" name="caretdown" size={24} color="primary" />
                                {<Text className="text-primary text-base">{buttonText}</Text>}
                            </>
                        )}
                    </View>
                </TouchableOpacity>
                {vis ? <View className="">{children}</View> : null}
            </View>
        </>
    );
};

export default ExpandableModal;

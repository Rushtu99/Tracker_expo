import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { IconSymbol } from "../ui/IconSymbol";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

interface ExpandableModalProps {
    buttonText: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const ExpandableModal = ({ buttonText, children, onClick }: ExpandableModalProps) => {
    let [vis, setVis] = useState(false);
    let handleClick = () => {
        setVis(!vis);
        if (onClick) onClick();
    };
    return (
        <>
            <View className="bg-slate-200 p-2">
                <TouchableOpacity onPress={handleClick}>
                    <View className="flex-row-reverse justify-between mx-4">
                        {vis ? (
                            <AntDesign name="close" size={24} color="black" />
                        ) : (
                            <>
                                <AntDesign name="caretdown" size={24} color="black" />
                                <Text>{buttonText}</Text>
                            </>
                        )}
                    </View>
                </TouchableOpacity>
                {vis ? <View className="bg-white">{children}</View> : null}
            </View>
        </>
    );
};

export default ExpandableModal;

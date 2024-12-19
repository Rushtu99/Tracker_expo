// This file is a fallback for using MaterialIcons on Android and web.

import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, TextStyle } from "react-native";
import tailwindConfig from "../../tailwind.config.js";
// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
    // See MaterialIcons here: https://icons.expo.fyi
    // See SF Symbols in the SF Symbols app on Mac.
    "house.fill": "home",
    "paperplane.fill": "send",
    "chevron.left.forwardslash.chevron.right": "code",
    "chevron.right": "chevron-right",
} as Partial<Record<import("expo-symbols").SymbolViewProps["name"], React.ComponentProps<typeof MaterialIcons>["name"]>>;

export type IconSymbolName = keyof typeof MAPPING;

// Define the allowed icon types
type IconType = "AntDesign" | "FontAwesome" | "Ionicons" | "MaterialIcons";

interface IconSymbolProps {
    name: string;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<TextStyle>;
    weight?: SymbolWeight;
    type?: IconType;
}
let colors = tailwindConfig.theme.extend.colors;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({ name, size = 24, color = "primary", style, type = "MaterialIcons" }: IconSymbolProps) {
    let c = colors[color] || color;

    console.log(c, color);
    if (type === "AntDesign") return <AntDesign color={c} size={size} name={name as any} style={style} />;
    if (type === "FontAwesome") return <FontAwesome color={c} size={size} name={name as any} style={style} />;
    if (type === "Ionicons") return <Ionicons color={c} size={size} name={name as any} style={style} />;
    if (type === "Entypo") return <Entypo color={c} size={size} name={name as any} style={style} />;
    return <MaterialIcons color={c} size={size} name={name as any} style={style} />;
}

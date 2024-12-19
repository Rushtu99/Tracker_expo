import { View, Text } from "react-native";
import React from "react";
import Barchart from "./BarChart";
import Piechart from "./PieChart";

const QuickSummary = () => {


    return (
        <View className="flex flex-row bg-bgmid rounded gap-3">
            <View className="basis-0 flex-grow rounded">
                <Barchart />
            </View>
            <View className=" basis-0 flex-grow rounded">
                <Piechart  />
            </View>
        </View>
    );
};

export default QuickSummary;

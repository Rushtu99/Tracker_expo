import { View } from "react-native";
import React, { useState } from "react";
import { PieChart } from "react-native-chart-kit";

let pieConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
};

let pieData = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
    },
];
const Piechart = ({ data=pieData, config = pieConfig }) => {
    const [width, setWidth] = useState(200);

    return (
        <View
            className="p-2"
            onLayout={(event) => {
                const containerWidth = event.nativeEvent.layout.width;
                setWidth(containerWidth);
            }}
        >
            <PieChart data={data} accessor="population" height={200} width={width - 20} chartConfig={config} />
        </View>
    );
};

export default Piechart;

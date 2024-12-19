import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Barchart from "./BarChart";
import Piechart from "./PieChart";
import { CustomButton } from "./Formfield";
const Entry = ({ data }) => {
    const [graphToggle, setgraphToggle] = useState(0);
    const graphTypes = [
        {
            id: 0,
            title: "Daily",
        },
        {
            id: 1,
            title: "Weekly",
        },
        {
            id: 2,
            title: "Monthly",
        },
        {
            id: 3,
            title: "Yearly",
        },
    ];
    return (
        <View>
            <Text className="text-text text-lg p-4">Entry</Text>
            <View className="flex-row ml-2">
                {graphTypes.map((g) => {
                    return (
                        <CustomButton
                            title={g.title}
                            styles={`${
                                graphToggle == g.id ? `bg-primary text-black` : `text-primary bg-bgsec`
                            } border-primary border border-b-0 rounded-b-none w-1/6 py-0.5 p-0 text-sm font-sm`}
                            handlePress={() => setgraphToggle(g.id)}
                        />
                    );
                })}
            </View>
            {data.type == 0 ? (
                <>
                    <Barchart />
                    <View className="flex-row rounded bg-bgmid">
                        <View className="w-1/3 ">
                            <Text className="text-text">some general data (TODO)</Text>
                        </View>
                        <View className="w-2/3">
                            <Text className="text-text">graph summary(TODO)</Text>
                        </View>
                    </View>
                </>
            ) : (
                <>
                    <Piechart />
                    <View className="flex-row rounded bg-bgmid">
                        <View className="w-1/3 ">
                            <Text className="text-text">some general data (TODO)</Text>
                        </View>
                        <View className="w-2/3">
                            <Text className="text-text">graph summary(TODO)</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Entry;

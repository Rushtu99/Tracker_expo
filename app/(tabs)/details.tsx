import { View, Text } from "react-native";
import React from "react";
import FullViewContainer from "@/components/FullViewContainer";
import ExpandableModal from "@/components/custom/ExpandableModal";
import Entry from "@/components/custom/Entry";

const details = () => {
    const data = [
        {
            id: 1,
            title: "Workout",
            type: 0,
            specs: 0,
        },
        {
            id: 2,
            title: "Gaming",
            type: 0,
            specs: 1,
        },
        {
            id: 3,
            title: "Sketching",
            type: 0,
            specs: 2,
        },
        {
            id: 4,
            title: "Smoking",
            type: 1,
            specs: 0,
        },
        {
            id: 5,
            title: "Meds",
            type: 1,
            specs: 1,
        },
        {
            id: 6,
            title: "Burps",
            type: 1,
            specs: 2,
        },
    ];
    return (
        <FullViewContainer>
            <View className="md:container md:mx-auto gap-3 p-4">
                <Text className="text-text text-xl">Details</Text>
            </View>
            <View className="md:container md:mx-auto gap-3">
                {data.map((entry) => (
                    <ExpandableModal key={entry.id} buttonText={entry.title}>
                        <Entry data={entry}/>

                    </ExpandableModal>
                ))}
                <Text className="text-text">fjdeklsfj</Text>
            </View>
        </FullViewContainer>
    );
};

export default details;

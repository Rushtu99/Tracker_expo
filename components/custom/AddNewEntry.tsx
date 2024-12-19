import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ExpandableModal from "./ExpandableModal";
import { CustomButton } from "./Formfield";

const AddNewEntry = () => {
    let [page, setPage] = useState(0);
    return (
        <View>
            <ExpandableModal hideTitle={true} buttonText="Add New Entry">
                <View className="gap-y-2">
                    <View className="gap-4 mt-2 flex-row">
                        <CustomButton
                            title={"TIMED"}
                            styles={`${
                                page == 1 ? `bg-primary text-black` : `text-primary bg-bgsec`
                            } border-primary border flex-grow py-0.5 text-sm font-sm basis-0`}
                            handlePress={() => setPage(1)}
                        />
                        {/* <TouchableOpacity
                            onPress={() => {
                                setPage(1);
                            }}
                            className="m-auto flex-grow bg-bg rounded border-border border basis-0 p-1"
                        >
                            <Text className="text-text">Timed</Text>
                        </TouchableOpacity> */}
                        <CustomButton
                            title={"FREQUENCY"}
                            styles={`${
                                page == 2 ? `bg-primary text-black` : `text-primary bg-bgsec`
                            } border-primary border basis-0 flex-grow py-0.5 text-sm font-sm`}
                            handlePress={() => setPage(2)}
                        />
                    </View>
                    <View className="bg-bgmid">
                        {page == 1 ? (
                            <Text className="text-text">Form for Timed Event(TODO)</Text>
                        ) : page == 2 ? (
                            <Text className="text-text">Form for Frequency Event(TODO)</Text>
                        ) : null}
                    </View>
                </View>
            </ExpandableModal>
        </View>
    );
};
export default AddNewEntry;

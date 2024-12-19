import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Formfield, { CustomButton } from "@/components/custom/Formfield";
import { Link } from "expo-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/components/store/slices/authSlice";

const SignIn = () => {
    const dispatch  = useDispatch()
    const [form, setForm] = useState({ email: "", password: "" });
    let handleClick = () => {
        dispatch(setUser(form.email))
        console.log("submit and redirect", form.email);
    };
    return (
        <SafeAreaView className="bg-bg h-full ">
            <ScrollView className="flex justify-center">
                <View className="flex-col border border-border rounded-md md:container mx-auto h-full p-6 my-4 gap-10">
                    <Text className=" text-2xl text-text">SIGN IN</Text>
                    <Formfield
                        title="Email"
                        type="email"
                        value={form.email}
                        handleChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                        keyboardType="email-address"
                        placeholder="Enter your email"
                    />
                    <Formfield
                        title="Password"
                        type="password"
                        value={form.password}
                        handleChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                        }}
                        keyboardType="password"
                        placeholder="Enter your password"
                    />
                    <CustomButton styles="bg-primary " handlePress={handleClick} />
                    <View className=" flex-row rounded-md border-zinc-100 bg-bgmid text-center">
                        <Text className="text-lg text-textlight">{"Dont have an Account?  "}</Text>
                        <Link className="text-lg text-primary" href="./sign-up">
                            SIGN UP
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;

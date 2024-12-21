import { View, Text, ScrollView, Alert, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Formfield, { CustomButton } from "@/components/custom/Formfield";
import { Link, router } from "expo-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { signIn } from "@/firebase/authLib";

const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const handleClick = async () => {
        try {
            setLoading(true);
            if (form.email && form.password) {
                const res = await signIn(form.email, form.password);
                //    const response = await signInWithEmailAndPassword(auth,form.email,form.password)
                //    console.log(response.user)
                console.log(res);
                dispatch(setUser(res));
                // router.replace('../(tabs)/dashboard')
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            Alert.alert("SOMETHING WRONGG", err);
            setLoading(false);
        }
    };
    return (
        <SafeAreaView className="bg-bg h-full ">
            <ScrollView className="flex justify-center">
                <View className="flex-col border border-border rounded-md sm:container h-full p-6 mx-auto my-4 gap-10">
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
                    {loading ? <ActivityIndicator /> : <CustomButton styles="bg-primary " handlePress={handleClick} />}
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

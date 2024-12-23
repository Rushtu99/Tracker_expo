import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { setIsLoading, setUser } from "./slices/authSlice";
import { signIn, logout, createUser } from "@/firebase/library";
import { useAppDispatch } from "./hooks";

const AuthStateManager = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("Auth State Changed:", user);
            dispatch(setUser(user));
            dispatch(setIsLoading(false));
        });

        return () => unsubscribe();
    }, [dispatch]);

    // Wrapper functions for authentication
    const handleSignIn = async (email: string, password: string) => {
        try {
            const user = await signIn(email, password);
            if (user) {
                dispatch(setUser(user));
            }
        } catch (error) {
            console.error("Error in sign-in:", error);
        }
    };

    const handleSignUp = async (email: string, password: string, name?: string) => {
        try {
            const user = await createUser(email, password, name);
            if (user) {
                dispatch(setUser(user));
            }
        } catch (error) {
            console.error("Error in sign-up:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            dispatch(setUser(null));
        } catch (error) {
            console.error("Error in logout:", error);
        }
    };

    // Provide auth functions globally using Redux or Context if necessary
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <AuthStateManager>{children}</AuthStateManager>
        </Provider>
    );
};

export default SessionProvider;

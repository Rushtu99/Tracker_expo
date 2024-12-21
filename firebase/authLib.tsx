import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const createUser = async (email, password) => {
    console.log("create")
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        // User created successfully
        console.log("create Done")

        return userCredential.user;
    } catch (error) {
        // Handle error
        console.error("Error creating user:", error);
        throw error;
    }

};

export const signIn = async (email, password) => {
    console.log("sign in")

    try {
        const userCredential = await signInWithEmailAndPassword(auth,email, password);
        // User signed in successfully
        console.log("sign in Done")

        return userCredential.user;
    } catch (error) {
        // Handle error
        console.error("Error signing in:", error);
        throw error;
    }

};

// export default { signIn, createUser };

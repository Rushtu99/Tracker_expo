import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

/**
 * Create a new user with email and password
 */
export const createUser = async (email, password) => {
  console.log("Creating user...");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created successfully.");
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

/**
 * Sign in an existing user with email and password
 */
export const signIn = async (email, password) => {
  console.log("Signing in...");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Sign in successful.");
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

/**
 * Sign out the current user
 */
export const logout = async () => {
  console.log("Logging out...");
  try {
    await signOut(auth);
    console.log("Logout successful.");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

/**
 * Get the current authenticated user
 */
export const getCurrentUser = async () => {
  console.log("Fetching current user...");
  try {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe(); // Ensure listener is cleaned up after use
        resolve(user ? { user } : null);
      });
    });
  } catch (error) {
    console.error("[Error getting user] ==>", error);
    return null;
  }
};

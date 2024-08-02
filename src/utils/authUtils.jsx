// src/utils/authUtils.jsx
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
import { setDocument, getDocument } from './dbUtils';
// Sign-up function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

// Sign-in function
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

// Get user session count
export const updateUserSessionFlag = async (userId, hasBooked) => {
  try {
    await setDocument('users', userId, { hasBooked });
  } catch (error) {
    console.error("Error updating user session flag: ", error);
    throw error;
  }
};

export const getUserSessionFlag = async (userId) => {
  try {
    const userDoc = await getDocument('users', userId);
    return userDoc ? userDoc.hasBooked : false; // Default to false if document does not exist
  } catch (error) {
    console.error("Error getting user session flag: ", error);
    throw error;
  }
};

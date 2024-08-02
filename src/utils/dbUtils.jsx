// src/utils/dbUtils.jsx
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Function to add or update a document
export const setDocument = async (collection, docId, data) => {
  try {
    await setDoc(doc(db, collection, docId), data);
  } catch (error) {
    console.error("Error setting document: ", error);
    throw error;
  }
};

// Function to get a document
export const getDocument = async (collection, docId) => {
  try {
    const docRef = doc(db, collection, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null; // Document does not exist
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

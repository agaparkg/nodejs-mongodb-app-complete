const express = require("express");
const router = express.Router();
const {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
} = require("firebase/firestore");
const db = require("../firebase-db");

router.get("/", async (req, res) => {
  //   res.status(200).send("Home path is working!");
  res.status(200).json({ message: "Home path is working!" });
});

router.get("/users", async (req, res) => {
  try {
    const users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => users.push({ id: doc.id, ...doc.data() }));

    res.status(200).json({
      total_users: users.length,
      users: users,
    });
  } catch (error) {
    res.json({ message: "Error retrieving users from db:", error });
  }
});

router.get("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;

  try {
    // If the user exist in the array, send it back as a response.
    // If not, send an error as a response.
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json({ id, ...docSnap.data() });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    res.json({ message: "Error retrieving users from db:", error });
  }
});

router.patch("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const cityRef = doc(db, "users", id);

      await setDoc(cityRef, updatedData, { merge: true });

      res.status(200).json({
        message: "User has been updated successfully!",
      });
    } else {
      res.status(404).json({
        message: "User not found!",
      });
    }
  } catch (error) {
    res.json({ message: "Error updating existing user:", error });
  }
});

router.delete("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;

  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await deleteDoc(doc(db, "users", id));

      res.status(200).json({
        message: "User has been deleted",
      });
    } else {
      // docSnap.data() will be undefined in this case
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.json({ message: "Error deleting existing user:", error });
  }
});

router.post("/users", async (req, res) => {
  const newUser = req.body;

  try {
    const docRef1 = await addDoc(collection(db, "users"), newUser);

    const docRef2 = doc(db, "users", docRef1.id);

    const docSnap = await getDoc(docRef2);

    res.status(200).json({
      message: "User has been created successfully!",
      user: { id: docRef2.id, ...docSnap.data() },
    });
  } catch (error) {
    res.json({ message: "Error creating new user:", error });
  }
});

module.exports = router;

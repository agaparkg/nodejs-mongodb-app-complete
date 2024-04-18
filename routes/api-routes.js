const express = require("express");
const router = express.Router();

const db = require("../mongo-db");

router.get("/", async (req, res) => {
  //   res.status(200).send("Home path is working!");
  res.status(200).json({ message: "Home path is working!" });
});

router.get("/users", async (req, res) => {
  try {
    res.status(200).json({
      total_users: 0,
      users: [],
    });
  } catch (error) {
    res.json({ message: "Error retrieving users from db:", error });
  }
});

router.get("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;

  try {
  } catch (error) {
    res.json({ message: "Error retrieving users from db:", error });
  }
});

router.patch("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;
  const updatedData = req.body;

  try {
  } catch (error) {
    res.json({ message: "Error updating existing user:", error });
  }
});

router.delete("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;

  try {
  } catch (error) {
    res.json({ message: "Error deleting existing user:", error });
  }
});

router.post("/users", async (req, res) => {
  const newUser = req.body;

  try {
    res.status(200).json({
      message: "User has been created successfully!",
    });
  } catch (error) {
    res.json({ message: "Error creating new user:", error });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const Users = require("../models/users");
// const Products = require("../models/products");

router.get("/", async (req, res) => {
  //   res.status(200).send("Home path is working!");
  res.status(200).json({ message: "Home path is working!" });
});

router.get("/users", async (req, res) => {
  try {
    const users = await Users.find({});
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
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.json({ message: "Error retrieving users from db:", error });
  }
});

router.patch("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;
  const updatedData = req.body;

  try {
    await Users.findByIdAndUpdate(id, updatedData);

    const user = await Users.findById(id);

    return res.status(200).json({ msg: "Updated!", updatedUser: user });
  } catch (error) {
    res.json({ message: "Error updating existing user:", error });
  }
});

router.delete("/users/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id;

  try {
    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    await Users.findByIdAndDelete(id);

    return res.status(200).json({ msg: "Deleted!", user });
  } catch (error) {
    res.json({ message: "Error deleting existing user:", error });
  }
});

router.post("/users", async (req, res) => {
  const newUser = req.body;

  try {
    const newCreatedUser = await Users.create(newUser);
    res.status(200).json({
      message: "User has been created successfully!",
      userData: newCreatedUser,
    });
  } catch (error) {
    res.json({ message: "Error creating new user:", error });
  }
});

module.exports = router;

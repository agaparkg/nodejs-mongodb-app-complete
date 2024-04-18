const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // required: [true, "User name is required"]
    },
    age: {
      type: Number,
      required: false,
      default: 0,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: "",
      // required: [true, "User name is required"]
    },
  },
  {
    timestamps: true,
  }
);
// {
//     name: "Alex",
//     age: 23
// }

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;

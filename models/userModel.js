import mongoose from "mongoose";

const localDate = new Date().toJSON().slice(0, 10);

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"] },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email already Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  active: {
    type: Number,
    required: false,
    unique: false,
    default: 0,
    nullable: true
  },
  createdAt: {
    type: Date,
    default: localDate,
    nullable: true
  },
  updatedAt: {
    type: Date,
    default: localDate,
    nullable: true
  }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

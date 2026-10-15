import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: String,
    password: {
      type: String,
      requied: [true, "password is required"]
    }
  }, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
import mongoose from "mongoose"

const subTodoSchems = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ]
}, {timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchems)
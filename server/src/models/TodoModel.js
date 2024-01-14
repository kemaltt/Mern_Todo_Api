import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, { collation: 'Todo', timestamps: true });

export const todo = mongoose.model('Todo', TodoSchema);
export const getTodoByName = (name) => todo.findOne({ name }).collation({ locale: 'en', strength: 2 });
export const getTodos = () => todo.find({}).collation({ locale: 'en', strength: 2 });
export const getTodoById = (id) => todo.findById(id).collation({ locale: 'en', strength: 2 });
export const updateTodoById = (id, data) => todo.findByIdAndUpdate(id, data);
export const deleteTodoById = (id) => todo.findByIdAndDelete(id);


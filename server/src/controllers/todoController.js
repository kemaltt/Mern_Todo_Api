
import { deleteTodoById, getTodoByName, getTodos, todo, updateTodoById, getTodoById } from '../models/TodoModel.js';

export const addTodo = async (req, res) => {


  try {
    const existingTodo = await getTodoByName(req.body.name);
    if (existingTodo) {
      return res.status(400).json({
        message: "Todo already exists",
        success: false,
      });
    }
    const addTodo = new todo(req.body);
    await addTodo.save()
      .then(() => {
        return res.status(201).json(addTodo);
      })
      .catch((error) => {
        return res.status(400).json({
          message: error.message,
          success: false,
        });
      })


  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export const getAllTodo = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 4
  const skip = (page - 1) * limit;
  try {
    const getAllTodo = await getTodos().limit(limit).skip(skip);
    if (getAllTodo.length === 0) {
      return res.status(400).json({
        message: "No Todo found",
        success: false,
      });
    }
    return res.status(200).json({
      message: `${getAllTodo.length} Todo found`,
      success: true,
      data: getAllTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const updateTodo = await updateTodoById(id, req.body);
    if (updateTodo) {
      return res.status(200).json({
        message: "Todo updated successfully",
        success: true,
      });

    } else {
      return res.status(400).json({
        message: "Todo not found",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await getTodoById(id);
    if (!todo) {
      return res.status(400).json({
        message: "Todo not found",
        success: false,
      });
    }
    const deleteTodo = await deleteTodoById(id);
    if (deleteTodo) {
      return res.status(200).json({
        message: `${todo.name} deleted successfully`,
        success: true,
      });

    } else {
      return res.status(400).json({
        message: "Todo not found",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}
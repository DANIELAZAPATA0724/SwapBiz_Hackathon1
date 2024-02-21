import { UserModel } from "../models/userModel.js";

const userController = {
  getAllUsers: async (req, res) => {
    console.log ("getAllUsers");
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserModel.getUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  },
  createUser: async (req, res) => {
    const { name, email, password, role_id, is_active} = req.body;
    console.log (name, email, password, role_id)
    if (!name || !email || !password || !role_id || !is_active) {
      return res.status(400).json({ error: "Los campos name, email, password y role_id son obligatorios" });
    }
  
    try {
      const newUserId = await UserModel.createUser(req.body);
      res.json({ message: "Usuario creado correctamente", userId: newUserId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUserRole: async (req, res) => {
    const { userId, roleId } = req.body;
    try {
      const success = await UserModel.updateUserRole(userId, roleId);
      if (success) {
        res.json({ message: "Rol de usuario actualizado correctamente" });
      } else {
        res.status(404).json({ error: "El usuario no fue encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const success = await UserModel.deleteUser(userId);
      if (success) {
        res.json({ message: "Usuario eliminado correctamente" });
      } else {
        res.status(404).json({ error: "El usuario no fue encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  loginUser: async (req, res) => {
    const { email, password, is_active, name, role_id } = req.body;
    if (!email || !password || !is_active || !name || !role_id) {
      return res.status(400).json({ error: "Los campos email, password, is_active, name y role_id son obligatorios" });
    }
    try {
      const user = await UserModel.loginUser(email, password, is_active,name, role_id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default userController;


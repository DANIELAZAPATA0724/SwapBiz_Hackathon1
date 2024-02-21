import { Role } from'../models/roleModel.js';

const roleController = {
  getAllRoles: async function(req, res) {
    try {
      const roles = await Role.getAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los roles" });
    }
  },
  getRole : async function(req, res) {
    const roleId = req.params.roleId;
    try {
      const role = await Role.getRole(roleId);
      if (role) {
        res.json(role);
      } else {
        res.status(404).json({ error: "Rol no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el rol" });
    }
  },
  createRole: async function(req, res) {
    const { name } = req.body;
    try {
      const roleId = await Role.create(name);
      res.json({ message: "Rol creado correctamente", roleId });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el rol" });
    }
  },
  updateRole: async function(req, res) {
    const { name } = req.body;
    const roleId = req.params.roleId;
    try {
      const affectedRows = await Role.update(roleId, name);
      if (affectedRows > 0) {
        res.json({ message: "Rol actualizado correctamente" });
      } else {
        res.status(404).json({ error: "El rol no fue encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el rol" });
    }
  },
  deleteRole: async function(req, res) {
    const roleId = req.params.roleId;
    try {
      const affectedRows = await Role.delete(roleId);
      if (affectedRows > 0) {
        res.json({ message: "Rol eliminado correctamente" });
      } else {
        res.status(404).json({ error: "El rol no fue encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el rol" });
    }
  }
};

export default roleController; 
import express from "express";

import NavegacaoController from "../controllers/NavegacaoController.js";
import TasksController from "../controllers/TasksController.js";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

// Rotas das Tarefas
// Implementação de CRUD para tarefas
// router.get('/tasks', TasksController.list);

// Rotas dos Usuários
router.get('/users', UsersController.list)
router.get('/users/create', UsersController.create)
router.post('/users/save', UsersController.save)
router.post('/users/remove/:id', UsersController.remove)
router.get('/users/edit/:id', UsersController.edit)
router.post('/users/update', UsersController.update)
router.post('/users/update-status/:id', UsersController.updateStatus)

router.get('/', NavegacaoController.index);
router.get('/sobre', NavegacaoController.sobre);

router.get(/.*/, (req, res) => {
  return res.render("404");
});

export default router;

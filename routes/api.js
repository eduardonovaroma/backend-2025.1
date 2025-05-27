import express from "express";

import TasksController from "../database/controllers/api/TasksController.js";
import UsersController from "../database/controllers/api/UsersController.js";

const router = express.Router();

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

router.get('/users', UsersController.list)
router.post('/users/login', UsersController.login)
router.get('/users/:id', TasksController.show)
router.post('/users', UsersController.save)
router.delete('/users/:id', UsersController.remove)
// router.put('/users/:id', UsersController.update)

router.get('*', function notFound(request, response) {
  return response.status(404).json({ message: 'Página não encontrada' });
});

export default router;

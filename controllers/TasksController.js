import Task from '../models/Task.js';

function TaskController() {

  async function list(req, res) {
    // Implementação da listagem de tarefas
  }

  function create(req, res) {
    // Implementação da criação de tarefas
  }

  async function save(req, res) {
    // Implementação do salvamento de tarefas
  }

  async function edit(req, res) {
    // Implementação da edição de tarefas
  }

  async function update(req, res) {
    // Implementação da atualização de tarefas
  }

  async function remove(req, res) {
    // Implementação da remoção de tarefas
  }

  async function updateStatus(req, res) {
    // Implementação da atualização de status de tarefas
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
    updateStatus,
  }

}

export default TaskController();

import User from '../models/User.js';
import bcrypt from 'bcrypt';

function UserController() {

  async function list(req, res) {
    const users = await User.findAll({ raw: true });

    res.render('users/list', { 
      title: "Lista de Usuários",
      users: users, 
    })
  }

  function create(req, res) {
    res.render('users/create')
  }

  async function save(req, res) {
    
    if (req.body.password != req.body.password_confirmation) {
      res.render('users/create', {
        error: {
          message: 'Os campos senha e confirmar senha são diferentes.'
        }
      });
    }

    const hashed_password = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashed_password,
    }

    await User.create(user);
    res.redirect('/users');
  }

  async function edit(req, res) {
    const user = await User.findOne({ where: { id: req.params.id }, raw: true })
    res.render('users/edit', { user: user })
  }

  async function update(req, res) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      active: req.body.active === '1' ? true : false
    }

    await User.update(user, { where: { id: req.body.id } });
    res.redirect('/users');
  }

  async function remove(req, res) {
    await User.destroy({ where: { id: req.params.id } });
    res.redirect('/users')
  }

  async function updateStatus(req, res) {
    const active = req.body.active === '0' ? true : false;

    const user = {
      active: active,
    }

    await User.update(user, { where: { id: req.params.id } });
    res.redirect('/users')
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

export default UserController();

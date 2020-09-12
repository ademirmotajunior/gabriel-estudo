const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./models');

app.get('/', (req, res) => {
    return db.Tarefas.findAll()
        .then((tarefas) => res.json(tarefas))
        .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
        });
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Tarefas.findByPk(id)
        .then((tarefas) => res.json(tarefas))
        .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
        });
});

app.post('/', async(req, res) => {
    const { name } = req.body
    return db.Tarefas.create({name})
      .then((tarefas) => res.send(tarefas))
      .catch((err) => {
        console.log('***There was an error creating a contact', JSON.stringify(tarefas))
        return res.status(400).send(err)
      })
});

app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Tarefas.findByPk(id)
    .then((tarefas) => {
      const { name } = req.body
      return tarefas.update({ name })
        .then(() => res.send(tarefas))
        .catch((err) => {
          console.log('***Error updating contact', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
  });
  


app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Tarefas.findByPk(id)
        .then((tarefa) => tarefa.destroy({ force: true }))
        .then(() => res.send({ id }))
        .catch((err) => {
        console.log('***Error deleting contact', JSON.stringify(err))
        res.status(400).send(err)
        })
});

app.use(express.json());
app.listen(3333);

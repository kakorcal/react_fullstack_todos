const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res)=>{
  knex('todos').orderBy('id', 'desc').then(todos=>{
    res.send(todos);
  }).catch(err=>{
    res.send(err);
  });
});

router.post('/', (req, res)=>{
  knex('todos').insert(req.body.todo, '*').then(todo=>{
    // res.send(todo.pop());
    res.send('Todo Posted');
  }).catch(err=>{
    res.send(err);
  });
});

router.put('/:id', (req, res)=>{
  knex('todos').where('id', +req.params.id).update(req.body.todo).then(()=>{
    res.send('Todo Updated');
  }).catch(err=>{
    res.send(err);
  });
});

router.delete('/:id', (req, res)=>{
  eval(require('locus'));
  knex('todos').where('id', +req.params.id).del().then(()=>{
    res.send('Todo Deleted');
  }).catch(err=>{
    res.send(err);
  });
});

module.exports = router;
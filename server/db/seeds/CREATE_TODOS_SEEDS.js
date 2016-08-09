const todos = require('../MOCK_DATA.json');

exports.seed = function(knex, Promise) {
  return knex('todos').del()
    .then(()=>{
      return Promise.all(todos.map(todo => knex('todos').insert(todo)));
    });
};

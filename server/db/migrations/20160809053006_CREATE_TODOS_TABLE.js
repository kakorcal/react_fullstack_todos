exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table=>{
    table.increments();
    table.string('todo');
    table.boolean('completed');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};

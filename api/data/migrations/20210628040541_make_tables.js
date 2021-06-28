
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments('user_id');
      tbl.string('user_name').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};

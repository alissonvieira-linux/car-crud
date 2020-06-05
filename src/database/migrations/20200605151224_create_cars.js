
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table){
    table.increments();
    table.string('marca').notNullable();
    table.string('modelo').notNullable();
    table.string('ano').notNullable();
    table.decimal('valor').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};

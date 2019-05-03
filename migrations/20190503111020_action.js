exports.up = function(knex, Promise) {
    return knex.schema.createTable("action", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  
      tbl.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("action");
  };

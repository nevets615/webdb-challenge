exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("act_description", 255).notNullable();
    tbl.string("notes", 255).notNullable();
    tbl.boolean("action_completed").defaultTo(false);
    tbl.timestamps(true, true);
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
      

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};

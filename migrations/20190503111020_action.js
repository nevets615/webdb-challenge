exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("act_description", 255).notNullable();
    tbl.string("notes", 255).notNullable();
    tbl.boolean("action_completed").defaultTo(false);
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};

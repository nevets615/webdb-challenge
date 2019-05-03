exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("act_description", 255).notNullable();
    tbl.string("notes", 255);
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
  return knex.schema.dropTableIfExists("actions");
};

// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./migrations/data/todo.db3"
    },
    useNullAsDefault: true,
    debug: true
  }
};

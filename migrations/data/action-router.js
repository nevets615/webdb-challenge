const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/todo.db3"
  },
  useNullAsDefault: true
};
const db = knex(knexConfig);
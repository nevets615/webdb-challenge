const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./migrations/data/todo.db3"
  },
  useNullAsDefault: true
};
const db = knex(knexConfig);

router.post("/", (req, res) => {
  db("students")
    .insert(req.body, "id")
    .then(ids => {
      db("students")
        .where({ id: ids[0] })
        .first()
        .then(role => {
          res.status(200).json(role);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

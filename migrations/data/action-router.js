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
  db("actions")
    .insert(req.body, "id")
    .then(ids => {
      db("actions")
        .where({ id: ids[0] })
        .first()
        .then(role => {
          res.status(200).json(role);
        })
        .catch(err => {
          res.status(500).json(err.message);
        });
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = [];
  db("projects")
    .where("id", id)
    .then(proj => {
      project.push(proj[0]);
    })
    .then(
      db("actions")
        .where("project_id", id)
        .then(actions => {
          project[0].actions = actions;
        })
        .then(() => {
          res.json(project);
        })
    )
    .catch(err => {
      res.status(500).json({ err: "err" });
    });
});
module.exports = router;

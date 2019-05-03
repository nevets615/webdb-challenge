const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: ".migrations/data/todo.db3"
  },
  useNullAsDefault: true
};
const db = knex(knexConfig);

router.post("/", (req, res) => {
    if (!req.body.act_description) {
      res.status(400).json({ message: "please provide a description" });
    } else {
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
              res.status(500).json(err);
            });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  });
  
  router.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    const project = [];
    db("projects")
      .where("id", id)
      .then(proj => {
        project[0] = proj[0];
      })
      .then(
        db("actions")
          .where("proj_id", id)
          .then(actions => {
            project[0].actions = actions;
          })
          .then(() => {
            res.json(project);
          })
      )
      .catch(err => {
        res
          .status(500)
          .json({ err: "Problem with the project number requested" });
      });
  });
  module.exports = router;
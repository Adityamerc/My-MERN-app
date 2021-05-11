//the localhost 5000 routes that is used to GET or POST data
//to the mongodb server

const router = require("express").Router();
let Document = require("../models/mongoDB_schema");

//home
router.route("/").get((req, res) => {
  Document.find()
    .then((docs) => res.json(docs))
    .catch((err) => res.status(400).json("Error: " + err));
});

//optional route that takes id as a param
// router.route('/:id').get((req, res)=>{
//     Document.findById(req.params.id)
//         .then(doc => res.json(doc))
//         .catch(err => res.status(400).json('Error: '+ err));
// });

//route to signin
router.route("/signin").post((req, res) => {
  Document.findOne({ email: req.body.email })

    .then((resp) => res.json(resp))
    .catch((err) => res.status(400).json("Error: " + err));
});

//route to add new user
router.route("/adduser").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPwd = req.body.confirmPwd;

  if (password.length < 5 || password !== confirmPwd)
    throw "Passwords don't match";

  const newAcc = new Document({
    name,
    email,
    password,
  });
  newAcc
    .save()
    .then(() => res.json("Account added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;

const newsRouter = require("express").Router();
const newsController = require("./newsController");

// newsRouter.route("/sign-up").post(signUp)
// newsRouter.route("/login").post(login)
// newsRouter.get('/',retrieve)
 newsRouter.post('/login', login);
 newsRouter.post('/sign-up', signUp);
// newsRouter.route("/").post(newsController.add);

newsRouter.route("/check-user").get(newsController.findUser);

function signUp(req, res, next) {
  return newsController.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => next(err));
}

function retrieve(req, res, next) {
  newsController.retrieve()
  .then(users => res.json(users))
  .catch(err => next(err))
}

function login(req, res, next) {
  return newsController.authenticate(req.body)
  .then(user => user ? res.json(user) : res.status(400).json({message: 'Username or password is incorrect'}))
  .catch(err => next(err))
}

module.exports = newsRouter;

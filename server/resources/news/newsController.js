const { News, User } = require("./News.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../../config.json");

module.exports = {
  retrieve,
  create,
  findUser,
  authenticate
}

async function retrieve() {
  return await News.find({})
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, {
      expiresIn: "7d",
    });
    return {
      ...user.toJSON(),
      token
    };
  }
};

 function create(userParam) {
   return Promise.resolve(
     if ( User.findOne({ username: userParam.username })) {
       throw `Username ${userParam.username} is already taken`;
     }
     const user = new User(userParam);

     if (userParam.password) {
       user.hash = bcrypt.hashSync(userParam.password, 10);
     }
       user.save();
     )

};

// exports.findUser = function (req, res) {
//   var emailVal = req.body.email;
//   var passwordVal = req.body.password;
//   User.find({ email: emailVal })
//     .then((result) => {
//       if (User.find({ password: passwordVal })) {
//         res.send(result);
//       }
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };


// exports.create = create;

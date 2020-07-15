const mongoose = require("mongoose");

// const newSchema = mongoose.Schema({
//   title: { type: String },
//   description: { type: String },
//   url: { type: String },
//   urlToImg: { type: String },
//   content: { type: String },
// });

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String },
  hash: { type: String, required: true },
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

const User = mongoose.model("user", userSchema);
const userDoc = new User({
  username: 'yasmin',
  email:'yasmin@gmail.com',
  password: '123'
})

userDoc.save().then(() => {
  console.log('saved user successfully');
}).catch((err) => {
  console.log('err in saving user:', err);
})

// const News = mongoose.model("News", newSchema);

// const newsDoc = new News({
//   title: "Why Banks Keep Blocking Cryptocurrency-Related Transactions",
//   description: "The close interaction between traditional finance and regulators is the key element in the development of the cryptocurrency industry.",
//   url : "https://cointelegraph.com/news/why-banks-keep-blocking-cryptocurrency-related-transactions",
//   urlToImg: "https://s3.cointelegraph.com/storage/uploads/view/bd1c4f8933af166ede015c569abe55a3.jpg",
//   content: "The COVID-19 crisis has brought many new users to the world of cryptocurrencies. One of the main concerns for users, however, is whether their bank cards may be blocked due to the purchase of a crypt… "
// })

// const newsDoc1 = new News({
//   title: "yasmin",
//   description: "dkdk",
//   url: "jfjf",
//   urlToImg: "jjfjf",
//   content: "jfi",
// });

// newsDoc1
//   .save()
//   .then(() => {
//     console.log("saved successfully");
//   })
//   .catch((err) => {
//     console.log("failed to save", err);
//   });

exports.User = User;
// exports.News = News;

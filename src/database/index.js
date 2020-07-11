const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/ourdb', {useNewUrlParser: true})
.then(() => {
    console.log("ourdb connected");
})
.catch((err) => {
    console.log("err found while connecting to ourdb", err);
});


const newsSchema = mongoose.Schema({
    status: String,
    totalResults: Number,
    articles: Array
});


const NewsModel = mongoose.model("News", newsSchema);

// for testing if ourdb saved:
const newsDoc = new NewsModel({
    "status": "ok",
    "totalResults": 38,
    "articles": [
    {
    "source": {
    "id": null,
    "name": "Page Six"
    },
    "author": "Jessica Bennett",
    "title": "Brooklyn Beckham confirms engagement to Nicola Peltz - Page Six",
    "description": "“I am the luckiest man in the world. I promise to be the best husband and the best daddy one day ❤️ I love you baby xx.”",
    "url": "https://pagesix.com/2020/07/11/brooklyn-beckham-confirms-engagement-to-nicola-peltz/",
    "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2020/07/brooklyn-beckham.jpg?quality=90&strip=all&w=1200",
    "publishedAt": "2020-07-11T14:51:00Z",
    "content": "Brooklyn Beckham — eldest son of David and Victoria Beckham — has confirmed reports that he and actress Nicola Peltz are engaged to be married.\r\nThe betrothed couple shared the news via Instagram, wi… [+762 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sarah Whitten",
    "title": "Disney Parks Chairman Josh D'Amaro feels 'really good' about Disney World's reopening in Florida - CNBC",
    "description": "On Saturday, Disney began its phased reopening of its theme parks in Florida in the midst of a growing number of Covid-19 cases within the state.",
    "url": "https://www.cnbc.com/2020/07/11/disneys-parks-chief-feels-really-good-about-disney-world-reopening.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106612007-1594472335419gettyimages-1207345566.jpeg?v=1594476298",
    "publishedAt": "2020-07-11T14:42:00Z",
    "content": "Walking up Main Street to Cinderella's Castle at Walt Disney World in Orlando, Florida may look at little different in the wake of the coronvirus pandemic, but that doesn't seem to be dampening the s… [+3427 chars]"
}]});



// newsDoc.save()
// .then(() => console.log("data saved"))
// .catch((err) => {
//     console.log("err in saving data", err)
// })

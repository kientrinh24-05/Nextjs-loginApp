const NewModel = require('../models/news.model');

// Get news list
exports.getNews = (req , res) => {
    NewModel.getAllNews((err, news) => {
        if (err)
            res.send(err);
            console.log('news', news);
            res.send(news)
    })
}

// Get news by ID
exports.getNewId = (req ,res) => {
    console.log(req ,'reqq');
}
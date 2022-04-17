var dbConnect = require('../../config/db.config');



const New = (news) => {
    this.title = news.title;
    this.thumbmails = news.thumbmails;
    this.desciption = news.desciption;
    this.author = news.author;
    this.createTime = new Date();
    this.updateTime = new Date();
}

// Get Alll
New.getAllNews  = (results) => {
    dbConnect.query(`SELECT * FROM posts` , (err ,res ) => {
        if(err) {
            console.log('Error' ,err);
            results(null,err)
        }else {
            console.log('fect success');
            results(null,res);
        }
    })
}

module.exports = New;
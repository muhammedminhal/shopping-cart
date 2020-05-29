var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log('connected to database..'))
.catch(err => console.log('Refuse to connect..',err));

var products = [
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic',
    description: 'awsome game!!!',
    price: 10
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg',
    title: 'sa-andreas',
    description: 'awsome game!!! but hell',
    price: 15
}),
new Product({
    imagePath:'https://images.gog-statics.com/39ee4e983d71b4e4ffdda66b2469009799da02cacd6e6017c4dc11fedd667c38_product_card_v2_mobile_slider_639.jpg',
    title: 'IGI-2',
    description: 'awsome game!!! and shooting',
    price: 53
}),
new Product({
    imagePath:'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/pubg-mobile-1584627594.jpg',
    title: 'pub-g',
    description: 'awsome game!!! but real',
    price: 23
}),
new Product({
    imagePath:'https://lh3.googleusercontent.com/mHLrRiKwowPl-iCmFJokswRMmElcJtMbXmw-BIbuHNI7ylM0-7_QBgxikLNAlwiyMw',
    title: 'HItman',
    description: 'awsome game!!! but hitman',
    price: 15
})
];


var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
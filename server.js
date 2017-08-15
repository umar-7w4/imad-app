var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
title: "arrticle-one mohammad umar",
heading: "article-one",
date: "august 13, sunday 2017",
content : `
<h2> little about me </h2>   
         <p>  This is the content for my first article-one that is about me </p>
         <p>  My pen name is sonu! </p>
         <p>  I am just seventeen! </p>
         <p>  I love creating new things especially for my self!</p>
         <p>  Today,I had a great workout! </p>
         <p>  Me addicted to fitness and chicken! </p>
            
       <h2> My hobbies   </h2>
            <p>  Reading Novels of chetan bhagat like love stories. </p>
            <p>  watching wresling WWE and cartoons.  </p>
            <p>  I used to play cricket before ! </p>
       <h3> My good habits </h3>
            <p>   If I speak about my good habits people say are you kidding me </p>
            <p>   So making others to feel happy with my acts </p>
       <h3> My bad habits </h3>
            <p> I had a list of it . So let us not to talk about that! </p>
            <p> Being anger on others for small mistakes.   </p>
            <p> Miss-undersatnding and being Miss-understand by others.</p>`
};

function createTemplate (date) {
    var title = data.title;
    vardate = data.date;
    var heading = data.heading;
    var content = data.content;
}
var htmlTemplate = `<html style="
    background-color: #cce4ce;
    background-color: #f7eaee;
    background-color: #2c99a7;
    background-color: #d7cbec;
    background-color: #FF5722;
    color: #c5b1ab;
    background-color: rgb(152, 105, 105);
    background-color: #efe2e2;
"><head>
        <title>
           ${title}
        </title>
         <meta name="viewport" content="width-device-width,  intial-sacle=1">
        <style>
     .container {
             
             max-width: 800px;
    margin: 0 auto;
    color: green;
    font-family: sans-serif;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 50px;
                       }       
        </style>
    </head>
   <body>
       <div class="container">
       <div style="
    background-color: #d1eceb;
    background-color: #d6cbea;
    background-color: #efe2e2;
">
         <a href="/">home</a>  
       </div>
       <hr>
        <h1 style="
    background-color: #d9efd6;
    background-color: #d7caef;
    background-color: #efe3e3;
"> 
           ${heading} 
        </h1>  
       <div style="
    background-color: #fdfbe8;
    background-color: #d5cbe6;
    background-color: white;
    background-color: #f1e2e2;
">
          ${date}
       </div>
       <div>
       ${content}
       </div>
      </div> 
      </body>
      </html>
`;
     return htmlTemplate; 
 }
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
   res.send(createtemplate(articleone));
});

app.get('/article-two', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});



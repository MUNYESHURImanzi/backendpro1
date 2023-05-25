var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb+srv://munyeshurimanzi:Munyeshuri1@cluster0.yqd0pr4.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("error in connection to database"));
db.once('open', () => console.log("connected to database"));

app.post("/Signup", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;

  var data = {
    "name": name,
    "email": email,
    "phone": phone,
    "password": password
  };



  db.collection('user').insertOne(data, function(err, collection) {
    if (err) {
      throw err;
    }
    console.log("record inserted successfully");
  });

  return res.redirect('index.html');
});
app.post("/login", (req, res) => {
  
  var _email = req.body._email;
  
  var _password = req.body._password;

  var data = {
    
    "email": _email,
    
    "password": _password
  };

  db.collection('user').insertOne(data, function(err, collection) {
    if (err) {
      throw err;
    }
    console.log("record inserted successfully");
  });
      return res.redirect('login.html');
})
  



app.listen(3000);
console.log("listening on port 3000");

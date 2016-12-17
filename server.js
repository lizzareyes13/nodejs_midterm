const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jsonData = { count: 12 , message:"hello" };

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('link-to-mongodb', (err, database)=>{
      //start server
})

const PORT = 3000;


app.use(express.static('client'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
  res.send('Adopt a pet');
  console.log("we're getting something here")
})

app.post('/pets', (req,res)=>{
  console.log("Hello there")
});


{
  petName = "Jennifer",
  type = "cat",
  age = 3,
  gender = "female",
  breed = "tabby",
  location = "Portland, OR",
  petId = 1,
  adoptionStatus = "available",
  moreInfo = "lovable orange tabby looking for a home. great with kids. indoor cat."
}
// pet.save();
// {
//   petName = "Ping Ping",
//   type = "bird",
//   age = 1,
//   breed = "budgee",
//   location = "Miami, FL",
//   id: 2,
//   adoptionStatus = "available",
//   moreInfo = "cute little multi colored tropical song bird. good with kids"
// }
// pet.save();

// db.Delete<Pet>(1);

// let pets = [];
// let id = 0;

// app.post('/pets',(req,res)=>{
//   let pet = req.body;
//   id++;
//   pet.id = id + '';
//
//   pets.push(pet);
//   res.json(pet);
// });

// app.get('/pets/:id', (req,res)=>{
//   const lion = _.find(lions, { id: req.params.id });
//   res.json(lion || {});
// });


// app.get('/data', (req, res)=>{
//   res.json(jsonData);
// });

// app.listen(PORT, ()=>{
//   console.log("listening on http://localhost:", PORT);
// });

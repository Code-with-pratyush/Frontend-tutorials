const express = require("express");//imports express module 
//to make an express app
const  app = express();
const path= require("path");//path module gets imported
const fs=require('fs')

const port=80;

//Express related stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded());


//Pug related stuff
//setting up pug templete
app.set('view engine', 'pug');

//setting the view directory
app.set('views' , path.join(__dirname , 'views') )

app.get('/index',(req,res) => {
    const params={'title': "Pubg is the best game"}
    res.status(500).render('index.pug',params);
});
app.post('/',(req,res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    adress = req.body.adress;
    more = req.body.more;
    let outputToWrite = `The name of the client ${name}, ${age}years old , ${gender} ,, residing at ${adress} , More about him/her : ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message': "Pubg is the best game"};
    res.status(500).render('index.pug',params);
})   
app.listen(port,()=> {
    console.log(`server running at port ${port}`);
});
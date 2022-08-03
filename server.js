
const express = require('express');
const bodyParser = require('body-parser');

//ເອີ້ນໃຊ້ງານ db ເພື່ອເຊື່ອມຕໍ່ຖານຂໍ້ມູນ
require ('./config/db');

//ເອີ້ນໃຊ້ງານ Routes
 const bounlordRoute = require('./app/routes/bounlordRoute');

const app = express();

const port = process.env.PORT || 3000;//dueng environment 

app.use( bodyParser.urlencoded({extended:true}));
app.use( bodyParser.json());

app.get('/',(req,res) => {
    res.send("Hello World!")
});


//ລະບຸໃຫ້ໃຊ້ງານ app ຜ່ານ routes
 bounlordRoute(app);



app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

});   
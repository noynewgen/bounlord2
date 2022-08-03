
const mongoose = require('mongoose');


const uri = 'mongodb+srv://my-api:RiLT3UR2fTgkQa00@cluster0.07sqo.mongodb.net/?retryWrites=true&w=majority';

const options = {
    useNewUrLParser : true,
    useUnifiedTopoLogy: true
}

// ຄຳສັ່ງເຊື່ອມຕໍ່ database 
mongoose.connect(uri, options).then(() =>{
    console.log('connected');
},
err => {
    {
        console.log(err);
    }
});

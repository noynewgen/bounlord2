

const mongoose= require ('mongoose');

const Schema = mongoose.Schema;

const adSchema = new Schema({
    location:{type:String, required:true},
    injured:{type:Number, required:true},
    imgUrl:{type:String, required:true},
    createdOn:{type:Date, default:Date.now}
    
});
module.exports = mongoose.model("bounlordModel", adSchema);

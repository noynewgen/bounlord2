
const bounlord = require('../model/bounlordModel');

exports.ListAllBounlord = (req,res)=>{
    bounlord.find({},(err, pd) => {
        if(err) res.status(500).send(err);

        res.status(200).json(pd); 

    });
};

exports.createNewBounlord = (req,res)=>{
    let newBounlord= new bounlord(req.body);
    
    newBounlord.save((err,PD) => {
        if(err) res.status(500).send(500);

        res.status(201).json(PD);

    });
};


exports.updateBounlord = (req,res)=>{
    bounlord.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err,mv) => {
        if(err)res.status(500).send(err);

        res.status(200).json({message:"Update Successful"});
    });
};

exports.deleteBounlord = async (req,res)=>{
    try{
        const rs = await bounlord.deleteOne({_id:req.params.id});

        if(rs.deletedCount === 1 ) res.status(200).json({message:"Deleted Successful"});

    }catch(e){
        console.log(e);
        res.status(500).json({message:"Error"});

    }
};
const Feedback = require('../Models/FeedBack')

const addFeedBack = async(req,res)=>{
    try{
        let feedback = await Feedback.create({...req.body})
        res.send("Feedback Successfully Send");
    }catch(e){
        res.status(500).send(e)
    }
}

const getAllFeedBack = async(req,res)=>{
    try{
        let feedback = await Feedback.find()
        res.send(feedback)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports={addFeedBack,getAllFeedBack}
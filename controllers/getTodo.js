//import th model

const Todo = require("../models/ToDo");
//define route handler

exports.getTodo=async(req,res)=>{

    try{
          //fetch all todo items from database
          const todos=await Todo.find({});

          // response

          res.status(200)
          .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is getched",
          });
        }
    
    catch(err){

       console.error(err);
       res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'Server Error',

       });
       
    }
}


exports.getTodoById=async(req,res)=>{
    try{
        // extract todo items basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});

        //data for given id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found for given Id",
            })
        }

        //data for given id FOUND

        res.status(200).json({
            success:true,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err)
    {
        console.error(err);
       res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'Server Error',

       });
    }
}
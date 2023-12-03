//import th model

const Todo = require("../models/ToDo");


//define route handler

exports.updateTodo=async(req,res)=>{

    try{
         const {id}=req.params;
         const {title,description}=req.body;
         const todo=await Todo.findByIdandUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
         )

         res.status(200).json({
            success:true,
            data:todo,
            message:`Updated Successfully`,

         })
    }
    
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
          success:false,
          data:"internal server error",
          message:err.message,
          message:'Server Error',
        })
    
         
    }
}
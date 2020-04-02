const Question=require('../models/question');
const Option=require('../models/option');
let id=0;
module.exports.create= async function(req,res){
    try{
        let question=await Question.findById(req.params.id);
        if(question){
            id++;
            let option =await Option.create({
                question_id:question._id,
                id:id,
                text:req.body.text,
                votes:0,
                // link_to_vote:"http://localhost:8000/options/{id}/add_vote"
            })
            question.options.push(option);
            question.save();
            res.json('200',{
                message:"Option added successfully",
                data:question
            })
        }else{
            res.json('200',{
                message:"Question not found"
            })
        }
    }catch{
        return res.json('402',{
            message:'error in creating option'
        });
    }
   

}
module.exports.delete=async function(req,res){
    try{
        let option=await Option.findById(req.params.id)
        .populate('question_id')
        .populate({path: 'question_id',
                    path:'options'});
        if(option){
            
            // let question=option.question_id._id;
            // question.options.pull(option);
            // question.save();
            option.remove();
            return res.json('200',{
                message:'option deleted succesfully',
                data:option
            });
        }else{
            return res.json('200',{
                message:'option not found'
            });
        }
    }catch{
        return res.json('402',{
            message:'error in deleting option'
        });
    }
    
}
let votes=0;
module.exports.add_vote=async function(req,res){
    try{
        let option = await Option.findById(req.params.id).populate('question_id');
        if(option){
            votes++;
            // let opt=await option.question_id._id.options.find(option);
            // opt.votes=votes;
            option.votes=votes;
            return res.json('200',{
                message:'vote added successfully',
                data:option
            });
        }else{
            return res.json('200',{
                message:'option not found'
            });
        }
    }catch{
        return res.json('402',{
            message:'error in adding vote'
        });
    }
    
}
const Question=require('../models/question');
const Option=require('../models/option');
module.exports.create=async function(req,res){
    try{
        const question_content=await Question.create({
            question:req.body.question
        });
        return res.json('200',{
            message:'question successfully posted',
            data:question_content
        });
    }catch{
        return res.json('402',{
            message:'error in creating question'
        });
    }
    
}
module.exports.delete=async function(req,res){
    try{
        let question=await Question.findById(req.params.id).populate('options');
        if(question){
            await Option.deleteMany(question.options._id);
            question.remove();
            return res.json('200',{
                message:'question deleted succesfully',
                data:question
            });
        }else{
            return res.json('200',{
                message:'question not found'
            });
        }
    }catch{
        return res.json('402',{
            message:'error in deleting question'
        });
    }
    
}
module.exports.get=async function(req,res){
    try{
        let question=await Question.findById(req.params.id).populate('options');
        if(question){
            return res.json('200',{
                message:'Question',
                data:question
            })
        }else{
            return res.json('200',{
                message:'question not found'
            });
        }
    }catch{
        return res.json('402',{
            message:'error in getting question'
        });
    }
    
}
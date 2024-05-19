var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

let goals = [{
  'id':'2',
  'name':'hacer funcionar mi backen',
  'description':'Intengrar backend al fronted222',
  'dueDate':'2024-04-20'
}];

const goalInit = mongoose.model('goals',{name:String, description:String, dueDate:String}, 'goals');


/* GET home page. */
router.get('/getGoals', function(req, res, next) {
  goalInit.find({}).then((response) =>res.status(200).json(response)).catch((err=>{res.status(500).json(err)}));
});

router.post('/addGoals', function(req, res, next) {
    let timestamp = Date.now()+Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
      const goal = new goalInit(req.body);
      goal.save().then(
        () => res.status(200).json({})
      ).catch((err)=>res.status(500).json({}));
    }else{
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }
    
  });

  router.delete('/removeGoals/:id', function(req, res, next) {
    console.log(req.params.id);
    if(req.params && req.params.id){
      let id = req.params.id;
      goalInit.deleteOne({_id: new mongoose.Types.ObjectId(id)}).then((response)=> {
        res.status(200).json(200);
      }).catch((err)=>{
          res.status(500).json(err);
      })
    }else{
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }

  });

module.exports = router;

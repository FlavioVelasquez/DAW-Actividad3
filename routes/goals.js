var express = require('express');
var router = express.Router();

let goals = [{
  'id':'2',
  'name':'hacer funcionar mi backen',
  'description':'Intengrar backend al fronted222',
  'dueDate':'2024-04-20'
}];

/* GET home page. */
router.get('/getGoals', function(req, res, next) {
  res.json(goals);
});

router.post('/addGoals', function(req, res, next) {
    let timestamp = Date.now()+Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
      req.body.id = timestamp.toString();
      goals.push(req.body)
      res.status(200).json(goals);
    }else{
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }
    
  });

  router.delete('/removeGoals/:id', function(req, res, next) {
    console.log(req.params.id);
    if(req.params && req.params.id){
      let id = req.params.id;
      goals = goals.filter(goal => goal.id !== id);
      res.status(200).json(goals);
    }else{
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }

  });

module.exports = router;

var express = require('express');
var router = express.Router();

let tasks = [{
  'id':'1',
  'name':'hacer funcionar mi backen',
  'description':'Intengrar backend al fronted',
  'dueDate':'2024-04-20'
}];

/* GET home page. */
router.get('/getTasks', function(req, res, next) {
  res.json(tasks);
});

router.post('/addTasks', function(req, res, next) {
    let timestamp = Date.now()+Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
      req.body.id = timestamp.toString();
      tasks.push(req.body)
      res.status(200).json(tasks);
    }else {
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }
    
  });

  router.delete('/removeTasks/:id', function(req, res, next) {
    console.log(req.params.id);
    if(req.params && req.params.id ){
      let id = req.params.id;
      tasks = tasks.filter(task => task.id !== id);
      res.status(200).json(tasks);
    }else{
      res.status(400).json({error:"no se estan enviando los parametros completos...."});
    }
    
  });

module.exports = router;

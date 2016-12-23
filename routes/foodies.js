var express = require('express');
var router = express.Router();
var restaurants = require('../models/CitySchema');

/*  GET home page. */
/* router.post('/', function(req, res) {

  var namee = req.body.id;
  //var surname = req.body.name;
	var user = req.body.status;
	var id = req.body.sources[0].id;
	var name = req.body.name;
	var desc = req.body.description;
	var data = req.body;




  //console.log(data);
  console.log(id);
  //console.log(name);
  //console.log(desc);

 // console.log(surname);


 // res.send("Addition of two numbers is "+ans);

});   */



/* Endpoint is:- http://localhost:8081/news/adddatatodb*/


 router.post("/adddatatodb",function(req ,res, next) {
   console.log(req.body);
   console.log(req.body.name);
   console.log(req.body.address);

   if(req.body){
     var infosave = new restaurants();
     infosave.id = req.body.id;

     infosave.name = req.body.name;
     infosave.url = req.body.url;

     infosave.address = req.body.address;




     infosave.thumb = req.body.thumb;

     infosave.cuisines = req.body.cuisines;
     infosave.average_cost_for_two = req.body.average_cost_for_two;
     infosave.Comments=req.body.Comments;

   infosave.save(function(err){
     if(err) {
       res.send("Error in saving the news headlines");
   }
   else{
      res.send("Saved the food details in the database" );
  }
});
}
  else{
    res.send("No headline found for saving the headline");
 }
 });


/* Endpoint is:- http://localhost:8081/news/delete*/
router.delete("/delete",function(req,res,next) {
   if(req.body){
     request=req.body.id;
     console.log("Id --"+request);
     restaurants.remove({id:request},function(err){
       if(err){
         res.send("Error in deleting the data");
       }
       else{
         res.send("Data is deleted successfully");
       }
     });
   }
     else{
       res.send("no data found to delete");
     }
 });

/* Endpoint is:- http://localhost:8081/news/update*/
 router.put('/update', function(req, res){
   if(req.body)
   {
    request1=req.body.id;
     request2=req.body.Comments;
   restaurants.update({id:request1},{$set:{Comments:request2}},function(err){

       if(err) {
         res.send(err);
       }
       else  {
       res.send("Information updated successfully");
       }
     });
   }
 });

/* Endpoint is:- http://localhost:8081/news/view*/
router.get('/view', function(req, res) {
 restaurants.find({},function(err,allnews){
      if(err) throw err;
             res.send(allnews);

         });
        });


	//console.log(req.body);
	//res.json(req.body);
	//console.log(req.body);



module.exports = router;

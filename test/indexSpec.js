var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
//var user = require(../server/routes/users);
//var news = require(../server/routes/news);

var url = supertest("http://localhost:8080");
var request=require('supertest');
var server=request.agent("http://localhost:8080");




describe("Testing the first route", function(err){
  it("should handle and send the computed info", function(done){
    var myObj = {
      "username":"pritika",
  "password":"pritika@123"
};
    url
        .post("/users/usertest")
        .send(myObj)
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);


          assert.equal("inserted to database",res.text, "error in registering");

          done();
        });

  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    var myObj = {
      "username":"pritika",
  "password":"pritika@123"
};
    url
        .post("/users/login")
        .send(myObj)
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);


          assert.equal("welcome to login",res.text, "error in logging in");

          done();
        });

  });
});



describe("Testing the third route", function(err){
it("should handle the request", function(done){
server
      .post("/users/login")
      .expect(200)
      .send({username:"pritika",password:"pritika@123"})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
it("should handle the request", function(done){
server
      .post("/foodies/adddatatodb")
      .expect(200)
      .send({


           "id":"55",
           "name":"Berco's",
           "url":"https:\/\/www.zomato.com\/ncr\/bercos-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
           "location":{"address":"G-2\/43, Middle Circle, Connaught Place, New Delhi","locality":"Connaught Place","city":"New Delhi","city_id":1,"latitude":"28.6323639468","longitude":"77.2173502296","zipcode":"0","country_id":1},
            "thumb":"https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/55\/70fd878fea22592176a3b45fad56063e_featured_v2.jpeg?output-format=webp",
           "cuisines":"Chinese, Thai",
           "average_cost_for_two":1100


})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("Saved the food details in the database",res.text, "res.text is not matching with news has been saved");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
});

describe("Testing the fourth route", function(err){
it("should delete the saved news", function(done){
server
      .post("/users/login")
      .expect(200)
      .send({username:"pritika",password:"pritika@123"})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
it("should handle the request", function(done){
server
      .delete("/foodies/delete")
      .expect(200)
      .send({


    "id":"55"


})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("Data is deleted successfully",res.text, "res.text is not matching with news has been saved");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
});

describe("Testing the fifth route", function(err){
it("should update the saved news", function(done){
server
      .post("/users/login")
      .expect(200)
      .send({username:"pritika",password:"pritika@123"})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
it("should handle the request", function(done){
server
      .put("/foodies/update")
      .expect(200)
      .send({


      "id":"585b845e04c4591b1f4209dd",
      "Comments":"Hello commented again"



})
      .end(function(err,res){
        if (err) {
                       throw err;
               }
        assert.equal("Information updated successfully",res.text, "res.text is not matching with news has been saved");
        //res.text.should.be.equal("Hello!");
          done();
      });
});
});

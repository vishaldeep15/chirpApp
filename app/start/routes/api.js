var express = require("express");
var router = express.Router();

router.use(function(req, res, next){
    if(req.method === "GET"){
        // allow user to access post
        return next();
    }
    if(!req.isAuthenticated()){
        return res.redirect("/#login");
    }
    //user authenticated
    return next();
});

router.route("/posts")

    // return all posts
    .get(function(req, res){
        res.send({message: "TODO return all posts"});
    })

    .post(function(req, res){
        res.send({message: "TODO Create a post"});
    });

router.route("/posts/:id")

    //return a particular post
    .get(function(req, res){
        res.send({message: "TODO return post with id" + req.params.id});
    })

    //update existing post
    .put(function(req, res){
        res.send({message: "TODO modify post with id" + req.params.id});
    })

    //delete existing post
    .delete(function(req, res){
        res.send({message: "TODO delete post with id" + req.params.id});
    });


module.exports = router;
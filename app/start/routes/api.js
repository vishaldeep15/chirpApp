var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Post = require("../models/post");

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
        Post.find(function(err, posts){
            if(err){
                return res.send(500, err);
            }
            return res.send(posts);
        });
    })
    
    // create a post
    .post(function(req, res){
        var post = new Post();
        post.text = req.body.text;
        post.username = req.body.createdBy;
        post.save(function(err, post){
            if(err) {
                return res.send(500, err);
            }
            return res.json(post);
        });
    });

router.route("/posts/:id")

    //return a particular post
    .get(function(req, res){
        Post.findById(req.params.id, function(req, post){
            if(err) res.send(err);
            res.json(post);            
        });
    })

    //update existing post
    .put(function(req, res){
        Post.findById(req.params.id, function(err, post){
            if(err) res.send(err);

            post.username = req.body.createdBy;
            post.text = req.body.text;

            post.save(function(err, post){
                if(err) res.send(err);
                res.json(post);
            });
        });
    })
    //delete existing post
    .delete(function(req, res){
        Post.remove({
            _id: req.params.id
        }, function(err) {
            if(err) res.send(err);
            res.json("deleted");
        });
    });


module.exports = router;

var express = require("express");
var apifriends = express.Router();

var friendData = require('../data/friends.js');
var userData = require('../data/users.js');

module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        res.json(Userdata);
    });

    app.post("/api/friends", function (req, res) {
        res.friendData.push(req.body);
    });
    var userInfo = req.body;



    var match = {
        name: "",
        photo: "",
        Difference: 1000
    };
    console.log(match);
    var userscore = userData[0].score;
    console.log(userscore);
    /*var totalDifference = 0;
    for (var i = 0; i < friendData.length; i++) {
        console.log(friendData[i]);
        totalDifference = 0;

       /* for (var j = 0; j < friendData[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userscore[j]) - parseInt((friendData[i].scores[j])));
            if (totalDifference <= match.Difference) {
                match.name = friendData[i].name;
                match.photo = friendData[i].photo;
                match.Difference = totalDifference
            };
            console.log(totalDifference);
        }*/
            

    //}
 

    friendData.push(userInfo);


    }




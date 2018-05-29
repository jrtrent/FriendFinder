var path = require("path");
module.exports = function(app) {
 app.use("/survey", function(req, res){
     res.sendFile(path.join(__dirname, "/../app/public/survey.html"));
 });

 app.use("/",function(req, res){
     res.sendFile(path.join(__dirname, "/../app/public/home.html"));
 });

 app.get("*", function(req, res){
     res.sendFile(path.join(__join, "/../app/public.home.html"))
 });
};


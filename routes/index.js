var express = require('express');
var router = express.Router();
var redis = require("redis"),
       client = redis.createClient(process.env.REDIS_PORT_6379_TCP_PORT,process.env.REDIS_PORT_6379_TCP_ADDR, null );


/* GET home page. */
router.get('/', function(req, res, next) {
    client.set("foo", "OK");

     // This will return a JavaScript String
     client.get("foo", function (err, reply) {
         console.log(reply.toString()); // Will print `OK`
     });
  res.render('index', { title: 'Express' });
});

module.exports = router;

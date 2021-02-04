var data = require("../data.json");

exports.addFriend = function(request, response) { 
  var myFriend = {
      "name": request.query.name,
      "description": request.query.description,
      "imageURL": "https://picsum.photos/536/354"
   };
  console.log(myFriend);
  data.friends.push(myFriend);
  response.render('index', data);
}

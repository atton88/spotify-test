$(document).ready(function() {
    var token = "";
    var userID = "";
    var clientID = "b93cd2a896b04db6968176145cd8537f";
    var redirectURI = "https://atton88.github.io/spotify-test/";
    var scopeParameter = "&scope=playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private user-read-currently-playing user-modify-playback-state user-read-playback-state app-remote-control streaming user-read-recently-played user-read-birthdate user-read-email user-read-private";
    var queryURL = "https://accounts.spotify.com/authorize/?client_id=" + clientID + "&response_type=token&redirect_uri=" + redirectURI + scopeParameter;
    
    console.log("current url: " + window.location.href);
    // var teststr = "https://atton88.github.io/spotify-test/#access_token=BQAdcq499rKKgiIIMgbS4bercAR_HZWgsAIiqg1q4hb2DUHbKgqY_CKnfNvayC83gPsjiBDmE3rSVQQzBZ5tSW66eiP7yT9J2ca9UIqK2rsB_HP5DOqOfWohieiA6liFvfHfLkhZeOMs5g&token_type=Bearer&expires_in=3600";
  
  if (window.location.href.includes("access_token")) {
    token = parseURL(window.location.href);
    console.log("parsed token: " + token);
  }

  //parse url, returns token
  function parseURL(str) {
    console.log(str);
    str = str.split("#access_token=");
    str = str[1].split("&token_type");
   console.log(str[0]);
   return str[0];
  }

function getUserInfo () {
queryURL = "https://api.spotify.com/v1/me";
user = "124009025";

$.ajax({
    url: queryURL,
    headers: {
        'Authorization' : 'Bearer ' + token,
    },
        method: "GET"
        }).then(function(response) {
        console.log("response");
        userID = response.id;  //get user ID
        console.log(response);
        console.log(userID);
        })
        return userID;
}

// authorize spotify
$("#login").on("click", function(){
  window.open(queryURL);
})

})


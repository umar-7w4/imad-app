// counter code
var button= document.getElementById('counter');

button.onclick = function () {
    
     // create a request object
     var request = new XMLhttpRequest();
      
     // capture the response and store it in the variable
     request.onreadystatechange = function () {
         if (request.readystate === XMLhttprequest.DONE) {
         // take some action
         if ( request.status === 200) {
              var counter = request.response.text;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
         }
    }
     // not done yet
}; 

// make a request
request.open('GET', 'http://mohammadumar7w4.imad.hasura-app.io/',true);
request.send(null);
};
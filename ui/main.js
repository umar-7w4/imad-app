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

//submit name
var nameInput= document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    // make a rquest to the server and send the name
    
    // capture the list of name and render the list
    var names=["name1", "name2", "name3", "name4"];
    var list = "";
    for (var i=0; i< names.length; i++) {
        list == "<li>" + name[i] + "<li>";
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
};
    
    
    
}
    
// counter code
var button= document .grtElementById('counter');
var button = 0;

button.onclick = function () {
     // make a request to the counter endpoin
     
     // capture the response and store it in the variable
     
     // render the variable in the correct span
     counter = counter+1;
     var span=document.getElementById ('count');
     span.innerHTML = counter.toString();
}; 
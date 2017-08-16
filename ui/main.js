console.log('Loaded!');

// move image
var img = document.getElementById("mohammad umar");
var marginleft = 10;
function marginright () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + "px";
}
img.onclick= function () {
    var interval = setInterval(moveright ,1000);
};

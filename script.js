//should it be like... a switch that changes the background color and subs in the correct text?


var sandralink = document.getElementById('link1');
var sandraoverlay = document.getElementById('sandra');

var annielink = document.getElementById('link2');
var annieoverlay = document.getElementById('annie');

var emilylink = document.getElementById('link3');
var emilyoverlay = document.getElementById('emily');

sandralink.addEventListener('click', function(){
  sandraoverlay.style.display="block";
})

annielink.addEventListener('click', function(){
  annieoverlay.style.display="block";
})

emilylink.addEventListener('click', function(){
  emilyoverlay.style.display="block";
})

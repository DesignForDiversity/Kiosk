//should it be like... a switch that changes the background color and subs in the correct text?


var sandralink = document.getElementById('link2');
var sandraoverlay = document.getElementById('sandra');

var annielink = document.getElementById('link1');
var annieoverlay = document.getElementById('annie');

var emilylink = document.getElementById('link4');
var emilyoverlay = document.getElementById('emily');

var fionalink = document.getElementById('link3');
var fionaoverlay = document.getElementById('fiona');

var crystallink = document.getElementById('link10');
var crystaloverlay = document.getElementById('crystal');

var cherilynlink = document.getElementById('link9');
var cherilynoverlay = document.getElementById('cherilyn');

var ellelink = document.getElementById('link7');
var elleoverlay = document.getElementById('elle');

var anthonylink = document.getElementById('link5');
var anthonyoverlay = document.getElementById('anthony');

var zhaohuilink = document.getElementById('link8');
var zhaohuioverlay = document.getElementById('zhaohui');

var darialink = document.getElementById('link6');
var dariaoverlay = document.getElementById('daria');

annielink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="block";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

sandralink.addEventListener('click', function(){
  sandraoverlay.style.display="block";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

emilylink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="block";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

fionalink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="block";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

crystallink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="block";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

cherilynlink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="block";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

ellelink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="block";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

anthonylink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="block";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="none";
})

zhaohuilink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="block";
  dariaoverlay.style.display="none";
})

darialink.addEventListener('click', function(){
  sandraoverlay.style.display="none";
  annieoverlay.style.display="none";
  emilyoverlay.style.display="none";
  fionaoverlay.style.display="none";
  crystaloverlay.style.display="none";
  cherilynoverlay.style.display="none";
  elleoverlay.style.display="none";
  anthonyoverlay.style.display="none";
  zhaohuioverlay.style.display="none";
  dariaoverlay.style.display="block";
})

console.log("reading");
"use strict";
/*********************************mobile navigation dropdown********************************/
var menu = document.getElementById('menu');
var dropdown = document.getElementById('dropdown');
menu.addEventListener('click', function() {
  console.log('toggle menu')
  if (dropdown.style.display == 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
})


/****************************QUESTIONS SECTION************************************/



/**************QUESTIONS -> REFLECTIONS*****************/
// variables to for jump to reflection button
var jump1 = document.getElementById('jump1');
var jump2 = document.getElementById('jump2');
var jump3 = document.getElementById('jump3');
var jump4 = document.getElementById('jump4');
var jump4 = document.getElementById('jump4');

var f1 = document.getElementById('f1');
//click 'next' -> scroll to Reflection, populate one question at a time
//Question1 -> Reflection 1
jump1.addEventListener('click', function() {
  if ((f1.question1[0].checked == false) && (f1.question1[1].checked == false) && (f1.question1[2].checked == false) && (f1.question1[3].checked == false) && (f1.question1[4].checked == false) && (f1.question1[5].checked == false)) {
    alert('Please choose an identity');
  } else {
  console.log('jump to reflection 1')
  window.location.href = "#r1";
  //variables for question 1
  var race1 = document.getElementById("#race1");
  var gender1 = document.getElementById("#gender1");
  var sexuality1 = document.getElementById("#sexuality1");
  var age1 = document.getElementById("#age1");
  var ability1 = document.getElementById("#ability1");
  var income1 = document.getElementById("#income1");
  //populate reflection1 section
  var question1 = document.f1.question1.value;
  myChoice.innerHTML = "You answered: <span>" + question1 + "</span> <br>" + "I chose <span>" + question1 + "</span> because...";
}
})

//Question2 -> Reflection 2
jump2.addEventListener('click', function() {
  if ((f1.question2[0].checked == false) && (f1.question2[1].checked == false) && (f1.question2[2].checked == false) && (f1.question2[3].checked == false) && (f1.question2[4].checked == false) && (f1.question2[5].checked == false)) {
    alert('Please choose an identity');
  } else {
  console.log('jump to reflection 2')
  window.location.href = "#r2";
  //variables for question 2
  var race2 = document.getElementById("#race2");
  var gender2 = document.getElementById("#gender2");
  var sexuality2 = document.getElementById("#sexuality2");
  var age2 = document.getElementById("#age2");
  var ability2 = document.getElementById("#ability2");
  var income2 = document.getElementById("#income2");
  //populate reflection2 section
  var question2 = document.f1.question2.value;
  myChoice2.innerHTML = "You answered: <span>" + question2 + "</span> <br>" + "I chose <span>" + question2 + "</span> because...";
}
})

jump3.addEventListener('click', function() {
  if ((f1.question3[0].checked == false) && (f1.question3[1].checked == false) && (f1.question3[2].checked == false) && (f1.question3[3].checked == false) && (f1.question3[4].checked == false) && (f1.question3[5].checked == false)) {
    alert('Please choose an identity');
  } else {
  console.log('jump to reflection 3')
  window.location.href = "#r3";
  //variables for question 3
  var race3 = document.getElementById("#race2");
  var gender3 = document.getElementById("#gender2");
  var sexuality3 = document.getElementById("#sexuality2");
  var age3 = document.getElementById("#age2");
  var ability3 = document.getElementById("#ability2");
  var income3 = document.getElementById("#income2");
  //populate reflection2 section
  var question3 = document.f1.question3.value;
  myChoice3.innerHTML = "You answered: <span>" + question3 + "</span><br>" + "I chose <span>" + question3 + "</span> because...";
}
})

jump4.addEventListener('click', function() {
  if ((f1.question4[0].checked == false) && (f1.question4[1].checked == false) && (f1.question4[2].checked == false) && (f1.question4[3].checked == false) && (f1.question4[4].checked == false) && (f1.question4[5].checked == false)) {
    alert('Please choose an identity');
  } else {
  console.log('jump to reflection 4')
  window.location.href = "#r4";
  //variables for question 4
  var race4 = document.getElementById("#race4");
  var gender4 = document.getElementById("#gender4");
  var sexuality4 = document.getElementById("#sexuality4");
  var age4 = document.getElementById("#age4");
  var ability4 = document.getElementById("#ability4");
  var income4 = document.getElementById("#income4");
  //populate reflection4 section
  var question4 = document.f1.question4.value;
  myChoice4.innerHTML = "You answered: <span>" + question4 + "</span> <br>" + "I chose <span>" + question4 + "</span> because...";
}
})

jump5.addEventListener('click', function() {
  if ((f1.question5[0].checked == false) && (f1.question5[1].checked == false) && (f1.question5[2].checked == false) && (f1.question5[3].checked == false) && (f1.question5[4].checked == false) && (f1.question5[5].checked == false)) {
    alert('Please choose an identity');
  } else {
  console.log('jump to reflection 5')
  window.location.href = "#r5";
  //variables for question 5
  var race5 = document.getElementById("#race5");
  var gender5 = document.getElementById("#gender5");
  var sexuality5 = document.getElementById("#sexuality5");
  var age5 = document.getElementById("#age5");
  var ability5 = document.getElementById("#ability5");
  var income5 = document.getElementById("#income5");
  //populate reflection5 section
  var question5 = document.f1.question5.value;
  myChoice5.innerHTML = "You answered: <span>" + question5 + "</span><br>" + "I chose <span>" + question5 + "</span> because...";
}
})

/******************GO BACK TO PREVIOUS GALLERY********************/
//back button variables
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');
var back3 = document.getElementById('back3');
var back4 = document.getElementById('back4');
var back5 = document.getElementById('back5');

//click back, scroll back to last question's gallery
back1.addEventListener('click', function() {
  console.log('back to gallery1')
  window.location.href = "#gallery1";
})

back2.addEventListener('click', function() {
  console.log('back to gallery2')
  window.location.href = "#gallery2";
})

back3.addEventListener('click', function() {
  console.log('back to gallery3')
  window.location.href = "#gallery3";
})

back4.addEventListener('click', function() {
  console.log('go to gallery4')
  window.location.href = "#gallery4";
})

back5.addEventListener('click', function() {
  console.log('go to gallery5')
  window.location.href = "#gallery5";
})
/***********************************REFLECTION SECTION BUTTONS***************************************/

//click 'BACK' on Reflection section to go back to Question
goback1.addEventListener('click', function() {
  var goback1 = document.getElementById("#goback1");
  window.location.href = "#question1";
})

goback2.addEventListener('click', function() {
  var goback2 = document.getElementById("#goback2");
  window.location.href = "#question2";
})

goback3.addEventListener('click', function() {
  var goback3 = document.getElementById("#goback3");
  window.location.href = "#question3";
})

goback4.addEventListener('click', function() {
  var goback4 = document.getElementById("#goback4");
  window.location.href = "#question4";
})

goback5.addEventListener('click', function() {
  var goback2 = document.getElementById("#goback5");
  window.location.href = "#question5";
})


//click 'next' on reflection section to continue to GALLERY; populate gallery section!!!
togallery1.addEventListener('click', function() {
    var reason = document.getElementById('reason');
    if (reason.value.length == 0){
      console.log('alert');
      alert('Please answer why you chose this identity before moving on');
    } else {
  //scroll to gallery 1
  console.log('go to gallery1');
  var togallery1 = document.getElementById('#togallery1');
  window.location.href = "#gallery1";
  //populate gallery 1
  //variables for questions
  var question1 = document.f1.question1.value;
  //variables for user filled field
  var reason = document.f2.reason.value;
  //write message for gallery 1
  console.log('write message for gallery 1');
  myMsg.innerHTML = "You: I chose <span>" + question1 + "</span> because...";
  myMsgoverlay.innerHTML = "You: I chose " + question1 + " because " + reason;
  //animate fade in

  myMsg.className = 'msg animatemsg';
  q1other1.className = 'otheruser1 animateset1';
  q1other2.className = 'otheruser2 animateset1';
  q1other3.className = 'otheruser3 animateset1';
  q1other4.className = 'otheruser4 animateset2';
  q1other5.className = 'otheruser5 animateset2';
  q1other6.className = 'otheruser6 animateset2';

  pink1.className = 'pink animatemsg';
  leftpurple1.className = 'leftpurple animateset1';
  rightpurple1.className = 'rightpurple animateset1 animateflash';
  rp1.className = 'rightpurple2 animateset1';
  rightblue1.className = 'rightblue animateset2';
  rb1.className = 'rightblue2 animateset2';
  leftblue1.className = 'leftblue animateset2';
  }
})

togallery2.addEventListener('click', function() {
  var reason2 = document.getElementById('reason2');
  if (reason2.value.length == 0){
    console.log('alert');
    alert('Please answer why you chose this identity before moving on');
  } else {
  //scroll to gallery 2
  console.log('go to gallery2');
  var togallery2 = document.getElementById('#togallery2');
  window.location.href = "#gallery2";
  //populate gallery 2
  //variables for questions
  var question2 = document.f1.question2.value;
  //variables for user filled field
  var reason2 = document.f2.reason2.value;
  //write message for gallery 1
  console.log('write message for gallery 2');
  myMsg2.innerHTML = "You: I chose <span>" + question2 + "</span> because...";
  myMsg2overlay.innerHTML = "You: I chose " + question2 + " because " + reason2;
  //animate fade in
  myMsg2.className = 'msg animatemsg';

  q2other1.className = 'otheruser1 animateset1';
  q2other2.className = 'otheruser2 animateset1';
  q2other3.className = 'otheruser3 animateset1';
  q2other4.className = 'otheruser4 animateset2';
  q2other5.className = 'otheruser5 animateset2';
  q2other6.className = 'otheruser6 animateset2';

  pink2.className = 'pink animatemsg';
  leftpurple2.className = 'leftpurple animateset1';
  rightpurple2.className = 'rightpurple animateset1';
  rp2.className = 'rightpurple2 animateset1';
  rightblue2.className = 'rightblue animateset2';
  rb2.className = 'rightblue2 animateset2';
  leftblue2.className = 'leftblue animateset2';
}
})

togallery3.addEventListener('click', function() {
  var reason3 = document.getElementById('reason3');
  if (reason3.value.length == 0){
    console.log('alert');
    alert('Please answer why you chose this identity before moving on');
  } else {
  //scroll to gallery 3
  var togallery3 = document.getElementById('#togallery3');
  window.location.href = "#gallery3";
  //populate gallery 3
  //variables for questions
  var question3 = document.f1.question3.value;
  //variables for user filled field
  var reason3 = document.f2.reason3.value;
  //write message for gallery 1
  console.log('write message for gallery 3');
  myMsg3.innerHTML = "You: I chose <span>" + question3 + "</span> because...";
  myMsg3overlay.innerHTML = "You: I chose " + question3 + " because " + reason3;
  //animate fade in
  myMsg3.className = 'msg animatemsg';
  pink3.className = 'pink animatemsg';

  q3other1.className = 'otheruser1 animateset1';
  q3other2.className = 'otheruser2 animateset1';
  q3other3.className = 'otheruser3 animateset1';
  q3other4.className = 'otheruser4 animateset2';
  q3other5.className = 'otheruser5 animateset2';
  q3other6.className = 'otheruser6 animateset2';

  pink3.className = 'pink animatemsg';
  leftpurple3.className = 'leftpurple animateset1';
  rightpurple3.className = 'rightpurple animateset1';
  rp3.className = 'rightpurple2 animateset1';
  rightblue3.className = 'rightblue animateset2';
  rb3.className = 'rightblue2 animateset2';
  leftblue3.className = 'leftblue animateset2';
}
})

togallery4.addEventListener('click', function() {
  var reason4 = document.getElementById('reason4');
  if (reason4.value.length == 0){
    console.log('alert');
    alert('Please answer why you chose this identity before moving on');
  } else {
  //scroll to gallery 4
  var togallery4 = document.getElementById('#togallery4');
  window.location.href = "#gallery4";
  //populate gallery 4
  //variables for questions
  var question4 = document.f1.question4.value;
  //variables for user filled field
  var reason4 = document.f2.reason4.value;

  //write message for gallery 1
  console.log('write message for gallery 4');
  myMsg4.innerHTML = "You: I chose <span>" + question4 + "</span> because...";
  myMsg4overlay.innerHTML = "You: I chose " + question4 + " because " + reason4;
  //animate fade in
  myMsg4.className = 'msg animatemsg';
  pink4.className = 'pink animatemsg';
  q4other1.className = 'otheruser1 animateset1';
  q4other2.className = 'otheruser2 animateset1';
  q4other3.className = 'otheruser3 animateset1';
  q4other4.className = 'otheruser4 animateset2';
  q4other5.className = 'otheruser5 animateset2';
  q4other6.className = 'otheruser6 animateset2';

  pink4.className = 'pink animatemsg';
  leftpurple4.className = 'leftpurple animateset1';
  rightpurple4.className = 'rightpurple animateset1';
  rp4.className = 'rightpurple2 animateset1';
  rightblue4.className = 'rightblue animateset2';
  rb4.className = 'rightblue2 animateset2';
  leftblue4.className = 'leftblue animateset2';
}
})

togallery5.addEventListener('click', function() {
  var reason5 = document.getElementById('reason5');
  if (reason5.value.length == 0){
    console.log('alert');
    alert('Please answer why you chose this identity before moving on');
  } else {
  //scroll to gallery 5
  var togallery5 = document.getElementById('#togallery5');
  window.location.href = "#gallery5";
  //populate gallery 5
  //variables for questions
  var question5 = document.f1.question5.value;
  //variables for user filled field
  var reason5 = document.f2.reason5.value;
  //write message for gallery 1
  console.log('write message for gallery 5');
  myMsg5.innerHTML = "You: I chose <span>" + question5 + "</span> because...";
  myMsg5overlay.innerHTML = "You: I chose " + question5 + " because " + reason5;
  //animate fade in
  myMsg5.className = 'msg animatemsg';
  pink5.className = 'pink animatemsg';

  q5other1.className = 'otheruser1 animateset1';
  q5other2.className = 'otheruser2 animateset1';
  q5other3.className = 'otheruser3 animateset1';
  q5other4.className = 'otheruser4 animateset2';
  q5other5.className = 'otheruser5 animateset2';
  q5other6.className = 'otheruser6 animateset2';

  pink5.className = 'pink animatemsg';
  leftpurple5.className = 'leftpurple animateset1';
  rightpurple5.className = 'rightpurple animateset1';
  rp5.className = 'rightpurple2 animateset1';
  rightblue5.className = 'rightblue animateset2';
  rb5.className = 'rightblue2 animateset2';
  leftblue5.className = 'leftblue animateset2';
}
})

/**********************GALLERY SECTION OVERLAYS************************/

var response = document.getElementsByClassName('response');
var overlay = document.getElementsByClassName('overlay');


response[0].addEventListener('click', function() {
  console.log('show overlay 0');
  overlay[0].style.display = "block";
})

response[1].addEventListener('click', function() {
  console.log('show overlay 1');
  overlay[1].style.display = "block";
})

response[2].addEventListener('click', function() {
  console.log('show overlay 2');
  overlay[2].style.display = "block";
})

response[3].addEventListener('click', function() {
  console.log('show overlay 3');
  overlay[3].style.display = "block";
})

response[4].addEventListener('click', function() {
  console.log('show overlay 4');
  overlay[4].style.display = "block";
})

response[5].addEventListener('click', function() {
  console.log('show overlay 5');
  overlay[5].style.display = "block";
})

response[6].addEventListener('click', function() {
  console.log('show overlay 6');
  overlay[6].style.display = "block";
})

response[7].addEventListener('click', function() {
  console.log('show overlay 7');
  overlay[7].style.display = "block";
})

response[8].addEventListener('click', function() {
  console.log('show overlay 8');
  overlay[8].style.display = "block";
})

response[9].addEventListener('click', function() {
  console.log('show overlay 9');
  overlay[9].style.display = "block";
})

response[10].addEventListener('click', function() {
  console.log('show overlay 10');
  overlay[10].style.display = "block";
})

response[11].addEventListener('click', function() {
  console.log('show overlay 11');
  overlay[11].style.display = "block";
})

response[12].addEventListener('click', function() {
  console.log('show overlay 12');
  overlay[12].style.display = "block";
})

response[13].addEventListener('click', function() {
  console.log('show overlay 13');
  overlay[13].style.display = "block";
})

response[14].addEventListener('click', function() {
  console.log('show overlay 14');
  overlay[14].style.display = "block";
})

response[15].addEventListener('click', function() {
  console.log('show overlay 15');
  overlay[15].style.display = "block";
})

response[16].addEventListener('click', function() {
  console.log('show overlay 16');
  overlay[16].style.display = "block";
})

response[17].addEventListener('click', function() {
  console.log('show overlay 17');
  overlay[17].style.display = "block";
})

response[18].addEventListener('click', function() {
  console.log('show overlay 18');
  overlay[18].style.display = "block";
})

response[19].addEventListener('click', function() {
  console.log('show overlay 19');
  overlay[19].style.display = "block";
})

response[20].addEventListener('click', function() {
  console.log('show overlay 20');
  overlay[20].style.display = "block";
})

response[21].addEventListener('click', function() {
  console.log('show overlay 21');
  overlay[21].style.display = "block";
})

response[22].addEventListener('click', function() {
  console.log('show overlay 22');
  overlay[22].style.display = "block";
})

response[23].addEventListener('click', function() {
  console.log('show overlay 23');
  overlay[23].style.display = "block";
})

response[24].addEventListener('click', function() {
  console.log('show overlay 24');
  overlay[24].style.display = "block";
})

response[25].addEventListener('click', function() {
  console.log('show overlay 25');
  overlay[25].style.display = "block";
})

response[26].addEventListener('click', function() {
  console.log('show overlay 26');
  overlay[26].style.display = "block";
})

response[27].addEventListener('click', function() {
  console.log('show overlay 27');
  overlay[27].style.display = "block";
})

response[28].addEventListener('click', function() {
  console.log('show overlay 28');
  overlay[28].style.display = "block";
})

response[29].addEventListener('click', function() {
  console.log('show overlay 29');
  overlay[29].style.display = "block";
})

response[30].addEventListener('click', function() {
  console.log('show overlay 30');
  overlay[30].style.display = "block";
})

response[31].addEventListener('click', function() {
  console.log('show overlay 31');
  overlay[31].style.display = "block";
})

response[32].addEventListener('click', function() {
  console.log('show overlay 32');
  overlay[32].style.display = "block";
})

response[33].addEventListener('click', function() {
  console.log('show overlay 33');
  overlay[33].style.display = "block";
})

response[34].addEventListener('click', function() {
  console.log('show overlay 34');
  overlay[34].style.display = "block";
})



/*
myMsg.addEventListener('click', function(){
    overlay.style.display='block';
})

q1other1.addEventListener('click', function(){
      overlay1.style.display='block';
})

q1other2.addEventListener('click', function(){
      overlay2.style.display='block';
})

q1other3.addEventListener('click', function(){
      overlay3.style.display='block';
})

q1other4.addEventListener('click', function(){
      overlay4.style.display='block';
})

q1other5.addEventListener('click', function(){
      overlay5.style.display='block';
})

q1other6.addEventListener('click', function(){
      overlay6.style.display='block';
})
*/

var close = document.getElementsByClassName('close');
var i;


for (i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function() {
    console.log('close', overlay.length);
    for (j = 0; j < overlay.length; j++) {
      overlay[j].style.display = "none";
    }
  })
}


/**********************************GALLERY SECTION BUTTONS**********************************/

//click 'next question' on gallery section to go to next question
jumpback2.addEventListener('click', function() {
  var jumpback2 = document.getElementById("#jumpback2");
  window.location.href = "#question2";
})

jumpback3.addEventListener('click', function() {
  var jumpback3 = document.getElementById("#jumpback3");
  window.location.href = "#question3";
})

jumpback4.addEventListener('click', function() {
  var jumpback2 = document.getElementById("#jumpback4");
  window.location.href = "#question4";
})

jumpback5.addEventListener('click', function() {
  var jumpback5 = document.getElementById("#jumpback5");
  window.location.href = "#question5";
})

backtor1.addEventListener('click', function() {
  var backtor1 = document.getElementById('#backtor1');
  window.location.href = "#r1";
})

backtor2.addEventListener('click', function() {
  var backtor2 = document.getElementById('#backtor2');
  window.location.href = "#r2";
})

backtor3.addEventListener('click', function() {
  var backtor3 = document.getElementById('#backtor3');
  window.location.href = "#r3";
})

backtor4.addEventListener('click', function() {
  var backtor4 = document.getElementById('#backtor4');
  window.location.href = "#r4";
})

backtor5.addEventListener('click', function() {
  var backtor2 = document.getElementById('#backtor5');
  window.location.href = "#r5";
})


/**********************************IDENTITY SIGNS: POPULATE REVIEWS*************************************/
var toreview = document.getElementById('toreview');
toreview.addEventListener('click', function() {
  var question1 = document.f1.question1.value;
  var question2 = document.f1.question2.value;
  var question3 = document.f1.question3.value;
  var question4 = document.f1.question4.value;
  var question5 = document.f1.question5.value;

  //variables for user filled field
  var reason = document.f2.reason.value;
  var reason2 = document.f2.reason2.value;
  var reason3 = document.f2.reason3.value;
  var reason4 = document.f2.reason4.value;
  var reason5 = document.f2.reason5.value;

  //write messages for review
  console.log('write msgs for review')
  review1.innerHTML = "I chose <span>" + question1 + "</span> because " + reason;
  review2.innerHTML = "I chose <span>" + question2 + "</span> because " + reason2;
  review3.innerHTML = "I chose <span>" + question3 + "</span> because " + reason3;
  review4.innerHTML = "I chose <span>" + question4 + "</span> because " + reason4;
  review5.innerHTML = "I chose <span>" + question5 + "</span> because " + reason5;

  window.location.href = '#review';
})

var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
  console.log('clear all');
  location.reload();
})

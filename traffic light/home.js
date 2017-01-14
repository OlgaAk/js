(function (global) {
'use strict'
 var trafficLight = document.getElementById('trafficLightDiv');

 var greenLight = document.createElement('div');
 greenLight.setAttribute('id', 'greenLightId');
  greenLight.setAttribute('class', 'active');

  var yellowLight = document.createElement('div');
 yellowLight.setAttribute('id', 'yellowLightId');
 yellowLight.setAttribute('class', 'off');

 var redLight = document.createElement('div');
 redLight.setAttribute('id', 'redLightId');
 redLight.setAttribute('class', 'off');


trafficLight.appendChild(greenLight);
trafficLight.appendChild(yellowLight);
trafficLight.appendChild(redLight);

var lights = [greenLight, yellowLight, redLight];


function switchLight () {
  var activeLight = document.querySelector(".active");
  var offLight = document.querySelectorAll(".off");
   console.log(offLight);
   activeLight.removeAttribute('class', 'active');
   activeLight.setAttribute('class', 'off');
   if   (activeLight != yellowLight) {
     yellowLight.removeAttribute('class', 'off');
     yellowLight.setAttribute('class', 'active');
   }     
    else if  (activeLight = yellowLight) {
   var i = offLight.length;
     offLight[i-1].removeAttribute('class', 'off');
      offLight[i-1].setAttribute('class', 'active');
   }  
}
 
function initTraficLight () {
   setInterval(switchLight, 2000);
   };


    initTraficLight();


} (window));


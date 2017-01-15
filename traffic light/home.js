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
 redLight.setAttribute('class', 'wasOn');


trafficLight.appendChild(greenLight);
trafficLight.appendChild(yellowLight);
trafficLight.appendChild(redLight);


function switchLight () {

  var activeLight = document.querySelector(".active");
  var offLight = document.querySelector(".off");
  var lightWasOn = document.querySelector(".wasOn");
 
    if   (activeLight != yellowLight) {
       lightWasOn.removeAttribute('class', 'wasOn');
     lightWasOn.setAttribute('class', 'off');
       activeLight.removeAttribute('class', 'active');
   activeLight.setAttribute('class', 'wasOn');
     yellowLight.removeAttribute('class', 'off');
     yellowLight.setAttribute('class', 'active');
      
    
   }     
    else if  (activeLight = yellowLight) {
   yellowLight.removeAttribute('class', 'active');
   yellowLight.setAttribute('class', 'off');
  offLight.removeAttribute('class', 'off');
     offLight.setAttribute('class', 'active');
   
   }  
}
 
function initTraficLight () {
   setInterval(switchLight, 2000);
   };


    initTraficLight();


} (window));


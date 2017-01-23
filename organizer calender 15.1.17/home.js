(function (global) {
'use strict'

var calenderDiv = document.getElementById('calender');
var monthTitle = document.querySelector('h1');
var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', "Ноябрь", "Декабрь"]

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var nextMonth = currentMonth + 1;
// var lastMonth = currentMonth - 1;
// console.log(lastMonth);
function getNextMonth (currentMonth) {
        if  (currentMonth === 11) {
           currentMonth = 0;
        currentYear += 1;      
               
    } else {
        currentMonth += 1;
    }
}

function getLastMonth (currentMonth) {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear -= 1;
            
    } else  {
        currentMonth -= 1;
       
        }
}

var lastMonthYear = currentDate.getFullYear();




function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}


console.log(currentDate);


var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

console.log(daysInCurrentMonth);

function createCalender (daysInCurrentMonth) {

for (var i = 0; i < daysInCurrentMonth; i++) {

var cDay = document.createElement('div');
cDay.setAttribute('class', 'calenderDay');
var dayNumP = document.createElement('p');
var dayNumT = document.createTextNode(i+1);
cDay.setAttribute('id', i+1);
dayNumP.setAttribute('id', "p" + (i+1));
dayNumP.appendChild(dayNumT);
cDay.appendChild(dayNumP);
calenderDiv.appendChild(cDay);
}
}

function findMonday (currentMonth, currentYear) {
    for (var i = 0; i < 7; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
var thatDateofWeek = thatDate.getDay();
console.log(thatDateofWeek);

if (thatDateofWeek === 0) {
    console.log(i);
 for (var counter = 0; counter < (7-i); counter++) {
var cDay = document.createElement('div');
cDay.setAttribute('class', 'calenderDay');
var dayNumP = document.createElement('p');
cDay.appendChild(dayNumP);
calenderDiv.appendChild(cDay);
  
}
}
}}

// var form = document.getElementById('divForm');

// calenderDiv.addEventListener('click', function () { form.style.display = "block"; } );




// var selectedDays = [];
// var lessonDays = [2, 4, 6];
// var currentLesson = ["Морской бой",  "Node.js", "Тема уточняется"]



var buttonBack = document.getElementById('arrow-left');
var buttonNext = document.getElementById('arrow-right');
 

function createLastMonthCalender () {
    getLastMonth(currentMonth);
    var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    console.log(daysInCurrentMonth);
     calenderDiv.innerHTML = '';
    findMonday(currentMonth, currentYear);
    createCalender(daysInCurrentMonth);
    monthTitle.innerHTML = months[currentMonth] + " " + currentYear + " год";
}

function createNextMonthCalender () {
    getNextMonth(currentMonth);
    console.log(currentMonth, currentYear);
    
    var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    console.log(daysInCurrentMonth);
     calenderDiv.innerHTML = '';
    findMonday(currentMonth, currentYear);
    createCalender(daysInCurrentMonth);
    monthTitle.innerHTML = months[currentMonth] + " " + currentYear + " год";
}


findMonday();
createCalender(daysInCurrentMonth);


buttonBack.addEventListener('click', createLastMonthCalender);
buttonNext.addEventListener('click', createNextMonthCalender);

function Prepod (name, dtStart, dtEnd, nameBlock) { 
this.name = name;
this.dtStart = dtStart;
this.dtEnd = dtEnd;
this.lessonDays = [2, 4, 6];
this.allLessonDays = [];
this.nameBlock = nameBlock;
}

Prepod.prototype.getSelectedDays = function(){
    for (var i = 1; i <= daysInCurrentMonth; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
        var thatDateofWeek = thatDate.getDay();
        console.log(i);
         console.log(thatDateofWeek);
          console.log(this.lessonDays);
   for (var counter=0; counter < this.lessonDays.length; counter++)  {
if (thatDateofWeek == this.lessonDays[counter]) {
    console.log(thatDateofWeek);
   
    // cDay[i].setAttribute('class', 'calenderDay');
  this.allLessonDays.push(i);
    console.log(this.allLessonDays);
     var cDaySelected = document.getElementById(i);
   cDaySelected.className += " selectedDay";
      var text1 = document.createTextNode(this.name + this.nameBlock + this.dtStart + '-' + this.dtEnd);
 var textDiv = document.createElement("div");
textDiv.id = 'textDiv';
textDiv.innerHTML = this.name + '<br>' + this.nameBlock + '<br>' + this.dtStart + '-' + '<br>' + this.dtEnd;
    cDaySelected.appendChild(textDiv);
 }
 } } 
}

var prepodKirill = new Prepod('Кирилл' , "01.12.2016", '24.12.2016', "Javascript");

var prepodVitaliy  = new Prepod('Виталий' , "10.01.2017", "17.02.2017", "Node.js");

 prepodVitaliy.getSelectedDays();


} (window));


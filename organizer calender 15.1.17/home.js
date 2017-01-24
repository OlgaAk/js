(function (global) {
'use strict'

var calenderDiv = document.getElementById('calender');
var monthTitle = document.querySelector('h1');
var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', "Ноябрь", "Декабрь"]

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var nextMonth = currentMonth + 1;

var lastMonthYear = currentDate.getFullYear();


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

console.log(currentDate);


var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

console.log(daysInCurrentMonth);

function Calender(prepod) {
    this.prepod = prepod;
    this.allLessonDays = [];
}

// создаем календарь в ДОМ-дереве

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
    monthTitle.innerHTML = months[currentMonth] + " " + currentYear + " год";
}
}

// функция для правильного формирования календаря - с понедельника

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


// кнопки для пролистывания месяцев

var buttonBack = document.getElementById('arrow-left');
var buttonNext = document.getElementById('arrow-right');
 
buttonBack.addEventListener('click', createLastMonthCalender);
buttonNext.addEventListener('click', createNextMonthCalender);

// пролистывание назад

function createLastMonthCalender () {
    if (currentMonth != 11) {
    currentMonth -= 1;
    }
    var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    console.log(daysInCurrentMonth);
     calenderDiv.innerHTML = '';
    findMonday(currentMonth, currentYear);
    createCalender(daysInCurrentMonth);
    monthTitle.innerHTML = months[currentMonth] + " " + currentYear + " год";
    calender1.getSelectedDays();
calender2.getSelectedDays();
}

// пролистывание вперед

function createNextMonthCalender () {
     currentMonth += 1;
    console.log(currentMonth, currentYear);
    
    var daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    console.log(daysInCurrentMonth);
     calenderDiv.innerHTML = '';
    findMonday(currentMonth, currentYear);
    createCalender(daysInCurrentMonth);
    monthTitle.innerHTML = months[currentMonth] + " " + currentYear + " год";
    calender1.getSelectedDays();
calender2.getSelectedDays();

}

// конструктор для заполнения календаря уроками

function Prepod(name, dtStart, dtEnd, nameBlock, nameBlockColor) { 
this.name = name;
this.dtStart = dtStart;
this.dtStartSplit = this.dtStart.split('.');
this.dtEnd = dtEnd;
this.dtEndSplit = this.dtEnd.split('.');
this.lessonDays = [];
this.nameBlock = nameBlock;
this.nameBlockColor = nameBlockColor;
}

// вносим в календарь уроки

Calender.prototype.fillSelectedDays = function(i) {
     this.allLessonDays.push(i);
    console.log(this.allLessonDays);
    var cDaySelected = document.getElementById(i);
    // cDaySelected.className += " selectedDay";
    cDaySelected.style.background = this.prepod.nameBlockColor;
    var textDiv = document.createElement("div");
    textDiv.id = 'textDiv';
    textDiv.innerHTML = this.prepod.name + '<br>' + this.prepod.nameBlock + '<br>' + this.prepod.dtStart + '-' + '<br>' + this.prepod.dtEnd;
    cDaySelected.appendChild(textDiv);
    var closeButton = document.createElement('button');
    closeButton.addEventListener('click', function() {cDaySelected.removeChild(textDiv); cDaySelected.style.background = 'white'; });
    var closeSign = document.createTextNode('x');
    closeButton.appendChild(closeSign);
    closeButton.className += " closeBtn";
    textDiv.appendChild(closeButton);
}




Calender.prototype.getSelectedDays = function(){
    console.log(+this.prepod.dtStartSplit[1]-1, currentMonth)
if (+this.prepod.dtStartSplit[1]-1 == currentMonth) {

    for (var i = 1; i <= daysInCurrentMonth; i++) {
    var thatDate = new Date (currentYear, currentMonth, i);
        var thatDateofWeek = thatDate.getDay();
        console.log(i);
         console.log(thatDateofWeek);
          console.log(this.prepod.lessonDays);
   for (var counter=0; counter < this.prepod.lessonDays.length; counter++)  {
        console.log(i, +this.prepod.dtStartSplit[0], thatDateofWeek, this.prepod.lessonDays[counter]);
        console.log(+this.prepod.dtEndSplit[0], i);

      if (+this.prepod.dtEndSplit[1]-1 == currentMonth) {
                if (+this.prepod.dtEndSplit[0] >= i && i >= +this.prepod.dtStartSplit[0] && thatDateofWeek === this.prepod.lessonDays[counter])  {  
                   this.fillSelectedDays(i);            
                }
    } else { 
         if ( i >= +this.prepod.dtStartSplit[0] && thatDateofWeek === this.prepod.lessonDays[counter])  {  
                this.fillSelectedDays(i);      
         }
    }
 } 
}
}
}

var prepodKirill = new Prepod('Кирилл' , "9.01.2017", '20.01.2017', "Javascript", 'green');
prepodKirill.lessonDays = [1,5];

var prepodVitaliy  = new Prepod('Виталий' , "21.01.2017", "31.01.2017", "Node.js", 'red');
prepodVitaliy.lessonDays = [2,4,6];

var calender1 = new Calender(prepodKirill);
var calender2 = new Calender(prepodVitaliy);


findMonday(currentMonth, currentYear);
createCalender(daysInCurrentMonth);
calender1.getSelectedDays();
calender2.getSelectedDays();

} (window));


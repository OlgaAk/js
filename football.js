(function (global) {
    'use strict';


    function randomInt(min, max) {    // функция для создания случайной переменной в диапазоне мин-макс
        if (arguments.length < 2) {    // если функция принимает одно значение
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    }


    function Person(firstname, lastname) {   // конструктор человек с двумя переменными имя и фамилия
        this.firstname = firstname;
        this.lastname = lastname;
    }

    Person.prototype.getFullName = function () {      //  функция прототипа конструктора, возвращающая имя и фамилию
        return this.firstname + ' ' + this.lastname;
    };

    
    function Fan(firstname, lastname) {                 // создание нового конструктора фанат с переменными имя и фамилия из конструктора человек
        Person.call(this, firstname, lastname);
    }

    Fan.prototype = Object.create(Person.prototype);
    Fan.prototype.constructor = Fan;

    Fan.prototype.onGoal = function () {                                // добавление к прототипу фаната функции реакции на гол
        var reaction = ['скандирует речевку', 'палит фаер', 'машет флагом'],        // реакция как массив
            i = randomInt(reaction.length - 1);         // случайная переменная
        return this.getFullName() + ' ' + reaction[i];      // возвращает имя фамилию и случайный индекс из массива реакций
    };

    Fan.prototype.onFail = function () {        /// // добавление к прототипу фаната функции реакции на неудачу команды 
        var reaction = ['хватается за голову', 'кричит судью на мыло', 'зачиняет драку'],
            i = randomInt(reaction.length - 1);
        return this.getFullName() + ' ' + reaction[i];
    };


    function Footballer(firstname, lastname) {            // создание нового конструктора футболист с переменными имя и фамилия из конструктора человек
        Person.call(this, firstname, lastname);
    }

    Footballer.prototype = Object.create(Person.prototype);
    Footballer.prototype.constructor = Footballer;

    Footballer.prototype.goal = function () {           // добавление к прототипу футболиста  функции реакции на гол - у команды в массиве голы добавляется 1
        this.team.goals += 1;
    };


    function Team(name) {                // создание нового конструктора игра с переменной название, массивом из футболистов, массивом из фанатов и массивом из голов
        this.name = name;
        this.footballers = [];
        this.fans = [];
        this.goals = 0;
    }

    Team.prototype.addFootballer = function (footballer) {          // добавление к прототипу команды функции добавления футболиста
        this.footballers.push(footballer);
        footballer.team = this;
    };

    Team.prototype.addFan = function (fan) {               // добавление к прототипу команды функции добавления фаната
        this.fans.push(fan);
        fan.team = this;
    };


    function Scoreboard(elemId, team1, team2) {              // создание нового конструктора табло с переменными хтмл-элемент и команды 
        this.elem = document.getElementById(elemId);   // поиск элемента в хтмл
        this.elem.classList.add('scoreboard');          // дабавление класса к элементу
        this.elem.innerHTML = '\
            <div>\
                <div class="team"></div>\
                <div class="score">\
                    <span>0</span>\
                    <span>:</span>\
                    <span>0</span>\
                </div>\
                <div class="team"></div>\
            </div>\
            <div class="messages"></div>'

        this.messages = this.elem.querySelector('.messages');           // выбираем в хтмл элемент с классом сообщения и присваеваем ему переменную
        this.team1Score = this.elem.querySelector('.score span:first-child');    // выбираем в хтмл первый дочерний элемент элемента с классом очки и присваеваем ему переменную
        this.team2Score = this.elem.querySelector('.score span:last-child');     // выбираем в хтмл последний дочерний элемент элемента с классом очки и присваеваем ему переменную

        this.elem.querySelector('.team:first-child').appendChild(document.createTextNode(team1.name));  // добавляем в хтмл элементы с названием команд
        this.elem.querySelector('.team:last-child').appendChild(document.createTextNode(team2.name));

        this.team1 = team1;
        this.team2 = team2;
    }

    Scoreboard.prototype.showMessage = function (msg) {         // добавлем в прототип конструктора табло функцию показа сообщейний
        var p = document.createElement('p'); // создаем в хтмл элемент параграф
        p.appendChild(document.createTextNode(msg));   // добавляем текст в параграф

        this.messages.insertBefore(p, this.messages.firstChild );  // вставляем в хтмл перед параграфом первый элемент из сообщений
    };

    Scoreboard.prototype.updateScore = function () {        // функция прототипа конструктора обновление табло 
        this.team1Score.replaceChild(
            document.createTextNode(team1.goals),    // заменяем голы на новые
            this.team1Score.firstChild
        );

        this.team2Score.replaceChild(
            document.createTextNode(team2.goals),
            this.team2Score.firstChild
        );
    };


    function Game(elemId, team1, team2) {  // конструктор игра с переменными хтмл-элемент и команды
        this.team1 = team1;
        this.team2 = team2;
        this.scoreboard = new Scoreboard(elemId, team1, team2);  // создаем ноое табло
    }

    Game.prototype.start = function (matchTime) {  // добавляем к прототипу конструктора игра функцию начать с переменной времени игры
        var that = this;  //???

        matchTime = matchTime || 10;  // если переменная не получена, то присваивается 10

        function timeout() {
            var team = randomInt(1) ? that.team1 : that.team2,   // случайный выбор команды
                opponents = team === that.team1 ? that.team2 : that.team1,   
                footballer = team.footballers[randomInt(team.footballers.length - 1)],  // случайный выбор футболиста
                success = randomInt(1),  // случайный выбор между 1 и 0 / тру и фолс
                i,
                msg;

            if (success) {
                footballer.goal();  // запускаем функцию гол у футболиста
                that.scoreboard.showMessage(footballer.getFullName() + ' забил гол!');   // на табло выводим имя фамилию футболиста и текст
            }

            i = team.fans.length;

            while (i--) { // счетчик
                msg = success ? team.fans[i].onGoal() : team.fans[i].onFail();   // фанаты по очереди выводят реакцию в зависимости от значения саксес
                that.scoreboard.showMessage(msg);  // на табло выводятся реакции
            }

            i = opponents.fans.length;  // то же самое с фанатами другой команды 

            while (i--) {
                msg = success ? opponents.fans[i].onFail() : opponents.fans[i].onGoal();
                that.scoreboard.showMessage(msg);
            }

            that.scoreboard.updateScore();  // запущена функция обновления очков

            matchTime -= 1;  // время матча уменьшается на 1
            
            if (matchTime) {
                setTimeout(timeout, 1000); // таймер на 1 секунду
            }
        }
        
        setTimeout(timeout, 1000);
    };


    var team1, team2,           // создаем переменные команд футболистов фанатов и игры
        footballer1, footballer2, footballer3, footballer4,
        fan1, fan2, fan3, fan4,
        game;

    team1 = new Team('Питерские Гризли');   // наследование конструктора
    team2 = new Team('Гламурные Ёжики');

    footballer1 = new Footballer('Дмитрий', 'Иванов'); // наследование конструктора с 
    footballer2 = new Footballer('Михаил', 'Иванов');
    footballer3 = new Footballer('Игорь', 'Смирнов');
    footballer4 = new Footballer('Юрий', 'Васильев');

    fan1 = new Fan('Кирилл', 'Версетти'); //наследование конструктора
    fan2 = new Fan('Виталий', 'Чертков');
    fan3 = new Fan('Дарья', 'Буртова');
    fan4 = new Fan('Сергей', 'Хоружа');

    team1.addFootballer(footballer1); // функция добавления в команду
    team1.addFootballer(footballer2);
    team1.addFan(fan1);
    team1.addFan(fan2);

    team2.addFootballer(footballer3);
    team2.addFootballer(footballer4);
    team2.addFan(fan3);
    team2.addFan(fan4);

    game = new Game('football-wrapper', team1, team2);  // наследование конструктора игра
    game.start();  // запуск функции старт
}());
// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[


export class ControllerMain {

    constructor(view, idleftbnt, idrightbtn, idresbtn, idbtnstart, model) {
        this.view = view;
        this.model = model;

        this.idresbtn = idresbtn;
        this.idbtnstart = idbtnstart;
        this.idleftbnt = idleftbnt;
        this.idrightbtn = idrightbtn;
        this.nowQuestion = 0; // 0-left 1-right
        this.nowAnswer = 0;

        self = this;
        this.timer = {};
        self.init();
        this.timeAnswer = 0;
    }


    init() {
        let btnLeft = document.getElementById(this.idleftbnt);
        let btnRight = document.getElementById(this.idrightbtn);
        let btnAllres = document.getElementById(this.idresbtn);
        let btnstart = document.getElementById(this.idbtnstart);

        btnLeft.onclick = function(event) {

            self.choiceAnswer(0);
        }
        btnRight.onclick = function(event) {

            self.choiceAnswer(1);
        }
        btnAllres.onclick = function(event) {
            self.allresShow();
        }
        btnstart.onclick = function(event) {
            self.startGame();
        }
    }


    makeQuestion() {
        this.nowQuestion = Math.floor(Math.random() * 2);
        let text = "Лево";
        if (this.nowQuestion == 1) {
            text = "Право";
        }
        this.view.viewtext(text);
    }

    choiceAnswer(res) {
        // alert(res);
        this.nowAnswer = res;


        let text = "Ошибка";
        if (res == this.nowQuestion) {
            text = "Верно";
        }
        this.view.viewRes(text);
        self.next();
    }

    next() {
        self.stopTimer();
        self.writeAnswerToData();

        self.makeQuestion();

        self.startTime();

    }

    startTime() {
        let time = "00:00";
        // начать повторы с интервалом 2 сек
        let ms = 0;
        let s = 0;
        let m = 0;
        this.timeAnswer = 0;
        this.view.viewTime(time);
        this.timer = setInterval(function() {

            if (ms == 10) {

                if (s == 60) {
                    m = m + 1;
                    s = 0;
                }
                s = s + 1;
                ms = 0;
            }
            ms = ms + 1;
            let _s = s;
            let _m = m;
            if (m < 10) { _m = "0" + m; }
            if (s < 10) { _s = "0" + s; }
            time = _m + ":" + _s;
            console.log(time);
            self.view.viewTime(time);
            self.timeAnswer = self.timeAnswer + 1;
        }, 100);


    }
    stopTimer() {
        clearInterval(this.timer);
    }

    writeAnswerToData() {
        console.log(this.nowQuestion);

        console.log(this.nowAnswer);

        this.model.data.push({ "id": this.model.data.length, "time": this.timeAnswer, "quest": this.nowQuestion, "answer": this.nowAnswer });
        console.log(this.model.data);
    }

    allresShow() {
        self.stopTimer();
        console.log(this.model.data);
        this.model.data.splice(0, 1);
        console.log(this.model.data);
        let win = 0;
        let lose = 0;
        let allGame = 0;
        let avgtime = 0;
        let maxTime = 0;
        let minTime = this.model.data[0].time;

        this.model.data.forEach(element => {
            allGame = allGame + 1;
            if (element.quest == element.answer) {
                win = win + 1;
            } else {
                lose = lose + 1;
            }
            avgtime = avgtime + element.time;
            if (minTime > element.time) {
                minTime = element.time;
            }
            if (maxTime < element.time) {
                maxTime = element.time;
            }

        });
        avgtime = avgtime / allGame / 10;

        let procWin = win / allGame * 100;
        let recom = "вы невнимательны";
        if (procWin >= 60) { recom = "надо стараться"; }
        if (procWin >= 80) { recom = "вы почти четкий"; }
        if (procWin >= 90) { recom = "вы четкий"; }




        let text = "Среднее время ответа в с = " + avgtime + "<br>" +
            "всего игр = " + allGame + "<br>" +
            "Побед = " + win + "<br>" +
            "Поражений = " + lose + "<br>" +
            "max time = " + maxTime / 10 + "<br>" +
            "min time = " + minTime / 10 + "<br>" + " % " + procWin + " " + recom;

        this.view.viewAllres(text);
    }

    startGame() {
        self.next();
    }
}
// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[


export class ControllerMain {

    constructor(view, idleftbnt, idrightbtn) {
        this.view = view;
        this.idleftbnt = idleftbnt;
        this.idrightbtn = idrightbtn;
        this.nowQuestion = 0; // 0-left 1-right
        self = this;
        this.timer = {};
        self.init();
        this.timeAnswer = 0;
    }


    init() {
        let btnLeft = document.getElementById(this.idleftbnt);
        let btnRight = document.getElementById(this.idrightbtn);

        self.next();

        btnLeft.onclick = function(event) {
            self.choiceAnswer(0);
        }
        btnRight.onclick = function(evet) {
            self.choiceAnswer(1);
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
        console.log(res);
        let text = "Ошибка";
        if (res == this.nowQuestion) {
            text = "Верно";
        }
        this.view.viewRes(text);
        self.next();
    }

    next() {
        self.makeQuestion();
        self.stopTimer();
        self.startTime();
    }

    startTime() {
        let time = "00:00";
        // начать повторы с интервалом 2 сек
        let s = 0;
        let m = 0;
        this.timeAnswer = 0;
        this.view.viewTime(time);
        this.timer = setInterval(function() {
            if (s == 60) {
                m = m + 1;
                s = 0;
            }
            s = s + 1;
            let _s = s;
            let _m = m;
            if (m < 10) { _m = "0" + m; }
            if (s < 10) { _s = "0" + s; }
            time = _m + ":" + _s;
            console.log(time);
            self.view.viewTime(time);
            self.timeAnswer = self.timeAnswer + 1;
        }, 1000);

        // через 5 сек остановить повторы
        //   setTimeout(function() {
        //     clearInterval(timerId);
        //     alert( 'стоп' );
        //   }, 5000); 




    }
    stopTimer() {
        clearInterval(this.timer);
    }


}
// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[


export class ControllerMain {

    constructor(view, idleftbnt, idrightbtn) {
        this.view = view;
        this.idleftbnt = idleftbnt;
        this.idrightbtn = idrightbtn;
        this.nowQuestion = 0; // 0-left 1-right
        self = this;

        self.init();
    }


    init() {
        let btnLeft = document.getElementById(this.idleftbnt);
        let btnRight = document.getElementById(this.idrightbtn);

        self.makeQuestion();

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
    }



}
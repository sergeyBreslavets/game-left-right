//Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модели[1].


export class viewMain {

    constructor(idtext, idres, idtime, data) {
        this.idtext = idtext;
        this.idres = idres;
        this.idtime = idtime;
        this.data = data;
    }

    viewtext(text) {
        let textel = document.getElementById(this.idtext);
        textel.innerHTML = text;
    }

    viewRes(text) {
        let resel = document.getElementById(this.idres);
        resel.innerHTML = text;
    }

    viewTime(text) {
        let timeEl = document.getElementById(this.idtime);
        timeEl.innerHTML = text;
    }

}
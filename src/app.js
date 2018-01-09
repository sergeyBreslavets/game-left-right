'use strict';
import { ControllerMain } from './controller';
import { modelMain } from './model';
import { viewMain } from './view';



let idtext = "text";
let idleftbnt = "left";
let idrightbtn = "right";
let idresult = "result";
let idtime = "time";
let idresbtn = "resbtn";
let idresall = "resall";
let data = [];

let model = new modelMain(data);
let view = new viewMain(idtext, idresult, idresall, idtime);
view.viewTime("0000");
let controller = new ControllerMain(view, idleftbnt, idrightbtn, idresbtn, model);
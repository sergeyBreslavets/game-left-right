'use strict';
import { ControllerMain } from './controller';
import { modelMain } from './model';
import { viewMain } from './view';



let idtext = "text";
let idleftbnt = "left";
let idrightbtn = "right";
let idresult = "result";
let idtime = "time";
let data = [];


let view = new viewMain(idtext, idresult, idtime, data);
view.viewTime("0000");
let controller = new ControllerMain(view, idleftbnt, idrightbtn);
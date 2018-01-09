'use strict';
import { ControllerMain } from './controller';
import { modelMain } from './model';
import { viewMain } from './view';



let idtext = "text";
let idleftbnt = "left";
let idrightbtn = "right";
let idresult = "result";
let data = [];


let view = new viewMain(idtext, idresult, data);
view.viewRes("zlo");
let controller = new ControllerMain(view, idleftbnt, idrightbtn);
(function(t){function e(e){for(var n,u,o=e[0],a=e[1],h=e[2],c=0,m=[];c<o.length;c++)u=o[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&m.push(r[u][0]),r[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var a=i[o];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=i[0]))}return t}var n={},r={app:0},s=[];function u(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=t,u.c=n,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(i,n,function(e){return t[e]}.bind(null,n));return i},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/saimon-say/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var l=a;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"app"}},[i("h1",[t._v("Simon Says")]),i("div",{staticClass:"game-board"},[i("div",{staticClass:"simon"},[i("ul",[i("li",{staticClass:"tile red",class:{highlight:t.highlight1},on:{click:function(e){return t.handler(1)}}}),i("li",{staticClass:"tile blue",class:{highlight:t.highlight2},on:{click:function(e){return t.handler(2)}}}),i("li",{staticClass:"tile yellow",class:{highlight:t.highlight3},on:{click:function(e){return t.handler(3)}}}),i("li",{staticClass:"tile green",class:{highlight:t.highlight4},on:{click:function(e){return t.handler(4)}}})])])]),i("div",{staticClass:"game-info"},[!0===t.overMessage?i("div",{attrs:{"data-action":"lose"}},[t._v(" Извините Вы проиграли! ")]):i("h2",[t._v("Уровень: "),i("span",[t._v(t._s(t.rounds))])]),i("button",{attrs:{"data-action":"start"},on:{click:t.startGame}},[t._v(" Старт ")])]),0===t.rounds?i("div",{staticClass:"game-options"},[i("h2",[t._v("Выбор уровня сложности:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeOut,expression:"timeOut"}],attrs:{type:"radio",name:"mode",value:"1500"},domProps:{checked:t._q(t.timeOut,"1500")},on:{change:function(e){t.timeOut="1500"}}}),t._v("Легкий"),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeOut,expression:"timeOut"}],attrs:{type:"radio",name:"mode",value:"1000"},domProps:{checked:t._q(t.timeOut,"1000")},on:{change:function(e){t.timeOut="1000"}}}),t._v("Средний"),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeOut,expression:"timeOut"}],attrs:{type:"radio",name:"mode",value:"400"},domProps:{checked:t._q(t.timeOut,"400")},on:{change:function(e){t.timeOut="400"}}}),t._v("Сложный"),i("br")]):t._e()])},s=[],u={data:function(){return{timeOut:1500,selectedNumbers:[],num:[],rounds:0,clickNumber:1,highlight1:!1,highlight2:!1,highlight3:!1,highlight4:!1,overMessage:!1,inputOn:!1}},methods:{startGame:function(){this.firstLevel()},setNumbers:function(){for(var t=1;t<=this.rounds;t++)this.num.push(Math.floor(4*Math.random())+1);this.inputOn=!1,this.timer()},timer:function(){for(var t=this,e=function(e){t.highlight1=!1,t.highlight2=!1,t.highlight3=!1,t.highlight4=!1,setTimeout((function(){var i=new Audio("sounds/".concat(t.num[e],".mp3"));t.inputOn=!1,1===t.num[e]&&(t.highlight1=!0),2===t.num[e]&&(t.highlight2=!0),3===t.num[e]&&(t.highlight3=!0),4===t.num[e]&&(t.highlight4=!0),i.play(),setTimeout((function(){1===t.num[e]&&(t.highlight1=!1),2===t.num[e]&&(t.highlight2=!1),3===t.num[e]&&(t.highlight3=!1),4===t.num[e]&&(t.highlight4=!1),e===t.num.length-1&&(t.inputOn=!0)}),100)}),t.timeOut*e)},i=0;i<=this.num.length-1;i++)e(i)},nextLevel:function(){var t=this;this.inputOn=!1,setTimeout((function(){t.rounds++,t.num=[],t.clickNumber=1,t.selectedNumbers=[],t.setNumbers()}),500)},firstLevel:function(){this.inputOn=!1,this.rounds=1,this.num=[],this.clickNumber=1,this.selectedNumbers=[],this.setNumbers()},gameOverMessage:function(){var t=this;this.overMessage=!0,setTimeout((function(){t.overMessage=!1}),1500)},checkAnswer:function(){this.selectedNumbers[this.clickNumber-1]===this.num[this.clickNumber-1]?this.clickNumber===this.num.length?this.nextLevel():this.clickNumber++:(this.gameOverMessage(),this.rounds=0)},handler:function(t){if(!0===this.inputOn){this.selectedNumbers.push(t);var e=new Audio("sounds/".concat(t,".mp3"));e.play(),this.checkAnswer()}}}},o=u,a=(i("034f"),i("2877")),h=Object(a["a"])(o,r,s,!1,null,null,null),l=h.exports;n["a"].config.devtools=!0,new n["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.7e3b9961.js.map
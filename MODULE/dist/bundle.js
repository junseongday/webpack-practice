(()=>{var e={786:e=>{e.exports={getCircleArea:e=>Math.PI*e*e,getSquareArea:e=>e*e}},58:e=>{"use strict";e.exports=require("readline")}},o={};function r(s){if(o[s])return o[s].exports;var t=o[s]={exports:{}};return e[s](t,t.exports,r),t.exports}(()=>{const e=r(58),{getCircleArea:o,getSquareArea:s}=r(786),t=e.createInterface({input:process.stdin,output:process.stdout});t.question("넓이를 구하고자 하는 도형의 종류를 입력해 주세요. (정사각형, 원): ",(e=>{switch(console.log(`선택된 도형: ${e}`),e){case"정사각형":t.question("변의 길이를 입력해주세요: ",(e=>{console.log(`압력 받은 값: ${e}`),console.log(`정사각형의 넓이: ${s(e)}`),t.close()}));break;case"원":t.question("반지름의 길이를 입력해주세요: ",(e=>{console.log(`압력 받은 값: ${e}`),console.log(`원의 넓이: ${o(e)}`),t.close()}));break;default:console.log("지원하지 않는 도형입니다. '정사각형' 또는 '원'을 입력해주세요. \n 커맨드 라인을 종료합니다."),t.close()}}))})()})();
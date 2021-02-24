const readline = require('readline');
const {getCircleArea, getSquareArea} = require('./mathUtil')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('넓이를 구하고자 하는 도형의 종류를 입력해 주세요. (정사각형, 원): ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`선택된 도형: ${answer}`);
  switch (answer) {
    case "정사각형":
      rl.question("변의 길이를 입력해주세요: ", input => {
        console.log(`압력 받은 값: ${input}`);
        console.log(`정사각형의 넓이: ${getSquareArea(input)}`);
        rl.close();
      });
      break;
    case "원":
      rl.question("반지름의 길이를 입력해주세요: ", input => {
        console.log(`압력 받은 값: ${input}`);
        console.log(`원의 넓이: ${getCircleArea(input)}`);
        rl.close();
      });
      break;      
    default:
      console.log("지원하지 않는 도형입니다. '정사각형' 또는 '원'을 입력해주세요. \n 커맨드 라인을 종료합니다.");
      rl.close();

  }
});
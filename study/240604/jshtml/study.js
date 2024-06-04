let numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers
    .filter((value)=> value % 2 === 0)
    .map((value)=> value * value)
    .forEach((value)=> {
        console.log(value);
    })




/*
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(value){
    return value % 2 === 0;
});

console.log(`원래 배열: ${numbers}`);
console.log(`짝수만 추출: ${evenNumbers}`);


function callThreadTimes(callback){
    for (let i = 0; i < 3; i++) {
        callback(i);        
    }
}
function print(i){
    console.log(`${i}번째 함수 호출`);
}

callThreadTimes(print);


function sample(...items){
    console.log(items);
}

const array = [1, 2, 3, 4];

sample(array);
sample(...array);





const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']

for(const todo of todos){
    console.log(`오늘의 할 일: ${todo}`)
}
*/
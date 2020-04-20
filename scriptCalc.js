const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eighth = document.getElementById('eighth');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const operatorField=document.getElementById('curr-operator');

const multiply = document.getElementById('multiply');
const devide = document.getElementById('devide');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const equals = document.getElementById('equals');
const minus = document.getElementById('minus-plus');
const reset = document.getElementById('reset');




const field=document.getElementById('field');
let value='';

let lastValue=0;

let result = lastValue;
let array = [];
let arraynum=[];
let finalresult=0;
let turner=1;
const turnminus=function(){
	turner=-1;
}

const operatorWriter = function(opr){
   if(turner===-1){
		value='-' + value;
		field.innerHTML=`${value}`;
		turner=1;
	}
	operatorField.innerHTML=`${opr}`;
	lastValue=(+value);
	
	value='';

	array.push(opr);
	arraynum.push(lastValue);

}
const valueWriter=function(digit){

	
	value+=digit;
    
	
	field.innerHTML=`${value}`;


;
}

const resultFunc=function(){
if(array.length===2){

if(array[0]==='+'){
 finalresult=arraynum[0]+arraynum[1];
}
else if(array[0]==='-'){
	 finalresult=arraynum[0]-arraynum[1];
}
else if(array[0]==='/'){
	 finalresult=arraynum[0]/arraynum[1];
}
else if(array[0]==='*'){
	 finalresult=arraynum[0]*arraynum[1];
}
field.innerHTML=`${finalresult}`;
arraynum=[];
array=[];

finalresult=0;


}



}

const restarter= function(){
arraynum=[];
array=[];
finalresult=0;
field.innerHTML='';
lastValue=0;
result=0;
value='';
operatorField.innerHTML='';
}


one.addEventListener('click',function(){
	valueWriter('1');
})
two.addEventListener('click',function(){
	valueWriter('2');
})
three.addEventListener('click',function(){
	valueWriter('3');
})
four.addEventListener('click',function(){
	valueWriter('4');
})
five.addEventListener('click',function(){
	valueWriter('5');
})
six.addEventListener('click',function(){
	valueWriter('6');
})
seven.addEventListener('click',function(){
	valueWriter('7');
})
eighth.addEventListener('click',function(){
	valueWriter('8');
})
nine.addEventListener('click',function(){
	valueWriter('9');
})
zero.addEventListener('click',function(){
	valueWriter('0');
})
dot.addEventListener('click',function(){

valueWriter('.')
})


multiply.addEventListener('click',function(){
	operatorWriter('*');
	resultFunc();
})
devide.addEventListener('click',function(){
	operatorWriter('/');
	resultFunc();
})
add.addEventListener('click',function(){
	operatorWriter('+');
	resultFunc();
})
subtract.addEventListener('click',function(){
	operatorWriter('-');
	resultFunc();
})
equals.addEventListener('click',function(){
	operatorWriter('=');
	resultFunc();
})
reset.addEventListener('click',function(){
	restarter();
})
minus.addEventListener('click',function(){
	turnminus();
	
})
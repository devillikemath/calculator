
const display=document.getElementById('answer')
function appendToDisplay(input){
    display.value+=input;
}
function cleard(){
    display.value="";
}
function calculateAnswer(){
    try{
        let value=display.value.replace('×','*');
        let value2=value.replace('÷','/');
        console.log(value2);
        display.value=eval(value2)
    }catch(error){
        display.value="Error";
    }
}
function dele(){
    display.value=display.value.slice(0,-1);
}
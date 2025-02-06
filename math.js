
const display=document.getElementById('answer')
function appendToDisplay(input){
    display.value+=input;
}
function cleard(){
    display.value="";
}
function calculateAnswer(){
    try{
        let value=display.value;
        for(let i=0;i<value.length;i++){
            value = value.replace('÷','/');
            value = value.replace('×','*')
        };
        console.log(value);
        display.value=variables(value)
    }catch(error){
        display.value="Error";
    }
}
function dele(){
    display.value=display.value.slice(0,-1);
}
function variables(variabl){
    let variable = variabl.toString();
    while(variable.match(/\+\+|[\+\-]{2}|[\-+]{2}/g)!==null){
        if(variable.match(/--/)!==null){variable = variable.replace('--','+')}
        if(variable.match(/\+\+/)!==null){variable = variable.replace('++','+')}
        if(variable.match(/\+-/)!==null){variable = variable.replace('+-','-')}
        if(variable.match(/-\+/)!==null){variable = variable.replace('-+','-')}}
    let arry3 = variable.split(/[\+\-\/\*]/)
    let something = -1;
    let thing =-1
    let variablearry =variable.split('')
    let sum = 0;
    arry3.forEach(element=>{
        if(variable[variable.indexOf(element)-1]=='-'){
            arry3[sum] = -element
            variablearry[variablearry.indexOf(parseFloat(element))] = -element;
        }
        variable = variable.replace(element,'');
        sum++;
    })
    variable =variablearry.join('')
    arry3.forEach(element => {
        something++;
        let elements = parseFloat(element)
        switch(variable[variable.indexOf(element)-1]){
            case '*':
                arry3[something] = arry3[something-1]*elements
                arry3[something-1] = 0;
                variable = variable.replace('*','')
                break
            case '/':
                arry3[something] = arry3[something-1]/elements
                arry3[something-1] = 0;
                variable = variable.replace('/','')
                break;
        }
        variable = variable.replace(element,'');
    });
    let total = 0;
    arry3.forEach(element=>{total =total+parseFloat(element)})
    return total;
} 

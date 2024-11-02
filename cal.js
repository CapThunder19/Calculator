function appenddis(value){
    document.querySelector('#display').value += value;
}

function cleardis(){
    document.querySelector('#display').value = '';
}

function calc(){

       const dis =  document.querySelector('#display');
       try{
        dis.value = eval(dis.value);
       }
       catch(error){
        dis.value = 'ERROR';

       }
       
}
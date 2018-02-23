var display = document.getElementById('display');
if(display.value.length = Number(16)){
  display.value = display.value.substring(0,16);
}


function toDisplay(x){
  display.value += x;
  if(x==="AC"){
    display.value = "";
    }
  if(display.value.charAt(0) === "0" && display.value.length === Number("2")){
    display.value = display.value.substr(1);
  }
}

function remove(){
  var num = display.value;
  var len = num.length - 1;
  var newNum = num.substring(0,len);
  display.value = newNum;
}



function answer(){
  if(display.value===""){
    display.value = "0";
  }
  else{
    x=display.value;
    x=eval(x);
    display.value=x;
  }
}

function power(){
  x=display.value;
  x=eval(x*x);
  display.value=x;
}

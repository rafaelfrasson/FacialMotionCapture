var vdisplay = [];
var d = document;

function clean(){
    d.getElementById('resultado').innerHTML = "";
    vdisplay = [];
}





function back() {
}




function insert(num){
    
	if(num == "+" || num == "/" || num == "*" || num == "-"){
		
        if(vdisplay.length == 0){

              vdisplay.push(d.getElementById('resultado').innerHTML);
              vdisplay.push(num);
              d.getElementById('resultado').innerHTML = "";
              
    	}else if (vdisplay[vdisplay.length-1] !=  d.getElementById('resultado').innerHTML && d.getElementById('resultado').innerHTML != "" ){

	        vdisplay.push(d.getElementById('resultado').innerHTML);
	        vdisplay.push(num);
	        d.getElementById('resultado').innerHTML = "";

	    }else{
	        vdisplay.push(num);
	        d.getElementById('resultado').innerHTML = "";
	    }
   
	}else if(num == "="){
        vdisplay.push(d.getElementById('resultado').innerHTML);
        calcular();
    }else{
        d.getElementById('resultado').innerHTML += num;
    }
    
}

function calcular(){
    let result = "";
    for(let i = 0 ; i < vdisplay.length; i++){
        result += vdisplay[i];
    }
	console.log(vdisplay);
    d.getElementById('resultado').innerHTML = eval(result);
}
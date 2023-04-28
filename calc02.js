var vdisplay = [];
var d = document;

function clean(){
	
	d.getElementById('resultado').innerHTML = "";
	
	vdisplay = [];
}

function back(){
	
	d.getElementById('resultado').innerHTML = d.getElementById('resultado').innerHTML.substring(0, d.getElementById('resultado').innerHTML.length-1);
	
}

function insert(num){
	
	if(num == "+" || num == "-" || num == "/" || num == "*"){
	
		
		if(vdisplay.length == 0){
		
			
			vdisplay.push(d.getElementById('resultado').innerHTML);
			
			vdisplay.push(num);
			
			d.getElementById('resultado').innerHTML = "";
		
		}else if(vdisplay[vdisplay.length-1] !=  d.getElementById('resultado').innerHTML && d.getElementById('resultado').innerHTML != "" ){
						
			vdisplay.push(d.getElementById('resultado').innerHTML);
			
			vdisplay.push(num);
			
			d.getElementById('resultado').innerHTML = "";
			
		}else if(vdisplay[vdisplay.length-1] != "+" && vdisplay[vdisplay.length-1] != "-" && vdisplay[vdisplay.length-1] != "/" && vdisplay[vdisplay.length-1] != "*"){
			
			vdisplay.push(num);
			
			d.getElementById('resultado').innerHTML = "";
		}
		
		
		
		
	}
	else if(num == "="){
		
		if(vdisplay[vdisplay.length-1] == "+" || vdisplay[vdisplay.length-1] == "-" || vdisplay[vdisplay.length-1] == "/" || vdisplay[vdisplay.length-1] == "*"){
			
			vdisplay.push(d.getElementById('resultado').innerHTML);
			
			calcular();
		}
	
	}else{
		
		if(vdisplay.length == 1){
			clean();
		}
		
		d.getElementById('resultado').innerHTML +=  num;
			
	}
}

function calcular(){
	let result = "";
	
	try{
	
		for(let i = 0 ; i < vdisplay.length; i++){
			
			result += vdisplay[i];
			
			console.log(" Resultado = " + result);
		}
		
		result = eval(result);
		d.getElementById('resultado').innerHTML = result;
		
		//limpar lista
		vdisplay = [];
		
		//resultado
		vdisplay.push(result);
		
	}catch(e){
		d.getElementById('resultado').innerHTML = " ---  NaN ---";
	}

}

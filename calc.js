
// declaração da variável global document denominada como d
var d = document;
var  vdisplay = [];
function insert(num)
{
	if(num == "+" || num == "-" || num == "/" || num == "*")
	{
		
		if(vdisplay.length == 0){
			
			vdisplay.push(d.getElementById('resultado').innerHTML);
			vdisplay.push(num);
		}
		else if(vdisplay[vdisplay.length-1] != d.getElementById('resultado').innerHTML && d.getElementById('resultado').innerHTML != "")
		{
			vdisplay.push(d.getElementById('resultado').innerHTML);
			vdisplay.push(num);
		}
		else if(vdisplay[vdisplay.length-1] != num)
		{
			vdisplay.push(num);
			
		}
		d.getElementById('resultado').innerHTML = "";
		console.log(vdisplay);
	}
	else if(num == "=")
	{
		//Empilha o ultimo número digitado
		vdisplay.push(d.getElementById('resultado').innerHTML);
		d.getElementById('resultado').innerHTML = "";
		console.log(vdisplay);
		calcular();
	}
	else
	{
		if(validNum(num))
		{
			//Forma avançada de representar o mesmo algoritmo do bloco acima
			d.getElementById('resultado').innerHTML += num;
		}
		
	}
	
}

function validNum(num){
	
	let dotValid = true;
	let digito = d.getElementById('resultado').innerHTML;
	if(num == ".")
	{
		for(let i = 0; i < digito.length; i++){
			if(digito[i] == num)
			{
				alert("Mais de um .");
				dotValid = false;
			}
		}
		return dotValid;
	}
	else
	{
		return true;
	}
	
}

function clean()
{
	// Limpa todos os valores contidos no objeto Html resultado
	d.getElementById('resultado').innerHTML = "";
	vdisplay = [];
}
function back()
{
    // Armazena o conteúdo do objeto Html resultado na variável denominada como resultado
	var resultado = d.getElementById('resultado').innerHTML;
	// Usa a função substring para transformar a variável resultado em um vetor e subtrair uma posição do vetor, retornando o resultado para o objeto Html resultado
    d.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var result = "";
		
	try{
		
		for(var i = 0;  i <  vdisplay.length; i++){
			result += vdisplay[i];
		}
		
		// Se existe um valor é executado a função eval para calcular qualquer valor que está na variável resultado e retornado o resultado para o objeto Html resultado
		console.log(result)
		d.getElementById('resultado').innerHTML = eval(result);
		
		vdisplay = [d.getElementById('resultado').innerHTML];
	}
	catch(e)
	{
		// Caso o objeto Html resultado esteja vazio é retornado um valor "Nada..."
		d.getElementById('resultado').innerHTML = " --- NaN ---";
	}
    
}


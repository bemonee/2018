const myModule = (function(){
	
	//Variables y metodos privados
	let contador = 0;
	let sumador = 0;
	
	incrementarContador = function(){
		contador++;
	};
	
	incrementarSumador = function(numero){
		sumador += numero;
	};
	
	return {
		//Metodos publicos
		contar: function(){
			incrementarContador();
			return contador;
		},
		
		sumar: function(num){
			incrementarSumador(num);
			return sumador;
		}
	}
})();

window.onload = function(){
	
	//Va a funcionar porque estamos llamando a los metodos publicos
	document.getElementById('divCorrecto').onclick = function(){
		alert('El contador esta en: ' + myModule.contar() + '. El sumador esta en: ' + myModule.sumar(5));
	};

	//No va a funcionar porque estamos llamando a los metodos y variables privadas.
	document.getElementById('divIncorrecto').onclick = function(){
		try
		{
			const cont = myModule.incrementarContador();
			const sum = sumador + 5; 
			alert('El contador esta en: ' + cont + '. El sumador esta en: ' + sum);
		}
		catch(err)
		{
			alert(err);
		}
	};	
}
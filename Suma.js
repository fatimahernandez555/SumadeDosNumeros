function Sumar(){
	// declarar las variables
	var N1,N2,Su;
	//Recuperar los valores de las cajas de text
	N1=parseInt(document.getElementById("Num1").value);
	N2=parseInt(document.getElementById("Num2").value);
		//Raliza las operaciones
	Su=N1+N2;
	//Mostrar los resultados
	document.getElementById("Sum").value=Su;
}
   function Borrar(){
   	document.getElementById("Num1").value="";
   	document.getElementById("Num2").value="";
   	document.getElementById("Sum").value="";

}
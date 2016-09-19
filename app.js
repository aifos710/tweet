window.onload = function(){
	var boton = document.getElementById("boton"); //boton
	boton.addEventListener("click", function(){
		var status = document.getElementById("status").value; //input
	    var newItem = document.createElement("div"); //para crear nuevo div
	    var textnode = document.createTextNode(status); //agregar text que esta en var status
	    newItem.appendChild(textnode); //para agregar

	    var posted = document.getElementById("posted"); // llamando al div general el q ya esta en html
	    posted.insertBefore(newItem, posted.childNodes[0]); // para insertar antes
	});

}





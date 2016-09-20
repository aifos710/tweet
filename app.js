window.addEventListener("load", function(){

	var boton = document.getElementById("boton"); 

	boton.addEventListener("click", function(e){
		e.preventDefault(); 
		var textarea = document.getElementById("status");
		var status = textarea.value;
		agregarMensaje(status);
		document.getElementById("count").innerText = "140"
		boton.disabled = true;
		textarea.value ="";
	});

	function agregarMensaje(status) {
		var div = document.createElement("div");
		div.innerText = status;
		var posted = document.getElementById("posted");
		posted.insertBefore(div, posted.childNodes[0]).classList.add("box");
	}

	var status = document.getElementById("status");
	status.addEventListener("keyup", function() {
		var maxcharacter = 140;
		var len = document.getElementById("status").value.length;

		if(len <= maxcharacter) {
			document.getElementById("count").innerText = maxcharacter - len;	
		} else {
			document.getElementById("count").innerText = maxcharacter - len;
		}

		if(this.value.length > 0)
			boton.disabled = false;
		else
			boton.disabled =true;
	});

});







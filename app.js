window.addEventListener("load", function(){

	var boton = document.getElementById("boton"); 
	var count = document.getElementById("count");

	boton.addEventListener("click", function(e){
		e.preventDefault(); 
		var textarea = document.getElementById("status");
		var status = textarea.value;
		agregarMensaje(status);
		document.getElementById("count").innerText = "140"
		boton.disabled = true;
		count.classList.remove("orange");
		count.classList.remove("red");

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

		if (len > 0){
			boton.disabled = false;
		}
		if (len > 140){
			boton.disabled = true;
		}
		if (len > 120) {
			count.classList.add("orange");
		}else{
			count.classList.remove("orange");
		}
		if (len > 130){
			count.classList.add("red");
		}
		else{
			count.classList.remove("red");

		}	
	});

	var status = document.querySelector("textarea");

	status.addEventListener('keydown', autosize);
	             
	function autosize(){
	  var el = this;
	  setTimeout(function(){
	    el.style.cssText = 'height:auto; padding:0';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  },0);
	}

});







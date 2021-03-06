window.addEventListener("load", function(){

	var boton = document.getElementById("boton"); 
	var count = document.getElementById("count");
	var textarea = document.getElementById("status");

	boton.addEventListener("click", function(e){
		e.preventDefault(); 

		var status = textarea.value;
		agregarMensaje(status);
		document.getElementById("count").innerText = "140"
		boton.disabled = true;
		count.classList.remove("orange");
		count.classList.remove("red");
		resize();
		
		textarea.value ="";

	});

	function agregarMensaje(status) {
		var div = document.createElement("div");
		div.setAttribute("class", "ghostbox");
		var posted = document.getElementById("posted");
		posted.insertBefore(div, posted.childNodes[0]).classList.add("box");
		var n =new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
		div.innerText = status + "  " + n;
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

	status.addEventListener("keydown", autosize);
	             
	function autosize(){
	  var el = this;
	    el.style.cssText = "height:auto; padding:0";
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}
	function resize(){
		textarea.style.cssText = "height:auto; padding:0";
	}

	

});







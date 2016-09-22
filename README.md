# Tweet

![gral](http://i63.tinypic.com/2dtvg3p.png)

### Versión 0.0.1

- Diseñar un formulario que tenga un textarea y un botón.
```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="main.css">
	<meta charset="utf-8">
	<title>Eventos</title>
</head>
<body>
	<form>
		<textarea id="status" placeholder="What´s new?"></textarea><br>
		<button id="boton" type="button">Click me!</button>
	</form>
	<div id="posted"></div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```
- Agregar un evento de click al botón o un evento de submit al formulario.
```javascript
  var boton = document.getElementById("boton");
	boton.addEventListener("click", function(){
```
- En el evento, coger el texto del textarea.
```javascript
  var status = document.getElementById("status").value;
```
- Agregar el texto al HTML.
```javascript
  //agregar text que esta en var status
  var textnode = document.createTextNode(status); 
  //para agregar
	newItem.appendChild(textnode); 

  // llamando al div general el q ya esta en html
  var posted = document.getElementById("posted"); 
	// para insertar antes
  posted.insertBefore(newItem, posted.childNodes[0]); 
```



### Versión 0.0.2


- No ingresar texto vacío (deshabilitar el botón de enviar).
![first](http://i67.tinypic.com/nx86jt.png)
- Contar la cantidad de caracteres de forma regresiva.
![second](http://i67.tinypic.com/2hyfp6u.png)

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="main.css">
	<meta charset="utf-8">
	<title>Eventos</title>
</head>
<body>
	<form>
		<textarea id="status" placeholder="What´s new?"></textarea><br>
		<!--contador-->
		<div id="count">140</div><br> 
		<button id="boton" type="submit" disabled="true">Click me!</button>
	</form>
	<div id="posted"></div>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>
```

```javascript
var status = document.getElementById("status");
	status.addEventListener("keyup", function() {
		var maxcharacter = 140;
		var len = document.getElementById("status").value.length;

		if(len <= maxcharacter) {
			document.getElementById("count").innerText = maxcharacter - len;	
		} else {
			document.getElementById("count").innerText = maxcharacter - len;
		}

//deshabilitando boton
		if(this.value.length > 0)
			boton.disabled = false;
		else
			boton.disabled =true;
	});
```



### Versión 0.0.3

![four](http://i67.tinypic.com/17airb.png)
![five](http://i65.tinypic.com/1zpmadx.png)


- Si pasa los 140 caracteres, deshabilitar el botón.
```javascript
  if (len > 140)
		boton.disabled = true;
```
- Si pasa los 120 caracteres, mostrar el contador con OTRO color.
```javascript
  if (len > 120) 
		count.classList.add("orange");
```
- Si pasa los 130 caracteres, mostrar el contador con OTRO color.
```javascript
  if (len > 130)
		count.classList.add("red");
```
- si pasa los 140 caracteres, mostrar el contador en negativo.
```javascript
  if (len > 0)
		boton.disabled = false;
```



### Versión 0.0.4

![third](http://i67.tinypic.com/xnz2hh.png)
```javascript
function autosize(){
	  var el = this;
	  setTimeout(function(){
	    el.style.cssText = 'height:auto; padding:0';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  },0);
	}

});
```


- Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.



### Versión 0.0.5


- Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)



### Versión 0.0.6


- Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm

```javascript
var n =new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
		div.innerText = status + "  " + n;
```
### Removiendo clases en cada click.
```javascript
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
```

### CSS
```CSS
body{
	text-align: center;
    margin: 0;
    color: #000;
    box-sizing: border-box;
    padding: 0;
}

h1{
	margin: 0;
}

textarea{
	border: 2px solid #000;
	text-align: center;
	overflow: hidden;
}

.bg-mario{
	background-image: url(img/mario-bros.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 200px;
    height: 462px;
}

#count{
	height:20px ;
	width:40px ;
	border:2px solid #fff;
	margin: auto;
	margin-top: 5px;
	color: #fff;
}

#boton{
	background-color: #80D010; 
    border: 2px solid #000;
    color: #fff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 5px; 
    border-radius: 5px;  
}

#boton:disabled{
	background-color: #D82800;
	border:2px solid #fff;
	color: #000;
}

.orange{
	background-color: #ffa500;
}

.red{
	background-color: #ff0000 ;
}

/* ghost class */

.ghostbox{
	width: 250px;
	height: auto;
	border: 2px solid #C1501B;
	padding: 5px;
	word-wrap: break-word;
	margin: 5px auto;
	background-color: #FC9838; 
	color:white;
	border-radius: 5px;
}



```

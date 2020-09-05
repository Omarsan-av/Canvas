let dibujo = document.getElementById("areaCanvas");
let papel =dibujo.getContext("2d");
dibujo.width = 1000;
dibujo.height = 500;

let fondo = "images/emoji.png";
let imagen = new Image();
imagen.src = fondo;

imagen.addEventListener("load", areaCanvas);

function areaCanvas(evento) 
{
   dibujo.style.display = "block";
   dibujo.style.background = "#fff";
   papel.drawImage(imagen, 400, 100);
}

let boton = document.getElementById("botoncito") 

let dibujo2 = document.getElementById("areaCanvas2");
let papel2 =dibujo2.getContext("2d");
dibujo2.width = 1000;
dibujo2.height = 500;

boton.addEventListener("click", areaCanvas2)

function areaCanvas2(evento) 
{
   dibujo2.style.display = "block";
   dibujo2.style.background = "transparent";
}

let x;
let y;
let estado = false;


dibujo2.addEventListener("mousedown", pulsarMouse);
dibujo2.addEventListener("mousemove", moverMouse);
dibujo2.addEventListener("mouseup", soltarMouse);


function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   

   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 3;
   lienzo.moveTo(xinicial,yinicial);
   lienzo.lineTo(xfinal,yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

function pulsarMouse (evento)
{        
   estado = true;         
    x = evento.offsetX;
    y = evento.offsetY;
}


function moverMouse (evento) 
{  
   if (estado) 
    {   // solo se dibujara si esta el click del mouse presionado
        dibujar("darkblue", x, y, evento.offsetX, evento.offsetY, papel2);
    }

    x = evento.offsetX;
    y = evento.offsetY;    
}

function soltarMouse(evento)
{
     estado = false;        
    x = evento.offsetX;
    y = evento.offsetY;
}

let dibujo = document.getElementById("areaDibujo");
let papel = dibujo.getContext("2d");
let x;
let y;
let estado = false;
let boton = document.getElementById("dibujar");

boton.addEventListener("click", areaCanvas);
dibujo.addEventListener("mousedown", pulsarMouse);
dibujo.addEventListener("mousemove", moverMouse);
dibujo.addEventListener("mouseup", soltarMouse);
 
function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    let grosor = document.getElementById("grosor");
    let grosorLinea = grosor.value;

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosorLinea;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function areaCanvas(evento) 
{
    // let fondo = document.getElementById("fondo");
    // let fondoCanvas = fondo.value;

    boton.style.display = "none";
    // dibujo.style.background = fondoCanvas;
    dibujo.style.display = "block";
    dibujo.height = 500;
    dibujo.width = 1000;
      
    let alto = dibujo.height;
    let ancho = dibujo.width;
}

function pulsarMouse (evento)
{
    estado = true;         
    x = evento.offsetX;
    y = evento.offsetY;
}

function moverMouse (evento) 
{  
    let color = document.getElementById("paletaColores");
    let colorLapiz = color.value;
    
    if (estado) 
    {   // solo se dibujara si esta el click del mouse presionado
        dibujar(colorLapiz, x, y, evento.offsetX, evento.offsetY, papel);
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

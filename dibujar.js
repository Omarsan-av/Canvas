
let dibujo = document.getElementById("areaDibujo");
let papel = dibujo.getContext("2d");
dibujo.width = 1000;
dibujo.height = 500;

let fondo = "images/emoji.png";
let imagen = new Image();
console.log(imagen);
imagen.src = fondo;
imagen.width= 
imagen.style.display="block";
imagen.style.margin = "auto";
imagen.addEventListener("load", areaCanvas);
// imagen.addEventListener("load", drawBackground);

let imagenFondo = document.getElementById("imagenFondo");
imagenFondo.addEventListener("click", drawBackground);
let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function()
{
    dibujo.width=dibujo.width;
});

let x;
let y;
let estado = false;
// let boton = document.getElementById("dibujar");

function drawBackground () 
{
   papel.drawImage(imagen, 400, 100);
}

howDraw = "mouse";

if(howDraw === "mouse")
{
    dibujo.addEventListener("mousedown", pulsarMouse);
    dibujo.addEventListener("mousemove", moverMouse);
    dibujo.addEventListener("mouseup", soltarMouse);
}

let grosor = document.getElementById("grosor");

function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    let grosorLinea = grosor.value;

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosorLinea;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

let estadoImage = false;

function areaCanvas(evento) 
{
    // let fondo = document.getElementById("fondo");
    // let fondoCanvas = fondo.value;
    // boton.style.display = "none";
    dibujo.style.display = "block";
    // imagen.style.display = "none";
    
    let alto = dibujo.height;
    let ancho = dibujo.width;
    // drawBackground();
    if (estadoImage==true)
    {
        imagen.src ="";
        dibujo.style.background = "#000";
        estadoImage="false"
    }
    else 
    {
        dibujo.style.background = "#fff";
        estadoImage=true;
    }


}

function pulsarMouse (evento)
{
    estado = true;         
    x = evento.offsetX;
    y = evento.offsetY;
}
let color = document.getElementById("paletaColores");

function moverMouse (evento) 
{  
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


var teclas = 
{
    UP: 38, 
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

let drawKeys = document.getElementById("drawKeys");
drawKeys.addEventListener("click", paintKeys);

function paintKeys()
{
    document.addEventListener("keydown", dibujarTeclado);
    dibujarLinea(colorLapiz, a-1, b-1, a+1, b+1, papel);
}


var a = 100; //para valor de x
var b = 100; //para valor de y


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    let grosorLinea = grosor.value;

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosorLinea;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var movimiento = 1;
    howDraw="keys";
    let colorLapiz = color.value;

    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarLinea(colorLapiz, a, b, a, b + movimiento, papel);
            b = b + movimiento;
        break;

        case teclas.UP:
            dibujarLinea(colorLapiz, a, b, a, b - movimiento, papel);
            b = b - movimiento;
        break;

        case teclas.RIGTH:
            dibujarLinea(colorLapiz, a, b, a + movimiento, b, papel);
            a = a + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(colorLapiz, a, b, a - movimiento, b, papel);
            a = a - movimiento;
        break;
    }
}
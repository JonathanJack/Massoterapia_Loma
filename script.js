const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");


var idx = 0;
var tam = 0;

function carrossel(){
  idx++;
  tam = idx * -window.innerWidth;
  if(idx > img.length - 1){
    idx = 0;    
    tam = 0;
  }
  
  console.log(tam);
  imgs.style.transform = 'translateX(' + tam +'px)';
}

setInterval(carrossel,5000);
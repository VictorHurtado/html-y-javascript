$(document).ready(function() {
  //se utiliza para cambiar dinamicamente los estilos y poder ocultar el boton de regreso al top
  var altura=($('.acerca_de').offset().top)+60;

  $(window).on('scroll',function(){
    if($(window).scrollTop()<altura){
      $('.ocultar').removeClass('superior');
      $('.superior').addClass('ocultar');

    }else {
      $('.ocultar').addClass('superior');
      $('.superior').removeClass('ocultar');
    }
  });
  // animación de desplazamiento a la sección que desea el usuario, y se utiliza la variable destino  para saber a que distancia del top se encuentra
  $('a[href^="#"]').click(function() { 
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
  $('html, body').animate({ scrollTop: destino.offset().top }, 800);
    return false;
  });

});
//de igual forma se emplea esta funcion para intercambiar las clases y poder desplegar la información académica y adicional.
function mostrar(id){
  var content= document.getElementById(id);
  if(id=="info_Acad"){
    content.classList.toggle('Informacion_academica');
  }else{
    content.classList.toggle('Informacion_Adicional');
  }

}

function add_more(){
  var myarray=["desorden.jpeg","entrada.jpeg","silla.jpeg"];
  var names=["Desorden","Entrada","silla solitaria"];
  var desc=["Construccion Bloque 7","Construccion Bloque 7","Universidad Santiago de cali Bulevar"];
  number=Math.floor(Math.random()*(myarray.length-0))+0;
  var content_trabajo= document.querySelector('.trabajo');
  var content_fotos= document.querySelector('.contenedor_trabajos');
  var new_element=content_trabajo.cloneNode(true);
  var atrib='img/'+myarray[number];
 
  
  new_element.querySelector('.desc').textContent=desc[number];
  new_element.querySelector('.nombre').textContent=names[number];
  new_element.querySelector('img').setAttribute('src',atrib);
  content_fotos.appendChild(new_element);
  
}

jQuery(document).ready(function() {
  alert('hola')
  
audio=document.createElement('audio');
audio.src='audio/tituloSonidos.mp3';
audio.play();
puntuacion=Number(localStorage.getItem("puntuacion"));
if (puntuacion==null) {
puntuacion=0;
}
window.setTimeout(iniciar,5000);
});

function iniciar(){

$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<a href="index.html" id="botonAtras"><img src="images/aspa.png"/></a><p>Puntuación='+puntuacion+'</p><p>Nivel='+buscarNivel(puntuacion)+'</p>');
$('#reiniciarEsto').click(function(){
localStorage.setItem("puntuacion","0");
$('#pagFin').css('display','none');
iniciar();
});
$('#contAnimales').css('visibility','hidden');
colocarAnimales();
}


function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function colocarAnimales(){
animal[1]=aleatorio(1,21);
animal[2]=aleatorio(1,21);
if (animal[1]==animal[2]) {
while(animal[1]==animal[2]){
animal[2]=aleatorio(1,21);
}
}
animal[3]=aleatorio(1,21);
if (animal[3]==animal[1]||animal[3]==animal[2]) {
while(animal[3]==animal[1]||animal[3]==animal[2]){
animal[3]=aleatorio(1,21)
}
}
animal[4]=aleatorio(1,21);
if(animal[4]==animal[1]||animal[4]==animal[2]||animal[4]==animal[3]){
while(animal[4]==animal[1]||animal[4]==animal[2]||animal[4]==animal[3]){
animal[4]=aleatorio(1,21);
}
}
animal[5]=aleatorio(1,21);
if (animal[5]==animal[1]||animal[5]==animal[2]||animal[5]==animal[3]||animal[5]==animal[4]) {
while(animal[5]==animal[1]||animal[5]==animal[2]||animal[5]==animal[3]||animal[5]==animal[4]){
animal[5]=aleatorio(1,21)
}
}
animal[6]=aleatorio(1,21);
if(animal[6]==animal[1]||animal[6]==animal[2]||animal[6]==animal[3]||animal[6]==animal[4]||animal[6]==animal[5]){
while(animal[6]==animal[1]||animal[6]==animal[2]||animal[6]==animal[3]||animal[6]==animal[4]||animal[6]==animal[5]){
animal[6]=aleatorio(1,21);
}
}
animal[7]=aleatorio(1,21);
if(animal[7]==animal[1]||animal[7]==animal[2]||animal[7]==animal[3]||animal[7]==animal[4]||animal[7]==animal[5]||animal[7]==animal[6]){
while(animal[7]==animal[1]||animal[7]==animal[2]||animal[7]==animal[3]||animal[7]==animal[4]||animal[7]==animal[5]||animal[7]==animal[6]){
animal[7]=aleatorio(1,21);
}
}
animal[8]=aleatorio(1,21);
if(animal[8]==animal[1]||animal[8]==animal[2]||animal[8]==animal[3]||animal[8]==animal[4]||animal[8]==animal[5]||animal[8]==animal[6]||animal[8]==animal[7]){
while(animal[8]==animal[1]||animal[8]==animal[2]||animal[8]==animal[3]||animal[8]==animal[4]||animal[8]==animal[5]||animal[8]==animal[6]||animal[8]==animal[7]){
animal[8]=aleatorio(1,21);
}
}
var db = openDatabase('animales.db','1.0','bd1',2*1024*1024);
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[1]+"'",[],function(tx,res){
rutaanimal[1]=res.rows.item(0).imagen;
nombreAnimal[1]=res.rows.item(0).nombre;
audioAnimal[1]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[2]+"'",[],function(tx,res){
rutaanimal[2]=res.rows.item(0).imagen;
nombreAnimal[2]=res.rows.item(0).nombre;
audioAnimal[2]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[3]+"'",[],function(tx,res){
rutaanimal[3]=res.rows.item(0).imagen;
nombreAnimal[3]=res.rows.item(0).nombre;
audioAnimal[3]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[4]+"'",[],function(tx,res){
rutaanimal[4]=res.rows.item(0).imagen;
nombreAnimal[4]=res.rows.item(0).nombre;
audioAnimal[4]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[5]+"'",[],function(tx,res){
rutaanimal[5]=res.rows.item(0).imagen;
nombreAnimal[5]=res.rows.item(0).nombre;
audioAnimal[5]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[6]+"'",[],function(tx,res){
rutaanimal[6]=res.rows.item(0).imagen;
nombreAnimal[6]=res.rows.item(0).nombre;
audioAnimal[6]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
nombreAnimal[7]=res.rows.item(0).nombre;
audioAnimal[7]=res.rows.item(0).sonido;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
nombreAnimal[8]=res.rows.item(0).nombre;
audioAnimal[8]=res.rows.item(0).sonido;
});
});
window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,3);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba3 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,4);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba3 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,5);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba4 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,6);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba4 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,7);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba8 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal"/></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal"/></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div><div><input type="hidden" value="7"/><img src="images/imagenesAnimales/'+rutaanimal[7]+'" class="btnAnimal"/></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else if (puntuacion<150){
animalSeleccionado=aleatorio(1,8);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba8 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal"/></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal"/></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div><div><input type="hidden" value="7"/><img src="images/imagenesAnimales/'+rutaanimal[7]+'" class="btnAnimal"/></div><div><input type="hidden" value="8"/><img src="images/imagenesAnimales/'+rutaanimal[8]+'" class="btnAnimal" /></div></div>');
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
window.setTimeout(colocarAltura,50);
}else{
    $('#pagPpal').hide();
   $('#pagFin').show(); 
}	

$('.btnAnimal').click(comprobarSeleccion);
$('.altavoz').click(function(){
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
});
},350);

}

function buscarNivel(a){
if (a<15) {
return 1;
}else if (a<30) {
return 2;
}else if (a<50) {
return 3;
}else if (a<75) {
return 4;
}else if (a<100) {
return 5;
}else{
return 6;
}
}


function reproductor(n,a){
audio.src=a;
audio.play();
}
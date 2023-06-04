var puntuacion=0;

jQuery(document).ready(onDeviceReady);

function onDeviceReady () {
document.onselectstart = function() {return false;}

puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};

$('#contPuntuacion').html('Puntuación='+puntuacion);
$('#btnSalir').click(function(e){
e.preventDefault();
navigator.app.exitApp();
});
}

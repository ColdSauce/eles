var canvas = document.getElementById("eles_canvas");
var ctx = canvas.getContext("2d");

function get_graphics(){
    var port = "5000"; 
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        socket.emit('get_graphics', {data: 'some json'});
    }); 
}
get_graphics()

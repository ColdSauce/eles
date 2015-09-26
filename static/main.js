var canvas = document.getElementById("eles_canvas");
canvas.width = 640
canvas.height = 480
var ctx = canvas.getContext("2d");

var offset = 16
var current_cells = []

canvas.addEventListener('mousemove', function(evt) {
    var mouse_pos = get_mouse_position(canvas, evt);
    draw_cell(mouse_pos.x,mouse_pos.y);
}, false);

function draw_cell(x,y){
    ctx.fillRect(x - (x%offset),y - (y%offset),offset,offset)
}

function Cell(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
}

function draw_grid(){
    var width = 640;
    var height = 480;
    for(var x = 0; x < width;x+=offset){
        for(var y = 0; y < height;y+=offset){
            ctx.strokeRect(x,y,offset,offset);
        }
    }
}

function get_graphics(){
    var port = "5000"; 
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        //TODO: Change data field to actual data.
        socket.emit('get_graphics', {data: 'some json'});
    }); 
    
}
function get_mouse_position(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function get_distance(cell1, cell2){
   var x1 = cell1.x;
   var x2 = cell2.x;

   var y1 = cell1.y;
   var y2 = cell2.y;

   return (Math.pow(x2 - x1 , 2) - Math.pow(y2 - y1, 2))

}

function neighbor_count(cell){
   var final_count = 0
   for(current_cell of current_cells){
       if(current_cell.x == cell.x && current_cell.y == cell.y){
            continue;
       }
       distance_between = get_distance(cell, current_cell);
       if(distance_between == 1){
            final_count++;
       }
   }
   return final_count;
}

function on_turn_start(){
    //TODO: Implement this.
    //This function is run at the beginning of every turn
}

draw_grid()
setInterval(on_turn_start(), 1 * 1000);

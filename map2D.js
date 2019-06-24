var dom = document.getElementById('id-test');
var w = dom.offsetWidth, h = dom.offsetHeight;
var canvas = document.createElement('canvas');
canvas.width = w;
canvas.height = h;
canvas.style.width = w + 'px';
canvas.style.height = h + 'px';
dom.appendChild(canvas);
var ctx = canvas.getContext('2d');
function createPath(Geo) {
    for(var i = 0; i < Geo.features.length; i++) {
      var gm = Geo.features[i].geometry;
      var coordinates = gm.coordinates;
      if(gm.type == 'Polygon') {
        var path = [];
        for(var a = 0; a < coordinates.length; a++) {
          for(var b = 0; b < coordinates[a].length; b++) {
            var v = getXY(coordinates[a][b][0], coordinates[a][b][1]);
            path.push(v);
          }
        }
        drawPath(path)
      } else if(gm.type == 'MultiPolygon') {
        for(var a = 0; a < coordinates.length; a++) {
          var path = [];
          for(var b = 0; b < coordinates[a].length; b++) {
            for(var c = 0; c < coordinates[a][b].length; c++) {
              var v = getXY(coordinates[a][b][c][0], coordinates[a][b][c][1]);
              path.push(v);
            }
          }
          drawPath(path);
        }
      }
    }
}
function drawPath(path) {
	ctx.beginPath();
	ctx.strokeStyle = "#0000FF";
	for(var i = 0; i < path.length - 1; i++){
  		if(i == 0) {
  			ctx.moveTo(path[i].x, path[i].y);
  		} else {
  			ctx.lineTo(path[i].x, path[i].y);
  		}
	}
	ctx.stroke();
	ctx.fillStyle = "green";
	ctx.fill();

}
function getXY(lon, lat) {
	return {
		x: (lon / 180) * 800 + w / 2,
		y: -(lat / 180) * 800 + h / 2
	}
}
export default function(Geo) {
	createPath(Geo);
};
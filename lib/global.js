
// ----------------------------------------------------------------------------
//                             Global variables
// ----------------------------------------------------------------------------
var margin = {top: -5, right: -5, bottom: -5, left: -5};
var WIDTH = window.screen.availWidth - 40;
var HEIGHT = window.screen.availHeight - 150;

var textFile;
var textFileName;

var canvas, container, frame;
var layout;

var PAN_AND_ZOOM = true;


// ----------------------------------------------------------------------------
//                               Pan & Zoom
// ----------------------------------------------------------------------------
var zoom = d3.behavior.zoom()
    .scaleExtent([1, 10])
    .on("zoom", zoomed);
	
var drag = d3.behavior.drag()
    .on("dragstart", dragstarted)
	.on("drag", function(d,i) {
		d.x += d3.event.dx
		d.y += d3.event.dy
		d3.select(this).attr("transform", function(d,i){
			return "translate(" + [ d.x,d.y ] + ")"
		})
	})
	.on("dragend", dragended);

function zoomed() {
	if (PAN_AND_ZOOM) {
		container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	}
}

function dragstarted(d) {
	if (PAN_AND_ZOOM) {
		d3.event.sourceEvent.stopPropagation();
		d3.select(this).classed("dragging", true);
	}
} 

function dragended(d) {
	if (PAN_AND_ZOOM) {
		d3.select(this).classed("dragging", false);
	}
}

 

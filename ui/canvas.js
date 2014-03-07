


function createCanvas() {
    /*canvas = d3.select("body")
        .append("svg:svg")
            .attr("id", "canvas")
            .attr("width", WIDTH + margin.left + margin.right)
            .attr("height", HEIGHT + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
                .call(zoom);
    
    rect = canvas.append("rect")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("stroke-width", 1)
        .style("fill", "none")
        .style("pointer-events", "all");
        
    container = canvas.append("g")
        .attr("id", "container");

    frame = d3.select("canvas")
        .append("svg:rect")
            .attr("id", "frame")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", "none");	*/
            
	svg = d3.select("#main")
//    svg = d3.select("body")
        .append("svg:svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)
            .attr("id", "canvas")
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
                .call(zoom);
        
    rect = svg.append("rect")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("stroke-width", 1)
        .style("fill", "none")
        .style("pointer-events", "all");
        
    container = svg.append("g")
        .attr("id", "container");

    frame = d3.select("svg")
        .append("svg:rect")
            .attr("id", "frame")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", "none");   

    canvas = svg;
}

function createCanvas_old() {
	canvas = d3.select("#main").append("svg")
		.attr("id", "canvas")
		.attr("width", WIDTH + margin.left + margin.right)
		.attr("height", HEIGHT + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.right + ")")
			.call(zoom);
			// To disable dblclick effect. 
			// http://stackoverflow.com/questions/11786023/how-to-disable-double-click-zoom-for-d3-behavior-zoom
			// It doesn't work!
			//.call(d3.behavior.zoom().on("zoom", zoomed)).on("dblclick.zoom", null)
			
	container = canvas.append("g")
		.attr("id", "container")
//		.attr("transform", "translate(" + margin.left + "," + margin.right + ")")
//		.call(zoom);
			
	frame = d3.select("svg")
//	frame = canvas
		.append("svg:rect")
			.attr("id", "frame")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("stroke", "#000")
			.attr("stroke-width", 1)
			.attr("fill", "none");			
}

function destroyCanvas() {
	var element = document.getElementById("canvas");
	element.parentNode.removeChild(element);
}

function clearCanvas() {
	// Remove the SVG element (canvas)
	destroyCanvas();

	// Insert the SVG element (canvas)
	createCanvas();
}


// ----------------------------------------------------------------------------
//                               Pan & Zoom
// ----------------------------------------------------------------------------
var zoom = d3.behavior.zoom()
    .scaleExtent([1, 10])
    .on("zoom", zoomed);
	
/*var drag = d3.behavior.drag()
    .on("dragstart", dragstarted)
	.on("drag", function(d,i) {
		d.x += d3.event.dx
		d.y += d3.event.dy
		d3.select(this).attr("transform", function(d,i){
			return "translate(" + [ d.x,d.y ] + ")"
		})
	})
	.on("dragend", dragended);*/

function zoomed() {
//console.log('PAN_AND_ZOOM: ' + PAN_AND_ZOOM);
//console.log('zoomed. translate: ' + d3.event.translate + " scale: " + d3.event.scale);
	if (PAN_AND_ZOOM) {
		container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		updateStatusBar();
		//document.getElementById('statusBar').innerHTML = 'Zoom: ' + Math.floor(d3.event.scale*100) + '%';
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

 


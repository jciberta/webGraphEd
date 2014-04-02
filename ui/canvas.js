


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
                .call(zoom)
				.on("dblclick.zoom", null);
        
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
	
	
console.log('Creating VIS');
	vis = container
        .append("svg:g")
			.attr("id", "vis")
			.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
//			.on("mousedown", mousedown)
//			.on("mousemove", mousemove)
//			.on("mouseup", mouseup)
	
}

function destroyCanvas() {
	var element = document.getElementById("canvas");
	element.parentNode.removeChild(element);
}

function clearCanvas() {
//	var element = document.getElementById('vis');
//    element.parent.removeChildren();

	// Just remove the children of the group element "vis"
	var element = document.getElementById('vis');
//console.log('element:');	
//console.dir(element);	
	while (element.firstChild) {
//console.log('element.firstChild:');	
//console.dir(element.firstChild);	
		element.removeChild(element.firstChild);
	}
}

function clearCanvas2() {
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
    if (event.ctrlKey) { return; }
//console.log('PAN_AND_ZOOM: ' + PAN_AND_ZOOM);
//console.log('zoomed. translate: ' + d3.event.translate + " scale: " + d3.event.scale);
	if (PAN_AND_ZOOM) {
		container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		updateStatusBar();
		//document.getElementById('statusBar').innerHTML = 'Zoom: ' + Math.floor(d3.event.scale*100) + '%';
	}
}

/*function dragstarted(d) {
    if (d3.event.ctrlKey) { return; }
	if (PAN_AND_ZOOM) {
		d3.event.sourceEvent.stopPropagation();
		d3.select(this).classed("dragging", true);
	}
}*/

/*function dragended(d) {
    if (d3.event.ctrlKey) { return; }
	if (PAN_AND_ZOOM) {
		d3.select(this).classed("dragging", false);
	}
}*/

/**
 * Gets the current values of pan and zoom.
 */
function getPanAndZoom() {
	var m=0, n=0, s=1;

    if (zoom != null) {
//console.log('zoom.translate: ' + zoom.translate());
        m = zoom.translate()[0];
        n = zoom.translate()[1];
        s = zoom.scale();
    }
    return {translate: {x: m, y: n}, scale: s};


/*console.log('zoom.translate(): ' + zoom.translate());

	var m=0, n=0, s=1;
	var a = container.attr("transform");
//console.log("a: " + a);	

	if (a==null) return {translate: {x: 0, y: 0}, scale: 1}
	
	var a = a.split("scale");

	// Pan
	a[0] = a[0].replace('translate(', '').replace(')', '');
	a[0] = a[0].split(',');
	m = a[0][0];
	n = a[0][1];
//console.log("m: " + m);
//console.log("n: " + n);
	
	// Zoom
	a[1] = a[1].replace('(', '').replace(')', '');
	s = a[1];
//console.log("zoom: " + s);
	
	return {translate: {x: m, y: n}, scale: s}*/
}	





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
	
	
//console.log('Creating VIS');
	vis = container
        .append("svg:g")
			.attr("id", "vis")
			.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
//			.on("mousedown", mousedown)
//			.on("mousemove", mousemove)
//			.on("mouseup", mouseup)


	// Define arrow markers for graph links
	// http://tutorials.jenkov.com/svg/marker-element.html
	svg.append('svg:defs').append('svg:marker')
		.attr('id', 'end-arrow')
		.attr('viewBox', '0 -5 10 10')
		.attr('refX', 3)
		.attr('markerWidth', 4)
		.attr('markerHeight', 4)
		.attr('orient', 'auto')
		.append('svg:path')
		.attr('d', 'M0,-5L10,0L0,5')
		.attr('fill', '#000');

	svg.append('svg:defs').append('svg:marker')
		.attr('id', 'start-arrow')
		.attr('viewBox', '0 -5 10 10')
		.attr('refX', 4)
		.attr('markerWidth', 8)
		.attr('markerHeight', 8)
		.attr('orient', 'auto')
		.append('svg:path')
		.attr('d', 'M10,-5L0,0L10,5')
		.attr('fill', '#000');
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
	coord = {x: 0, y: 0};
}

function createDragLine() {
	var vis = d3.select("#vis");

	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);		
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
    if (d3.event.ctrlKey) { return; }
//console.log('PAN_AND_ZOOM: ' + PAN_AND_ZOOM);
//console.log('zoomed. translate: ' + d3.event.translate + " scale: " + d3.event.scale);
//	if (PAN_AND_ZOOM) {
		container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		updateStatusBar();
		//document.getElementById('statusBar').innerHTML = 'Zoom: ' + Math.floor(d3.event.scale*100) + '%';
//	}
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

/**
 * Zooms in the layout.
 */
function zoomIn() {
	var pz = getPanAndZoom();
	pz.scale += 0.5;
	if (pz.scale > 10) pz.scale = 10;
	zoom.scale(pz.scale);
	container.attr("transform", "translate(" + [pz.translate.x, pz.translate.y] + ")scale(" + pz.scale + ")");
	layout.center();
	updateStatusBar(); 
}

function zoomOut() {
	var pz = getPanAndZoom();
	pz.scale -= 0.5;
	if (pz.scale < 1) pz.scale = 1;
	zoom.scale(pz.scale);
	container.attr("transform", "translate(" + [pz.translate.x, pz.translate.y] + ")scale(" + pz.scale + ")");
	layout.center();
	updateStatusBar();
}

/**
 * Updates the layout, perfoming the generic update.
 * @param {Object} node Every node in the layout.
 * @param {Object} link Every link in the layout.
 */
function updateGenericLayout(self, node, link) {
	// CIRCLE
	node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? ((d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 0) : 0; 
		})
		.attr("id", function(d) { return 'circle' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			var e = d3.event;
			// Stop propagation on the source event to prevent multiple actions
			// https://github.com/mbostock/d3/wiki/Drag-Behavior#on
//			d3.event.sourceEvent.stopPropagation();
			e.stopPropagation();
//			event.stopPropagation();

//			var e = d3.event.sourceEvent;
			if (e.ctrlKey || e.altKey || e.shiftKey) return;
//console.dir(d);
			chooseNodeProperties(d);
		});	

	// SQUARE
	node.append("rect")
		.attr("x", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("y", function(d) { return (d.collapsed ? -8 : -5); })
		.attr("width", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("height", function(d) { 
			if (d.shape == 'Square')
				return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
			else
				return 0;
		})
		.attr("id", function(d) { return 'rect' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.attr("stroke", "#000")
		.attr("stroke-width", 1)
		.on("dblclick", function(d) { 
			var e = d3.event;
			e.stopPropagation();
			if (e.ctrlKey || e.altKey || e.shiftKey) return;
			chooseNodeProperties(d);
		});	
		
	// TEXT
	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d, i) { return d.name; })
		.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		})
		.on("dblclick", function(d) { 
			var e = d3.event;
			e.stopPropagation();
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
		});
}







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
	coord = {x: 0, y: 0};
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




/*	var node = vis.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d.id; })
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
//			.call(this.drag)
			.on("mousedown", function(d) {
				source_node = d;
				source_object = d3.select(this);

                if (event.ctrlKey) {
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
                    coord.x = d.x;
                    coord.y = d.y;
                }
				else if (event.shiftKey) {
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
                    self.updateLayout(d);
				}
			})
			.on("mouseover", function(d) {
				if (linking) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "3");
				}
			})
			.on("mouseout", function(d) {
				if (linking && d!=source_node) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "1.5");
				}
			})
			.on("mouseup", function(d) {	
				target_node = d;
				target_object = d3.select(this);

				if (event.ctrlKey && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
                    // Add link
                    self.links.push({source: source_node, target: target_node});
					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);

					self.updateLayout();
					updateMenu(self.graph);
                    
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
					v.insertBefore(element, v.firstChild);
					
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n);

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
				}
			})



*/












	// CIRCLE
	node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? 5 : 0; 
		})
		.attr("id", function(d) { return 'circle' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

	// SQUARE
	node.append("rect")
		.attr("x", -5).attr("y", -5)
		.attr("width", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("id", function(d) { return 'rect' + d.id; })
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.attr("stroke", "#000")
		.attr("stroke-width", 1)
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	
		
	// TEXT
	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d, i) { return d.name; })
		.on("dblclick", function(d) { 
			event.stopPropagation();
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


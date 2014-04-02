
/**
 * Create an custom layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
CustomLayout = function(canvas, graph, nodes, links) {
	this.canvas = canvas;
	this.graph = graph;
	
	// Layout structure
	if (nodes === undefined) {
		this.nodes = [];
		this.links = [];
	} else {
		this.nodes = nodes;
		this.links = links;
	}
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;
	
	var self = this;
	
	canvas.on('dblclick', doubleclick)
			.on("mousedown", mousedown)
			.on("mousemove", mousemove)
			.on("mouseup", mouseup);
	
/*console.log('Creating VIS');
	vis = container
        .append("svg:g")
			.attr("id", "vis")
			.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")")
//			.on("mousedown", mousedown)
//			.on("mousemove", mousemove)
//			.on("mouseup", mouseup)
*/			
	
	var computeTransitionPath = function(d) {
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 7 : 2,
        targetPadding = d.right ? 7 : 2,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;		
	};	
	
	// Line displayed when dragging new nodes
	var drag_line = vis.append("line")
//	var drag_line = canvas.append("line")
//	var drag_line = container.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	function mousedown() {
//console.log('canvas.mousedown');	
//            if (event.ctrlKey) {
//console.log('CTRL mousedown');
//console.log('mousedown');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
//		if (source_node!=null) linking = true;
console.log('source_node: ' + source_node);	
console.log('linking: ' + linking);	
		if (source_node!=null || linking) {
//console.log('mousedown');
console.log('CTRL mousedown');
                coord.x = d3.mouse(this)[0] - WIDTH / 2;
                coord.y = d3.mouse(this)[1] - HEIGHT / 2;
                linking = true;
                drag_line.attr("class", "drag_line");
//console.dir(coord);
            }
//		}
	}

	function mousemove() {
//console.log('canvas.mousemove');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
		if (linking) {
console.log('Linking and mousemove');	
		// Update drag line
//			pz = getPanAndZoom();
			drag_line
				.attr("class", "drag_line")
				.attr("x1", coord.x)
				.attr("y1", coord.y)
//				.attr("x2", parseInt(d3.mouse(this)[0] - WIDTH / 2))
//				.attr("y2",  parseInt(d3.mouse(this)[1] - HEIGHT / 2));
				.attr("x2", parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale))
				.attr("y2", parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale));
        }
	}

	function mouseup() {
//console.log('canvas.mouseup');	
//console.log('linking: ' + linking);	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	

//		if (!linking) return;
		// Hide drag line
		drag_line.attr("class", "drag_line_hidden");
		linking = false;
		source_node = null;
		target_node = null;
	}	

	function doubleclick() {
//console.log('2');
//console.log('canvas.doubleclick');	
//console.log('doingAction: ' + doingAction);
//		if (!doingAction) {
			coord.x = parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale);
			coord.y = parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale);
//console.log('doubleclick: ' + coord.x + ', ' + coord.y);
			self.addNode(coord.x, coord.y);
//		}
//		doingAction = false;
	}	
	
	this.drag = d3.behavior.drag()
		.on("dragstart", function(d) {
console.log('dragstart');	
			if (d3.event.ctrlKey) return;
			if (PAN_AND_ZOOM) {
				d3.event.sourceEvent.stopPropagation();
				d3.select(this).classed("dragging", true);
			}
		})
		.on("drag", function(d, i) {
//console.log('drag');	
//console.log('event.ctrlKey: ' + event.ctrlKey);	
            if (event.ctrlKey) return;
			if (PAN_AND_ZOOM) {	
//console.log('onDrag:');
//console.dir(d);
				d.x += d3.event.dx
				d.y += d3.event.dy
//				d3.select(this).select("circle").style("fill", "yellow");
				d3.select(this).select("circle").style("stroke-width", "3");
				d3.select(this).attr("transform", function(d){
//console.log('translate:');
//console.dir(d);
					return "translate(" + [ d.x, d.y ] + ")";
				})
//console.log('selectAll:');
//console.dir(d3.selectAll('path.link'));
				d3.selectAll('path.link')
//					.style('fill', 'blue')
					.attr('d', computeTransitionPath);
			}
		})
		.on("dragend", function(d) {
//console.log('dragend');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
            if (event.ctrlKey) return;
			if (PAN_AND_ZOOM) {
				d3.select(this).classed("dragging", false);
//				d3.select(this).select("circle").style("fill", "white");
				d3.select(this).select("circle").style("stroke-width", "1.5");
			}
		});		

	this.updateLayout();
	
/*	this.addNode(-10, -10); // 1
	this.addNode(-100, -100); // 2
	this.addNode(-50, -100); // 3
	this.addNode(-50, -50); // 4
	this.addLink(1, 2);
	this.addLink(1, 3);
	this.addLink(1, 4);*/
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
CustomLayout.prototype.updateLayout = function() {
//console.log('** CustomLayout.prototype.updateLayout **');
	var vis = d3.select("#vis");
	var self = this;
	//var graph = this.graph;
	
	// http://stackoverflow.com/questions/16070150/d3-substituting-d3-svg-diagonal-with-d3-svg-line
    var line = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    function lineData(d){
        var points = [
            {x: d.source.x, y: d.source.y},
            {x: d.target.x, y: d.target.y}
        ]
        return line(points);
    }    

//console.log('VIS: ');
//console.dir(vis);
	
//console.log('Links: ');
//console.dir(this.links);
    var link = vis.selectAll(".link")
        .data(this.links)
        .enter().append("path")
            .attr("class", "link")
            .attr("d", lineData);
//console.log('- link: ' + link);	
//console.dir(link); 
	
//console.log('Nodes: ');
//console.dir(this.nodes);
	var node = vis.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
//				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag)
			.on("mousedown", function(d) {
console.log('node.mousedown');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
				source_node = d;
				source_object = d3.select(this);

//                linking = true;
                if (event.ctrlKey) {
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
console.log('Linking...');	
                    coord.x = d.x;
                    coord.y = d.y;
//                    coord.x = d3.mouse(this)[0] - WIDTH / 2;
//                    coord.y = d3.mouse(this)[1] - HEIGHT / 2;
//                    drag_line.attr("class", "drag_line");
                }
//console.dir(source_node);		
			})
//			.on("mousemove", mousemove)
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
console.log('node.mouseup');	
console.dir(d);	
console.dir(d.firstChild);	
//				d.firstChild.style("stroke-width", "3");
                //drag_line.attr("class", "drag_line_hidden");
				target_node = d;
				target_object = d3.select(this);
//console.log('target_node: ' + target_node);	
//console.dir(target_node); 
				if (event.ctrlKey && (source_node != target_node)) {
//				if (!PAN_AND_ZOOM && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
//console.dir(self); 
                    // Add link
                    self.links.push({source: source_node, target: target_node});
					//self.createLinks();
//console.log('createLinks called');	
//console.dir(self.links);
					self.updateLayout();
					updateMenu(self.graph);
                    
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
//console.dir(element);
					v.insertBefore(element, v.firstChild);

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");	
				}
			})

//console.log('node: ' + node);	
//console.dir(node); 
	node.append("circle")
		.attr("r", 5)
//		.attr("r", 4.5)

	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("dblclick", function(d) { 
			event.stopPropagation();
//console.log('1');
//			doingAction = true;
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
//			return;
//console.log('actionDone: ' + actionDone);
		});	
}

/**
 * Gets the node with a specific id.
 * @param {number} id The id of the node.
 * @return {Object} The node or null.
 */
CustomLayout.prototype.getNode = function(id) {
    var i;
    for (i=0; i<this.nodes.length; i++) { 
        if (this.nodes[i].id==id)
        return this.nodes[i];
    } 
    return null;   
}

/**
 * Adds a node to the corresponding layout.
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 */
CustomLayout.prototype.addNode = function(x, y) {
	var newId = this.graph.getNewNodeId();
	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + x + ', y: ' + y + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Adds a link to the corresponding layout.
 * @param {number} a The source node.
 * @param {number} b The target node.
 */
CustomLayout.prototype.addLink = function(a, b) {
	var source_node = this.getNode(a);
	var target_node = this.getNode(b);

	// Add an edge (GraphDrawing structure)
	this.graph.listEdges.push([a, b]);
	// Add a link (Layout structure)
	this.links.push({source: source_node, target: target_node});

	this.updateLayout();
	updateMenu(this.graph);
}

/**
 * Loads into the [nodes, links] structure a Radial Tree layout.
 */
CustomLayout.prototype.layoutRadialTree = function() {
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	this.nodes = radialTree.nodes;
	this.links = radialTree.links;
};

/**
 * Loads into the [nodes, links] structure a Horizontal Tree layout.
 */
CustomLayout.prototype.layoutHorizontalTree = function() {
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	this.nodes = horizontalTree.nodes;
	this.links = horizontalTree.links;
};

/**
 * Loads into the [nodes, links] structure a Horizontal Tree layout.
 */
CustomLayout.prototype.layoutVerticalTree = function() {
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	this.nodes = verticalTree.nodes;
	this.links = verticalTree.links;
};

/*CustomLayout.prototype.transformToCartesianCoordinates = function(obj, x, y) {
	var i, r = obj.y, t = obj.x;
	obj.x = cartesianX(r, t);
	obj.y = cartesianY(r, t);
console.log('r: ' + r + ', t: ' + t + ' -> x: ' + obj.x + ', y: ' + obj.y);		
	for (i=0; i<this.links.length;i++) {
		if (this.links[i].source.id == obj.id) {
			this.links[i].source.x = obj.x;
			this.links[i].source.y = obj.y;
		}
		else if (this.links[i].target.id == obj.id) {
			this.links[i].target.x = obj.x;
			this.links[i].target.y = obj.y;
		}
	}
		if (obj.hasOwnProperty('children')) {
		for (i=0; i<obj.children.length;i++) {
			this.transformToCartesianCoordinates(obj.children[i], obj.x, obj.y);
		}
	}
}*/



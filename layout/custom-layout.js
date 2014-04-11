
/**
 * Create an custom layout
 * @constructor
 * @this {CustomLayout}
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
CustomLayout = function(canvas, graph, nodes, links, type) {
	this.canvas = canvas;
	this.graph = graph;
	
	// Layout structure
	if (nodes === undefined) {
		this.nodes = [];
		this.links = [];
		this.type = 'None';
	} else {
		this.nodes = nodes;
		this.links = links;
		this.type = type;
	}
console.log('Type: ' + this.type);	
	
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
	drag_line = vis.append("line")
//	var drag_line = canvas.append("line")
//	var drag_line = container.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	function mousedown() {
//console.log('source_node: ' + source_node);	
//console.log('linking: ' + linking);	
		if (source_node!=null || linking) {
            coord.x = d3.mouse(this)[0] - WIDTH / 2;
            coord.y = d3.mouse(this)[1] - HEIGHT / 2;
            linking = true;
            drag_line.attr("class", "drag_line");
        }
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
//console.log('dragstart');	
			if (d3.event.ctrlKey) return;
//			if (PAN_AND_ZOOM) {
				d3.event.sourceEvent.stopPropagation();
				d3.select(this).classed("dragging", true);
//			}
		})
		.on("drag", function(d, i) {
//console.log('drag');	
//console.log('event.ctrlKey: ' + event.ctrlKey);	
            if (event.ctrlKey) return;
//			if (PAN_AND_ZOOM) {	
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
//			}
		})
		.on("dragend", function(d) {
//console.log('dragend');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
            if (event.ctrlKey) return;
//			if (PAN_AND_ZOOM) {
				d3.select(this).classed("dragging", false);
//				d3.select(this).select("circle").style("fill", "white");
				d3.select(this).select("circle").style("stroke-width", "1.5");
//			}
		});		

	this.updateLayout();
	
/*	this.addNode(-10, -10); // 1
	this.addNode(-100, -100); // 2
	this.addNode(-50, -100); // 3
	this.addNode(-50, -50); // 4
	this.addLink(this.getNode(1), this.getNode(2));
	this.addLink(this.getNode(1), this.getNode(3));*/
	
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
CustomLayout.prototype.updateLayout = function(source) {
//console.log('** CustomLayout.prototype.updateLayout **');
	var i, n;
	var vis = d3.select("#vis");
	var self = this;
	//var graph = this.graph;

	vis.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
	
/*    var root = null;
    var tree = d3.layout.tree().size([HEIGHT, WIDTH]);
    
    // Used when collapsing
    if (source !== undefined) {
        root = this.graph.getTreeD3JSON;
        root.x0 = HEIGHT / 2;
        root.y0 = 0;
        this.nodes = tree.nodes(root).reverse();
        this.links = tree.links(this.nodes);
    }*/
    
    //var duration = d3.event && d3.event.altKey ? 5000 : 500;
	
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

	// Apply properties to the nodes (shape, color)
	for (i=0; i<this.nodes.length; i++) {
		n = this.graph.getNode(this.nodes[i].id);
//console.log('this.node[i].id: ' + this.nodes[i].id + ', n:');		
//console.dir(n);
        if (n == null) break;
		if (n.length > 2) this.nodes[i].shape = n[2];
		if (n.length > 3) this.nodes[i].color = n[3];
	}
	
	
//console.log('VIS: ');
//console.dir(vis);
	
//console.log('Links: ');
//console.dir(this.links);
    var link = vis.selectAll(".link")
        .data(this.links)
        .enter().append("path")
            .attr("class", "link")
			.attr("id", function(d) { 
//				console.dir(d); 
				return d; 
			})
	if (this.type != 'Force directed') 
		link.attr("d", lineData);
		
//console.log('- link: ' + link);	
//console.dir(link); 
	
//console.log('Nodes: ');
//console.dir(this.nodes);
	var node = vis.selectAll(".node")
		.data(this.nodes)
//    var nodeEnter = node
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
//				console.dir(d); 
//				return d;
				return d.id; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
//			.call(this.drag)
			.on("mousedown", function(d) {
console.log('node.mousedown');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
				source_node = d;
				source_object = d3.select(this);

//                linking = true;
                if (event.ctrlKey) {
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
console.log('Linking...');	
                    coord.x = d.x;
                    coord.y = d.y;
//                    coord.x = d3.mouse(this)[0] - WIDTH / 2;
//                    coord.y = d3.mouse(this)[1] - HEIGHT / 2;
//                    drag_line.attr("class", "drag_line");
                }
				else if (event.shiftKey) {
//console.log('Colapse. Is a tree? ' + isTree);	
//console.dir(d);	
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
                    self.updateLayout(d);
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
//console.log('node.mouseup');	
//console.dir(d);	
//console.dir(d.firstChild);	
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
//                    self.links.unshift({source: source_node, target: target_node});
                    self.links.push({source: source_node, target: target_node});
console_listLinks(self.links);					
					
//console.log('addLink.source_node: ' + source_node);	
//console.dir(source_node);
					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);
//console.dir(source_node);

//console.log('createLinks called');	
//console.dir(self.links);
					self.updateLayout();
					updateMenu(self.graph);
                    
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
					v.insertBefore(element, v.firstChild);
					
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n);
console.log('Lets put the last link node in the first place');	
console_listLinks(self.links);					

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
				}
			})

	node.call(this.drag);
	
	updateGenericLayout(this, node, link);
	
/*	// CIRCLE
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
		.text(function(d) { return d.name; })
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
		});*/
	
		
}

/**
 * Gets the node with a specific id.
 * @param {int} id The id of the node.
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
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
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
 * Adds a link to the corresponding layout. NOT WORKING!
 * @param {int} source_node The source node.
 * @param {int} target_node The target node.
 */
CustomLayout.prototype.addLink = function(source_node, target_node) {
//	var source_node = this.getNode(a);
//	var target_node = this.getNode(b);

	// Add an edge (to the GraphDrawing structure)
	this.graph.listEdges.push([source_node.id, target_node.id]);
	// Add a link (to the Layout structure)
	this.links.push({source: source_node, target: target_node});
console_listLinks(this.links);					
	// Add child
	if (!source_node.children) source_node.children = [];
	source_node.children.push(target_node);

	this.updateLayout();
	updateMenu(this.graph);
	
	// Let's put the link (path) in the first place, if not it overwrites the node
	var v = document.getElementById('vis');
	var element = v.lastChild;
	v.insertBefore(element, v.firstChild);
					
	// Let's put the last link node in the first place
	var n = this.links.pop();
	this.links.unshift(n);
console_listLinks(this.links);					

	// Unselect nodes
	source_object.select("circle").style("stroke-width", "1.5");	
	target_object.select("circle").style("stroke-width", "1.5");	
}

/**
 * Loads into the [nodes, links] structure a Force-directed graph.
 */
/*CustomLayout.prototype.layoutForceDirected = function() {
	var forceDirected = new ForceDirectedLayout(canvas, this.graph);
	this.nodes = forceDirected.nodes;
	this.links = forceDirected.links;
	this.type = 'Force directed';
};*/

/**
 * Loads into the [nodes, links] structure a Radial Tree layout.
 */
/*CustomLayout.prototype.layoutRadialTree = function() {
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	this.nodes = radialTree.nodes;
	this.links = radialTree.links;
	this.type = 'Radial tree';
};*/

/**
 * Loads into the [nodes, links] structure a Horizontal Tree layout.
 */
/*CustomLayout.prototype.layoutHorizontalTree = function() {
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	this.nodes = horizontalTree.nodes;
	this.links = horizontalTree.links;
	this.type = 'Horizontal tree';
};*/

/**
 * Loads into the [nodes, links] structure a Vertical Tree layout.
 */
/*CustomLayout.prototype.layoutVerticalTree = function() {
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	this.nodes = verticalTree.nodes;
	this.links = verticalTree.links;
	this.type = 'Vertical tree';
};*/

/**
 * Toggle a node between collapsed and uncollapsed.
 * @param {Object} d The node to toggle.
 */
CustomLayout.prototype.toggle = function(d) {

	// Leaves are not allowed to collapse
	if (!d.children) return;

	function toggle(node, v) {
//console.log(' - Toggle ' + node.id);	
//console.dir(node);
		if (node.children) {
			var i;
			
			for (i = 0; i<node.children.length; i++) {
				if (node.children[i].collapsed == undefined) node.children[i].collapsed = false;
				if (!node.children[i].collapsed)
					toggle(node.children[i], v)
				else
					node.children[i].visible = v;
			}			
		}
		node.visible = v;
	}
	
//console.log('d.collapsed=' + d.collapsed);	
	if (d.collapsed == undefined) d.collapsed = false;
	d.collapsed = !d.collapsed;
	toggle(d, !d.collapsed);
	d.visible = true;
	
	this.updateCollapsedLayout();	
}

/**
 * Updates the layout when collapsing/uncollapsing.
 */
CustomLayout.prototype.updateCollapsedLayout = function(d) {
console.log('Update the layout (collapse)	');	
	// Update the layout (collapse)	
	var vis = d3.select("#vis");
	var node = vis.selectAll("g");
	var c = vis.selectAll("circle")
	c.attr("r", function(d) {
		return (d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 1e-6; 
	})
	
	var t = vis.selectAll("text")
		t.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		});
	
//console_listLinks(this.links);	
	
	var l = vis.selectAll("path");
//console.log('link:');	
//console.dir(l);	
	l.style("stroke-width", function(d) { 
		var hideLink;
		if (d.source.visible == undefined) d.source.visible = true;
		if (d.target.visible == undefined) d.target.visible = true;
//console.dir(d);	
//console.log('d.source.id:' + d.source.id + ', d.target.id:' + d.target.id);	
//console.log('d.source.visible:' + d.source.visible);	
//console.log('d.target.visible:' + d.target.visible);	
		hideLink = (!d.source.visible || !d.target.visible);
//console.log('hideLink:' + hideLink);	
		return hideLink ? 1e-6 : 1.5; 
	});
	
	menuUncollapseAll.setEnabled(this.isCollapsed());
}

/**
 * Toggle a node and its sons.
 * @param {Object} d The node to toggle.
 */
/*CustomLayout.prototype.toggleAll = function(d) {
	if (d.children) {
		d.children.forEach(toggleAll);
		toggle(d);
	}
}*/

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
CustomLayout.prototype.isCollapsed = function() {
//console.dir(this);
	var i;
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].collapsed != undefined && this.nodes[i].collapsed)
			return true;
	}
	return false;
}

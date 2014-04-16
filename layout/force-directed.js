
/**
 * Create a Force Directed layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
ForceDirectedLayout = function(canvas, graph, nodes, links, type) {
	this.canvas = canvas;
	this.graph = graph;
	this.type = FORCE_DIRECTED;

	this.nodes = [];
	this.links = [];
	
	container.attr('transform', 'translate(0,0)scale(1)');
/*source_node = null, source_object = null;
target_node = null, target_object = null;
linking = false;
coord = {x: 0, y: 0};
pz = {translate: {x: 0, y: 0}, scale: 1}; // Pan & Zoom
drag_line = null;*/

	for (i=0; i<graph.listNodes.length; i++) { 
		node = {
			id: graph.listNodes[i][0],
			name: graph.listNodes[i][1],
			x: 0,
			y: 0,
			shape: graph.listNodes[i][2],
			color: graph.listNodes[i][3]
		};
		this.nodes.push(node);
	}

	for (i=0; i<graph.listEdges.length; i++) { 
		s = graph.listEdges[i][0];
		d = graph.listEdges[i][1];
		this.links.push({
			source : this.getNode(s),
			target : this.getNode(d),
			weight : 1
		});
	}	

    var self = this;
    
	canvas.on('dblclick', doubleclick)
			.on("mousedown", mousedown)
			.on("mousemove", mousemove)
			.on("mouseup", mouseup);	
	
	// Add keyboard callback
	d3.select(window)
		.on("keydown", keydown);
	
	vis.attr('transform', 'translate(0,0)scale(1)');

	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
//console.log('drag_line');		
	
	function mousedown() {
		if (source_node!=null || linking) {
            coord.x = d3.mouse(this)[0];
            coord.y = d3.mouse(this)[1];
            linking = true;
            drag_line.attr("class", "drag_line");
        }
	}

	function mousemove() {
		if (linking) {
console.log('canvas.mousemove, coord.x: ' + coord.x + ', coord.y: ' + coord.y + ', mousex: ' + d3.mouse(this)[0] + ', mousey: ' + d3.mouse(this)[1] + ', pz: ' + JSON.stringify(pz));	
console.log('x2: ' + (d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale + ', y2: ' + (d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);	
			// Update drag line
			drag_line
				.attr("class", "drag_line")
				.attr("x1", coord.x)
				.attr("y1", coord.y)
				.attr("x2", (d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale)
				.attr("y2", (d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);
        }
	}

	function mouseup() {
		// Hide drag line
		drag_line.attr("class", "drag_line_hidden");
		linking = false;
		source_node = null;
		target_node = null;
	}	

	function doubleclick() {
		coord.x = parseInt(d3.mouse(this)[0] / pz.scale) ;
		coord.y = parseInt(d3.mouse(this)[1] / pz.scale) ;
//		coord.x = parseInt((d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale);
//		coord.y = parseInt((d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);
		self.addNode(coord.x, coord.y);
	}	
	
	function keydown() {
		if (selected_node == null) return;
		switch (d3.event.keyCode) {
			case 8: // Backspace
			case 46: // Delete
				var answer = confirm('You are going to delete the node and its links. \nAre you sure?');
				if (answer == true) {
					self.deleteNode(selected_node.id);
				}
				break;
		}
	}	
    
	this.createForce();
/*	this.force = d3.layout.force().size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links)
		.gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
			return x.weight * 10
		});
	this.force.start();	*/
	this.link = vis.selectAll("line.link");
	this.node = vis.selectAll("g.node");
	
	this.updateLayout();
}

ForceDirectedLayout.prototype.createForce = function() {
	this.force = d3.layout.force().size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links)
		.gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
			return x.weight * 10
		});
	//this.force.start();	
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
ForceDirectedLayout.prototype.updateLayout = function() {
	clearCanvas();
	var vis = d3.select("#vis");
	var self = this;
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;

	// Line displayed when dragging new nodes
	drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	this.drag = d3.behavior.drag()
		.on("dragstart", dragstart)
		.on("drag", dragmove)
		.on("dragend", dragend);

	function dragstart(d, i) {
		d3.event.sourceEvent.stopPropagation();
		self.force.stop() // Stops the force auto positioning before you start dragging
	}

	function dragmove(d, i) {
//console.dir(event);	
console.dir(d3.event);	
		if (event.ctrlKey) return; // BUG: d3.event.ctrlKey DOES NOT WORK!
		d.px += d3.event.dx;
		d.py += d3.event.dy;
		d.x += d3.event.dx;
		d.y += d3.event.dy; 
		d3.select(this).select("circle").style("stroke-width", "3");
		d3.select(this).select("rect").style("stroke-width", "3");
		tick(); 
	}

	function dragend(d, i) {
		if (d3.event.ctrlKey) return;
		//d3.select(this).select("circle").style("stroke-width", "1.5");
		//d3.select(this).select("rect").style("stroke-width", "1.5");
		tick();
		self.force.resume();
	}	
	
	this.link = vis.selectAll("line.link")
		.data(this.links)
//	this.link = this.link
//		.data(this.force.links())
		.enter().append("svg:line").attr("class", "link").style("stroke", "#CCC")
		.style("stroke-width", function(d) { 
			var hideLink;
			if (d.source.visible == undefined) d.source.visible = true;
			if (d.target.visible == undefined) d.target.visible = true;
			hideLink = (!d.source.visible || !d.target.visible);
			return hideLink ? 1e-6 : 1.5; 
		})
		.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
		
	this.node = vis.selectAll("g.node")
		.data(this.nodes)
//	this.node = this.node
//		.data(this.force.nodes())
		.enter().append("svg:g")
			.attr("class", "node")
			.attr("id", function(d) { return d.id; })
			.call(this.drag)
			.on("mousedown", function(d) {
console.log('1. node.mousedown. d3.event.ctrlKey: ' + d3.event.ctrlKey);	
console.log('2. coord.x: ' + coord.x + ', coord.y: ' + coord.y + ', mousex: ' + d3.mouse(this)[0] + ', mousey: ' + d3.mouse(this)[1] + ', pz: ' + JSON.stringify(pz));	
//console.log('x2: ' + (d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale + ', y2: ' + (d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);	

				source_node = d;
				source_object = d3.select(this);

                if (d3.event.ctrlKey) {
					layout.selectNode(d, d3.select(this));
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
					d3.select(this).select("rect").style("stroke-width", "3");	
                    coord.x = d.x;
                    coord.y = d.y;
console.log('3. d.x: ' + d.x + ', d.y: ' + d.y);	
//		coord.x = d3.mouse(this)[0] / pz.scale;
//		coord.y = d3.mouse(this)[1] / pz.scale;
console.log('4. coord.x: ' + coord.x + ', coord.y: ' + coord.y);                    
                }
				else if (d3.event.shiftKey) {
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
//                    self.updateLayout(d);
				}
				else {
					layout.selectNode(d, d3.select(this));
				}
			})
			.on("mouseover", function(d) {
				if (linking) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "3");
					target_object.select("rect").style("stroke-width", "3");
				}
			})
			.on("mouseout", function(d) {
				if (linking && d!=source_node) {
					target_object = d3.select(this);
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");
				}
			})
			.on("mouseup", function(d) {	
				target_node = d;
				target_object = d3.select(this);

				if (d3.event.ctrlKey && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
                    // Add link
console.log('source_node:');                  
console.dir(source_node);  
console.log('target_node:');                  
console.dir(target_node);  
console.log('target_object:');                  
console.dir(target_object);  

/*					var target_coord = {
						x: (d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale,
						y: (d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale
					};
console.log('x: ' + target_coord.x + ', y: ' + target_coord.y);                  
					
					target_node.x = target_coord.x;
					target_node.px = target_coord.x;
					target_node.y = target_coord.y;
					target_node.py = target_coord.y;*/

                    self.links.push({source: source_node, target: target_node, weight: 1});
console_listLinks(self.links);					
console.dir(self.links);  
console.log('self.force.links():');					
console.dir(self.force.links());  


					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);

                    self.updateLayout();
					
					// Let's put the link (path) in the first place, if not it overwrites the node
					var v = document.getElementById('vis');
					var element = v.lastChild;
					v.insertBefore(element, v.firstChild);
					
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n); 
console.log('self.links:');
console_listLinks(self.links);					
console.dir(self.links);  

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					source_object.select("rect").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");

                    //tick();
                    //self.force.resume();
					updateMenu(self.graph);
					tick();
					//self.force.resume();
					//self.force.start();
					//clearCanvas();
					//self.createForce();
//                    self.updateLayout();
					//self.force.start();
//					layout.layoutForceDirected(canvas)
				}
			})
//		.exit().remove();	
			
			
	//updateGenericLayout(this, this.node, this.link);
	
	// CIRCLE
	this.node.append("circle")
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? ((d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 0) : 0; 
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
	this.node.append("rect")
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
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	
		
	// TEXT
	this.node.append("text")
		.attr("dy", ".31em")
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d, i) { return d.name; })
		.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		})
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
		
//	node.call(this.drag);

	link = this.link;
	node = this.node;
    this.force.on("tick", tick);

    function tick() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });
		node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    };	
	
/*	var updateLink = function() {
		this
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

	}

	var updateNode = function() {
		this.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	}

	force.on("tick", tick);*/
	//this.createForce();
	
//	this.force
//		.nodes(this.nodes)
//		.links(this.links);
	this.force.start();
}

/**
 * Gets the node with a specific id.
 * @param {int} id The id of the node.
 * @return {Object} The node or null.
 */
ForceDirectedLayout.prototype.getNode = function(id) {
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
ForceDirectedLayout.prototype.addNode = function(coordX, coordY) {
console.log('x: ' + coordX + ', y:' + coordY);
console.dir(this.nodes);
	var newId = this.graph.getNewNodeId();
	var n = {id: newId, name: 'Node ' + newId, x: coordX, y: coordY, weight: 1};
//	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + x + ', y: ' + y + ', size: 1, depth: 1}';
//	eval(obj);
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Deletes a node from the graph drawing
 * @param {int} id The identification of the node.
 */
ForceDirectedLayout.prototype.deleteNode = function(id) {
	var i;

	this.graph.deleteNode(id);

	for (i=this.links.length-1; i>=0; i--) {
		if (this.links[i].source.id == id) {
			this.links.splice(i, 1);
		} 
		else if (this.links[i].target.id == id) {
			this.links.splice(i, 1);
		} 
	}
	
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].id == id) {
			this.nodes.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.updateLayout();
	updateMenu(this.graph);
}

/**
 * Given a force directed layout structure, put children to their nodes (like tree layouts).
 */
ForceDirectedLayout.prototype.putChildren = function() {
	//var root = this.graph.getRoot();
	var i, j, id;
	var lc = [];
	
	for (i = 0; i<this.nodes.length; i++) {
		id = this.nodes[i].id;
		lc = this.graph.getDirectedAdjacents(id);
//console.log('getAdjacents(' + id + '): ' + lc);		
		for (j = 0; j<lc.length; j++) {
			if (!this.nodes[i].children) this.nodes[i].children = [];
			this.nodes[i].children[j] = this.getNode(lc[j]);
		}
	}
	
//	for (i = 0; i<this.links.length; i++) {
		
//	}
}

/**
 * Toggle a node between collapsed and uncollapsed.
 * @param {Object} d The node to toggle.
 */
ForceDirectedLayout.prototype.toggle = function(d) {
	this.putChildren();
console.dir(d);
	// Leaves are not allowed to collapse
	if (!d.children) return;

	function toggle(node, v) {
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
	
	if (d.collapsed == undefined) d.collapsed = false;
	d.collapsed = !d.collapsed;
	toggle(d, !d.collapsed);
	d.visible = true;
	
	this.updateCollapsedLayout();	
}

/**
 * Updates the layout when collapsing/uncollapsing.
 */
ForceDirectedLayout.prototype.updateCollapsedLayout = function(d) {
/*console.log('Update the layout (collapse). Nodes:');	
console.dir(this.nodes);
	// Update the layout (collapse)	
	var vis = d3.select("#vis");
	var node = vis.selectAll("g");
	var c = vis.selectAll("circle")
console.dir(c);
	c.style("r", function(d) {
console.dir(d);
//		return 10;
		return (d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 1e-6; 
	})
	var t = vis.selectAll("text")
		t.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		});
	var l = vis.selectAll("path");
	l.style("stroke-width", function(d) { 
		var hideLink;
		if (d.source.visible == undefined) d.source.visible = true;
		if (d.target.visible == undefined) d.target.visible = true;
		hideLink = (!d.source.visible || !d.target.visible);
		return hideLink ? 1e-6 : 1.5; 
	});*/
	this.updateLayout(d);
	menuUncollapseAll.setEnabled(this.isCollapsed());
}

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
ForceDirectedLayout.prototype.isCollapsed = function() {
	var i;
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].collapsed != undefined && this.nodes[i].collapsed)
			return true;
	}
	return false;
}

ForceDirectedLayout.prototype.updateNodes = function() {
  node = node.data(force.nodes(), function(d) { return d.id; });
  node.enter().append("circle").attr("class", function(d) { return "node " + d.id; }).attr("r", 8);
  node.exit().remove();

  force.start();
}

/**
 * Selects or unselects a node.
 * @param {Object} node The node.
 * @param {Object} object The object that represents the node on the canvas.
 */
/*ForceDirectedLayout.prototype.selectNode = function(node, object) {
	var sameNode = (node == selected_node);

	// Unselect old node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
	}
	selected_object = null;
	selected_node = null;

	if (!sameNode) {
		// Select new node
		selected_node = node;
		selected_object = object;
		selected_object.select("circle").style("stroke-width", "3");	
		selected_object.select("rect").style("stroke-width", "3");	
	}
}*/

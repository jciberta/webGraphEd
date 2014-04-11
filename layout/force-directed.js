
/**
 * Create a Radial Tree based on the Reingold Tilford Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
ForceDirectedLayout = function(canvas, graph) {
	this.nodes = [];
	var labelAnchors = [];
	var labelAnchorLinks = [];
	this.links = [];
	var s, d, node;

	for (i=0; i<graph.listNodes.length; i++) { 
		node = {
			id : graph.listNodes[i][0],
			label : graph.listNodes[i][1],
			x: 0,
			y: 0
		};
		this.nodes.push(node);
		labelAnchors.push({
			node : node
		});
		labelAnchors.push({
			node : node
		});
		// Labels of nodes
		labelAnchorLinks.push({
			source : i * 2,
			target : i * 2 + 1,
			weight : 1
		});
	}

	for (i=0; i<graph.listEdges.length; i++) { 
		s = graph.listEdges[i][0];
		d = graph.listEdges[i][1];
//console.log('s: ' + s);
//console.log('d: ' + d);
		this.links.push({
			source : this.getNode(s),
			target : this.getNode(d),
			weight : 1
		});
	}
    
console.log('Force-directed:');	
console.dir(this.nodes);	
console.dir(this.links);

	this.force = d3.layout.force()
		.charge(-120)
		.linkDistance(30)
		.size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links);

	this.force.on("tick", function() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

		node.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; });
		});

	var link = svg.selectAll(".link")
		  .data(this.links)
		.enter().append("line")
		  .attr("class", "link")
			.attr("id", function(d) { 
				return d; 
			})
		  .style("stroke-width", 1.5);
		  
    /*var link = vis.selectAll(".link")
        .data(this.links)
        .enter().append("line")
            .attr("class", "link")
			.attr("id", function(d) { 
				return d; 
			})
		  .style("stroke-width", 1);*/

/*	var node = svg.selectAll(".node")
		.data(this.nodes)
		.enter().append("circle")
		  .attr("class", "node")
		  .attr("r", 5)
		  .style("fill", 'yellow')
		  .call(this.force.drag);*/

	var node = svg.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				return d; 
			})
	
	node.append("circle")
		.attr("r", 5)
		.style("stroke-width", "1.5")
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		  
/*		  
	var node = svg.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.force.drag)
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
		  
	node.append("circle")
		.attr("r", 5)
		.style("stroke-width", "1.5")
		.style("fill", function(d) {
			return d.color==undefined ? "White" : d.color;
		})
		.on("dblclick", function(d) { 
			event.stopPropagation();
			if (event.ctrlKey || event.altKey || event.shiftKey) return;
			chooseNodeProperties(d);
		});	

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
		});			
		  
		  
//	node.append("title")
//      .text(function(d) { return d.name; });*/

	this.force.start();
	
console.log('this.type: ' + this.type + ', this.force:');		
console.dir(this.force);

}

/**
 * Gets the node with a specific id.
 * @param {number} id The id of the node.
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
 * Create a Force Directed layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
ForceDirectedLayout2 = function(canvas, graph, nodes, links, type) {
	this.canvas = canvas;
	this.graph = graph;
	this.type = FORCE_DIRECTED;

//console.log('graph:');			
//console.dir(layout.graph);			

	this.nodes = [];
	this.links = [];

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
	
	vis.attr('transform', 'translate(0,0)scale(1)');

	// Line displayed when dragging new nodes
	var drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
console.log('drag_line');		
	
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
		// Update drag line
		drag_line
			.attr("class", "drag_line")
			.attr("x1", coord.x)
			.attr("y1", coord.y)
			.attr("x2", parseInt((d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale))
			.attr("y2", parseInt((d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale));
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

ForceDirectedLayout2.prototype.createForce = function() {
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
ForceDirectedLayout2.prototype.updateLayout = function() {
	clearCanvas();
	var vis = d3.select("#vis");
	var self = this;
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;

	this.drag = d3.behavior.drag()
		.on("dragstart", dragstart)
		.on("drag", dragmove)
		.on("dragend", dragend);

	function dragstart(d, i) {
		d3.event.sourceEvent.stopPropagation();
		self.force.stop() // Stops the force auto positioning before you start dragging
	}

	function dragmove(d, i) {
		if (event.ctrlKey) return;
		d.px += d3.event.dx;
		d.py += d3.event.dy;
		d.x += d3.event.dx;
		d.y += d3.event.dy; 
		d3.select(this).select("circle").style("stroke-width", "3");
		tick(); 
	}

	function dragend(d, i) {
		if (event.ctrlKey) return;
		d3.select(this).select("circle").style("stroke-width", "1.5");
		tick();
		self.force.resume();
	}	
	
	this.link = vis.selectAll("line.link")
		.data(this.links)
//	this.link = this.link
//		.data(this.force.links())
		.enter().append("svg:line").attr("class", "link").style("stroke", "#CCC")
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
console.log('node.mousedown');	
console.log('event.ctrlKey: ' + event.ctrlKey);	
				source_node = d;
				source_object = d3.select(this);

                if (event.ctrlKey) {
					// Link nodes is not allowed when there are some collapsed nodes
//					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
                    coord.x = d.x;
                    coord.y = d.y;
console.log('coord.x: ' + coord.x + ', coord.y: ' + coord.y);                    
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
					target_object.select("circle").style("stroke-width", "1.5");

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
			
			
	updateGenericLayout(this.node, this.link);
	
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
		.text(function(d, i) { return d.label; })
		.on("dblclick", function(d) { 
			event.stopPropagation();
			var answer = prompt("Please enter the new name", d.label); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text in "nodes" structure
				d.name = answer;
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				self.graph.changeLabel(d.id, answer);
			}
		});*/
		
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
	
	this.force.start();
}

/**
 * Gets the node with a specific id.
 * @param {number} id The id of the node.
 * @return {Object} The node or null.
 */
ForceDirectedLayout2.prototype.getNode = function(id) {
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
ForceDirectedLayout2.prototype.addNode = function(coordX, coordY) {
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
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
ForceDirectedLayout2.prototype.isCollapsed = function() {
/*	var i;
	for (i=0; i<this.nodes.length; i++) {
		if (this.nodes[i].collapsed != undefined && this.nodes[i].collapsed)
			return true;
	}*/
	return false;
}

ForceDirectedLayout2.prototype.updateNodes = function() {
  node = node.data(force.nodes(), function(d) { return d.id; });
  node.enter().append("circle").attr("class", function(d) { return "node " + d.id; }).attr("r", 8);
  node.exit().remove();

  force.start();
}


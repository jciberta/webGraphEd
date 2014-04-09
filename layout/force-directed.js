
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

	this.updateLayout();
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
ForceDirectedLayout2.prototype.updateLayout = function() {
	var vis = d3.select("#vis");
	var self = this;
	
	var newId = 1;
    linking = false;
	coord = {x: 0, y: 0}
	source_node = null;
	target_node = null;
	
/*	canvas.on('dblclick', doubleclick)
			.on("mousedown", mousedown)
			.on("mousemove", mousemove)
			.on("mouseup", mouseup);	*/
	
	vis.attr('transform', 'translate(0,0)scale(1)');

	// Line displayed when dragging new nodes
	var drag_line = vis.append("line")
		.attr("class", "drag_line_hidden")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", 0);	
	
	function mousedown() {
		if (source_node!=null || linking) {
            coord.x = d3.mouse(this)[0] - WIDTH / 2;
            coord.y = d3.mouse(this)[1] - HEIGHT / 2;
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
			.attr("x2", parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale))
			.attr("y2", parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale));
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
		coord.x = parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale);
		coord.y = parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale);
		self.addNode(coord.x, coord.y);
	}	
	
	
	
	
	
	function tick() {
		node.call(updateNode);
		link.call(updateLink);
	}

	var force = d3.layout.force().size([WIDTH, HEIGHT])
		.nodes(this.nodes)
		.links(this.links)
		.gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
			return x.weight * 10
		});
	force.start();	

	var node_drag = d3.behavior.drag()
		.on("dragstart", dragstart)
		.on("drag", dragmove)
		.on("dragend", dragend);

	function dragstart(d, i) {
		d3.event.sourceEvent.stopPropagation();
		force.stop() // stops the force auto positioning before you start dragging
	}

	function dragmove(d, i) {
		d.px += d3.event.dx;
		d.py += d3.event.dy;
		d.x += d3.event.dx;
		d.y += d3.event.dy; 
		tick(); // this is the key to make it work together with updating both px,py,x,y on d !
	}

	function dragend(d, i) {
		//d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
		tick();
		force.resume();
	}	
	
	
/*	this.drag = d3.behavior.drag()
//	this.drag = force.drag()
		.on("dragstart", function(d) {
			if (d3.event.ctrlKey) {
				force.stop();
			}
			else {
				d3.event.sourceEvent.stopPropagation();
				d3.select(this).classed("dragging", true);
			}
		})
		.on("drag", function(d, i) {
			if (event.ctrlKey) return;
			d.px += d3.event.dx;
			d.py += d3.event.dy;
			d.x += d3.event.dx;
			d.y += d3.event.dy; 
			d3.select(this).select("circle").style("stroke-width", "3");
			d3.select(this).attr("transform", function(d){
				return "translate(" + [ d.x, d.y ] + ")";
			})
			tick(); 
		
            
//				d.x += d3.event.dx
//				d.y += d3.event.dy
//				d3.selectAll('path.link')
//					.attr('d', computeTransitionPath);
		})
		.on("dragend", function(d) {
			tick();
			force.resume();		
            if (event.ctrlKey) return;
				d3.select(this).classed("dragging", false);
				d3.select(this).select("circle").style("stroke-width", "1.5");
		});	*/

	var link = vis.selectAll("line.link")
		.data(this.links)
		.enter().append("svg:line").attr("class", "link").style("stroke", "#CCC")
		.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

	var node = vis.selectAll("g.node")
		.data(force.nodes())
		.enter().append("svg:g")
			.attr("class", "node")
			.attr("id", function(d) { return d.id; })
//			.call(node_drag)
//			.call(this.drag)
/*			.on("mousedown", function(d) {
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
			})*/
			
			
			
	updateGenericLayout(node, link);
	
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
		
	node.call(node_drag);
		
    force.on("tick", tick);

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

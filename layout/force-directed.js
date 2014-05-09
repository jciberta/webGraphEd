
/**
 * @fileoverview Class ForceDirectedLayout.
 * @author Josep Ciberta 
 */

/**
 * Create a Force Directed layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
ForceDirectedLayout = function(canvas2, graph, nodes, links, type) {
	this.className = 'ForceDirectedLayout';
	
//console.log('ForceDirectedLayout.create');	
	this.canvas = canvas2;
	this.graph = graph;
	this.type = FORCE_DIRECTED;

	resetVariables();
	
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
			source: this.getNode(s),
			target: this.getNode(d),
			width: graph.listEdges[i][3],
			color: graph.listEdges[i][4],
			weight: 1
		});
	}	

    var self = this;
    
	// WARNING: When we assign on_mousemove to mousemove, we are registering multiple listeners for the same event type
	// https://github.com/mbostock/d3/wiki/Selections#on
	destroyCanvas();
	createCanvas();
	container.attr('transform', 'translate(0,0)scale(1)');
	
	canvas.on('dblclick', doubleclick)
		.on("mousedown", mousedown)
		.on("mousemove", mousemove)
		.on("mouseup", mouseup);				
	
	// Add keyboard callback
	d3.select(window)
		.on("keydown", keydown);

	this.computeTransitionPath = function(d) {
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = 0,
        targetPadding = d.width==4 ? 16 : 10,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return {x1: sourceX, y1: sourceY, x2: targetX, y2: targetY};		
	};	
	
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
			var x2 = d3.mouse(this)[0] / pz.scale - pz.translate.x / pz.scale;
			var y2 = d3.mouse(this)[1] / pz.scale - pz.translate.y / pz.scale;
			// Update drag line
			drag_line
				.attr("class", "drag_line")
				.attr("x1", coord.x)
				.attr("y1", coord.y)
				.attr("x2", x2)
				.attr("y2", y2);
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
console.log('FD.doubleclick');	
		coord.x = parseInt(d3.mouse(this)[0] / pz.scale) ;
		coord.y = parseInt(d3.mouse(this)[1] / pz.scale) ;
//		coord.x = parseInt((d3.mouse(this)[0] / pz.scale) - pz.translate.x / pz.scale);
//		coord.y = parseInt((d3.mouse(this)[1] / pz.scale) - pz.translate.y / pz.scale);
		self.addNode(coord.x, coord.y);
	}	
	
	function keydown() {
		if (selected_node == null && selected_link == null) return;
		// Delete nodes is not allowed when there are some collapsed nodes
		if (self.isCollapsed()) return;

		switch (d3.event.keyCode) {
			case 8: // Backspace
			case 46: // Delete
				var text = selected_link == null ? 'You are going to delete the node and its links. \nAre you sure?' : 'You are going to delete the link. \nAre you sure?';
				var answer = confirm(text);
				if (answer == true) {
					if (selected_link == null)
						self.deleteNode(selected_node.id);
					else 
//						self.deleteLink(selected_link.source.id, selected_link.target.id);
						layout.deleteLink(selected_link.source.id, selected_link.target.id);
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
		.gravity(1).linkDistance(50)
		.charge(-3000)
		.linkStrength(function(x) {
			return x.weight * 10
		})
		.on('end', function() {
			// Message when the force is balanced 
			// (the "end" event is dispatched when the simulations internal alpha cooling parameter reaches zero)
			// https://github.com/mbostock/d3/wiki/Force-Layout#on
			statusBarMessage = 'Force directed layout stopped in ' + (Date.now()-timerStart)/1000 + ' s.';
			updateStatusBar();
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
		var e = d3.event.sourceEvent;
		if (e.ctrlKey) return;
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
		tick();
		self.force.resume();
	}	
	
	this.link = vis.selectAll("line.link")
		.data(this.links)
//	this.link = this.link
//		.data(this.force.links())
		.enter().append("svg:line")
			.attr("class", "link")
			.attr("id", function(d) { return 'path' + d.source.id + '_' + d.target.id; })
			.style("stroke", function(d) { return d.color == undefined ? DEFAULT_COLOR_LINK : d.color; })
			.style("stroke-width", function(d) { 
				var hideLink;
				if (d.source.visible == undefined) d.source.visible = true;
				if (d.target.visible == undefined) d.target.visible = true;
				hideLink = (!d.source.visible || !d.target.visible);
				return hideLink ? 0 : (d.width == undefined ? 2 : d.width); 
			})
			//.style('marker-end', 'url(#end-arrow)')
			.style('cursor', 'pointer')
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; })
			.on("mousedown", function(d) {
				layout.selectLink(d, d3.select(this));
			})
			.on("dblclick", function(d) { 
				d3.event.stopPropagation();
				chooseLinkProperties(d);
			});	
    if (!isIE) this.link.style('marker-end', 'url(#end-arrow)');            
		
	this.node = vis.selectAll("g.node")
		.data(this.nodes)
//	this.node = this.node
//		.data(this.force.nodes())
		.enter().append("svg:g")
			.attr("class", "node")
			.attr("id", function(d) { return d.id; })
			.call(this.drag)
			.on("mousedown", function(d) {
//console.log('1. node.mousedown. d3.event.ctrlKey: ' + d3.event.ctrlKey);	
//console.log('2. coord.x: ' + coord.x + ', coord.y: ' + coord.y + ', mousex: ' + d3.mouse(this)[0] + ', mousey: ' + d3.mouse(this)[1] + ', pz: ' + JSON.stringify(pz));	
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
//console.log('3. d.x: ' + d.x + ', d.y: ' + d.y);	
//		coord.x = d3.mouse(this)[0] / pz.scale;
//		coord.y = d3.mouse(this)[1] / pz.scale;
//console.log('4. coord.x: ' + coord.x + ', coord.y: ' + coord.y);                    
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
                    self.links.push({source: source_node, target: target_node, weight: 1});
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
//console.log('self.links:');
//console_listLinks(self.links);					
//console.dir(self.links);  

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					source_object.select("rect").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");

					updateMenu(self.graph);
					tick();
				}
			})
			
	updateGenericLayout(this, this.node, this.link);
//	layout.updateElements(this, this.node, this.link);

	link = this.link;
	node = this.node;
    this.force.on("tick", tick);

    function tick() {
		link.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { 
//				return d.target.x; 
				return self.computeTransitionPath(d).x2; 
			})
			.attr("y2", function(d) { 
//				return d.target.y; 
				return self.computeTransitionPath(d).y2; 
			})
//			.style('marker-end', 'url(#end-arrow)');
        if (!isIE) link.style('marker-end', 'url(#end-arrow)');

		node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    };	
	
	this.tick = tick;
	
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
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Deletes a node from the layout
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

/**
 * Changes the width of a link.
 * @param {Object} d The link.
 */
ForceDirectedLayout.prototype.changeLinkWidth = function(d) {
	d3.select("#path" + d.source.id + '_' + d.target.id)		
		.style("stroke-width", function(d) { return d.width == undefined ? 2 : d.width; })
//		.attr('d', this.computeTransitionPath)
	this.tick();
}

/*ForceDirectedLayout.prototype.updateNodes = function() {
  node = node.data(force.nodes(), function(d) { return d.id; });
  node.enter().append("circle").attr("class", function(d) { return "node " + d.id; }).attr("r", 8);
  node.exit().remove();

  force.start();
}*/

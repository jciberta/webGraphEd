
/**
 * @fileoverview Class CustomLayout.
 * @author Josep Ciberta 
 */

/**
 * Create an custom layout
 * @constructor
 * @this {CustomLayout}
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
CustomLayout = function(canvas, graph, nodes, links, type) {
	this.className = 'CustomLayout';

//console.log('**layout');
//console.dir(layout);
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
//console.log('Type: ' + this.type);	
	
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
			
	// Add keyboard callback
	d3.select(window)
		.on("keydown", keydown);
	
	//var computeTransitionPath = function(d) {
	this.computeTransitionPath = function(d) {
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
//        sourcePadding = d.left ? 7 : 2,
//        targetPadding = d.right ? 7 : 2,
        sourcePadding = 0,
        targetPadding = d.width==4 ? 16 : 10,
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
		if (linking) {
			var x2 = d3.mouse(this)[0] / pz.scale - WIDTH / 2 - pz.translate.x / pz.scale;
			var y2 = d3.mouse(this)[1] / pz.scale - HEIGHT / 2 - pz.translate.y / pz.scale;
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
console.log('CL.canvas.doubleclick');	
			coord.x = parseInt((d3.mouse(this)[0] / pz.scale - WIDTH / 2) - pz.translate.x / pz.scale);
			coord.y = parseInt((d3.mouse(this)[1] / pz.scale - HEIGHT / 2) - pz.translate.y / pz.scale);
//console.log('doubleclick: ' + coord.x + ', ' + coord.y);
			self.addNode(coord.x, coord.y);
	}	
	
	function keydown() {
		if (selected_node == null && selected_link == null) return;
		if (self.isCollapsed()) return; // Delete nodes is not allowed when there are some collapsed nodes

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

	this.drag = d3.behavior.drag()
		.on("dragstart", function(d) {
//console.log('dragstart');	
			if (d3.event.ctrlKey) return;
			
			// Stop propagation on the source event to prevent multiple actions
			// https://github.com/mbostock/d3/wiki/Drag-Behavior#on
			d3.event.sourceEvent.stopPropagation();
			d3.select(this).classed("dragging", true);
		})
		.on("drag", function(d, i) {
			var e = d3.event.sourceEvent;
//console.log('drag');	
//console.log('event.ctrlKey: ' + event.ctrlKey);	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
//console.log('e.ctrlKey: ' + e.ctrlKey);
			// BUG: d3.event.ctrlKey DOES NOT WORK! When event.ctrlKe is true or false, d3.event.ctrlKey undefined.
			// But d3.event.sourceEvent WORKS!
            if (e.ctrlKey) return; 
//console.log('onDrag:');
//console.dir(d);
				d.x += d3.event.dx
				d.y += d3.event.dy
				d3.select(this).select("circle").style("stroke-width", "3");
				d3.select(this).select("rect").style("stroke-width", "3");
				d3.select(this).attr("transform", function(d){
//console.log('translate:');
//console.dir(d);
					return "translate(" + [ d.x, d.y ] + ")";
				})
//console.log('selectAll:');
//console.dir(d3.selectAll('path.link'));
				d3.selectAll('path.link')
//					.style('fill', 'blue')
					.attr('d', self.computeTransitionPath);
		})
		.on("dragend", function(d) {
//console.log('dragend');	
			var e = d3.event.sourceEvent;
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
            if (e.ctrlKey) return;
			d3.select(this).classed("dragging", false);
			//d3.select(this).select("circle").style("stroke-width", "1.5");
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
	var i, l, n;
	var vis = d3.select("#vis");
	var self = this;

	vis.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
	
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
        if (n == null) break;
		if (n.length > 2) this.nodes[i].shape = n[2];
		if (n.length > 3) this.nodes[i].color = n[3];
	}

	// Apply properties to the link (shape, color)
	for (i=0; i<this.links.length; i++) {
		l = this.graph.getLink(this.links[i].source.id, this.links[i].target.id);
        if (l == null) break;
		if (l.length > 3) this.links[i].width = l[3];
		if (l.length > 4) this.links[i].color = l[4];
	}
	
	
//console.log('VIS: ');
//console.dir(vis);
	
//console.log('Links: ');
//console.dir(this.links);
    var link = vis.selectAll(".link")
        .data(this.links)
//        .enter().append("path")
        .enter().insert("path")
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
//			.style('marker-end', 'url(#end-arrow)')
			.style('cursor', 'pointer')
//			.attr("d", lineData)
			.attr('d', self.computeTransitionPath)
			.on("mousedown", function(d) {
				layout.selectLink(d, d3.select(this));
			})
			.on("dblclick", function(d) { 
				d3.event.stopPropagation();
				chooseLinkProperties(d);
			});	
    if (!isIE) link.style('marker-end', 'url(#end-arrow)');            
	
	//if (this.type != 'Force directed') 
	//	link.attr("d", lineData);
		
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
				return d.id; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
//			.call(this.drag)
			.on("mousedown", function(d) {
//console.log('node.mousedown');	
//console.log('d3.event.ctrlKey: ' + d3.event.ctrlKey);	
				source_node = d;
				source_object = d3.select(this);

//                linking = true;
                if (d3.event.ctrlKey) {
					layout.selectNode(d, d3.select(this));
					// Link nodes is not allowed when there are some collapsed nodes
					if (self.isCollapsed()) return;
                    linking = true;
					d3.select(this).select("circle").style("stroke-width", "3");	
					d3.select(this).select("rect").style("stroke-width", "3");	
//console.log('Linking...');	
                    coord.x = d.x;
                    coord.y = d.y;
//                    coord.x = d3.mouse(this)[0] - WIDTH / 2;
//                    coord.y = d3.mouse(this)[1] - HEIGHT / 2;
//                    drag_line.attr("class", "drag_line");
                }
				else if (d3.event.shiftKey) {
//console.log('Colapse. Is a tree? ' + isTree);	
//console.dir(d);	
					// Collapse only allowed in trees
					if (!isTree) return;
                    self.toggle(d);
                    self.updateLayout(d);
				}
				else {
					layout.selectNode(d, d3.select(this));
				}
//console.dir(source_node);		
			})
//			.on("mousemove", mousemove)
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
//console.log('node.mouseup');	
//console.dir(d);	
//console.dir(d.firstChild);	
//				d.firstChild.style("stroke-width", "3");
                //drag_line.attr("class", "drag_line_hidden");
				target_node = d;
				target_object = d3.select(this);
//console.log('target_node: ' + target_node);	
//console.dir(target_node); 
				if (d3.event.ctrlKey && (source_node != target_node)) {
					// Add an edge
					self.graph.listEdges.push([source_node.id, target_node.id]);
//console.dir(self); 
                    // Add link
//                    self.links.unshift({source: source_node, target: target_node});
                    self.links.push({source: source_node, target: target_node});
//console_listLinks(self.links);					
					
					// Add child
					if (!source_node.children) source_node.children = [];
					source_node.children.push(target_node);

					self.updateLayout();
					updateMenu(self.graph);
                    
					// Let's put the link (path) in the first place, if not it overwrites the node
					// That is, the line is over the circle.
					// Do not use innerHTML because it is not supported by IE nor Safari properly.
					var v = document.getElementById('vis');
					var element = v.lastChild;
					if (element.localName == 'path')
						v.insertBefore(element, v.firstChild);
/*					while ((element.childElementCount > 0) && (element.firstChild.localName.substring(0, 4) == 'line')) {
						v.insertBefore(element, v.firstChild);
						element = v.lastChild;
					}					
*/
					// Let's put the last link node in the first place
					var n = self.links.pop();
					self.links.unshift(n);

					// Unselect nodes
					source_object.select("circle").style("stroke-width", "1.5");	
					source_object.select("rect").style("stroke-width", "1.5");	
					target_object.select("circle").style("stroke-width", "1.5");
					target_object.select("rect").style("stroke-width", "1.5");
				}
			})

	node.call(this.drag);
	
	updateGenericLayout(this, node, link);
//console.dir(layout);
//	layout.updateElements(this, node, link);
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
CustomLayout.prototype.addNode = function(coordX, coordY) {
	var newId = this.graph.getNewNodeId();
	var n = {id: newId, name: 'Node ' + newId, x: coordX, y: coordY, weight: 1};
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
	updateMenu(this.graph);
}

/**
 * Deletes a node from the graph drawing
 * @param {int} id The identification of the node.
 */
CustomLayout.prototype.deleteNode = function(id) {
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
//console_listLinks(this.links);					
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
//console_listLinks(this.links);					

	// Unselect nodes
	source_object.select("circle").style("stroke-width", "1.5");	
	source_object.select("rect").style("stroke-width", "1.5");	
	target_object.select("circle").style("stroke-width", "1.5");	
	target_object.select("rect").style("stroke-width", "1.5");	
}

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
//console.log('Update the layout (collapse)');	
	// Update the layout (collapse)	
	var vis = d3.select("#vis");
//console.dir(vis);	

	var c = vis.selectAll("circle");
	c.attr("r", function(d) {
		return (d.visible || d.visible==undefined) ? (d.collapsed ? 8 : 5) : 1e-6; 
	})

//console.log('selectAll("rect")');	
	var r = vis.selectAll("rect")
	r.attr("x", function(d) { return (d.collapsed ? -8 : -5); });
	r.attr("y", function(d) { return (d.collapsed ? -8 : -5); });
	r.attr("width", function(d) { 
		if (d.shape == 'Square')
			return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
		else
			return 0;
	});
	r.attr("height", function(d) { 
		if (d.shape == 'Square')
			return (d.visible || d.visible==undefined) ? (d.collapsed ? 16 : 10) : 0
		else
			return 0;
	});
	
//console.log('selectAll("text")');	
	var t = vis.selectAll("text")
		t.style("fill-opacity", function(d) {
			return (d.visible || d.visible==undefined) ? 1 : 1e-6; 
		});
	
//console.log('selectAll("path")');	
	var l = vis.selectAll("path");
	l.style("stroke-width", function(d) { 
		var hideLink;
		if (d.source.visible == undefined) d.source.visible = true;
		if (d.target.visible == undefined) d.target.visible = true;
		hideLink = (!d.source.visible || !d.target.visible);
		return hideLink ? 0 : (d.width == undefined ? 2 : d.width); 
	});
	
//console.log('menuUncollapseAll');	
	menuUncollapseAll.setEnabled(this.isCollapsed());
}

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
CustomLayout.prototype.isCollapsed = function() {
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
CustomLayout.prototype.changeLinkWidth = function(d) {
	d3.select("#path" + d.source.id + '_' + d.target.id)		
		.style("stroke-width", function(d) { return d.width == undefined ? 2 : d.width; })
		.attr('d', this.computeTransitionPath)
}

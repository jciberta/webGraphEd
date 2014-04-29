
/**
 * Create a Layout
 * @constructor
 * @this {Layout}
 */
Layout = function() {
	this.className = 'Layout';

	this.graph = new GraphDrawing();
	this.file = "";
	this.fileName = "";
	this.type = 'None';
	this.layout = new CustomLayout(canvas, this.graph);
}

/**
 * Clears the layout.
 */
Layout.prototype.clear = function() {
	delete this.graph;
	this.graph = new GraphDrawing();
	this.type = 'None';
	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph);
};

/**
 * Updates the layout.
 */
Layout.prototype.update = function() {
	var nodes = this.layout.nodes;
	var links = this.layout.links;
//console.dir(nodes);	
//console.dir(links);
    clearCanvas();	
	if (this.type == 'Force directed')
		this.layout = new ForceDirectedLayout(canvas, this.graph, nodes, links)
	else
		this.layout = new CustomLayout(canvas, this.graph, nodes, links);
//	this.center();	
};

/**
 * Set the file.
 * @param {string} newFile The file.
 */
Layout.prototype.setFile = function(newFile) {
	this.file = newFile;
};

/**
 * Set the file name.
 * @param {string} newFile The name of the file.
 */
Layout.prototype.setFileName = function(newFileName) {
	this.fileName = newFileName;
};

/**
 * Import a GML file.
 * @param {string} newFile The GML file.
 */
Layout.prototype.importGML = function(newFile) {
	this.file = newFile;
	this.graph.importGML(this.file);
};

/**
 * Import a GraphML file.
 * @param {string} newFile The GML file.
 */
Layout.prototype.importGraphML = function(newFile) {
	this.file = newFile;
	this.graph.importGraphML(this.file);
};

/**
 * Export to GML file.
 */
Layout.prototype.exportGML = function() {
	this.graph.saveAsGML(this.fileName);
};

/**
 * Export to GraphML file.
 */
Layout.prototype.exportGraphML = function() {
	this.graph.saveAsGraphML(this.fileName);
};

/**
 * Depict an empty Directed layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {EmptyLayout} The new layout object.
 */
Layout.prototype.layoutCustom = function(canvas) {
	this.layout = new CustomLayout(canvas, this.graph);
};

/**
 * Depict a Force Directed layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {ForceDirectedLayout} The new layout object.
 */
Layout.prototype.layoutForceDirected = function(canvas) {
	this.type = FORCE_DIRECTED;
//		clearCanvas();

//console.log('this.layout.nodes:');
//console.dir(this.layout.nodes);		
	var nodes = this.layout.nodes;
//console.log('this.layout.links:');
//console.dir(this.layout.links);		
	var links = this.layout.links;
//	delete this.layout;
	this.layout = new ForceDirectedLayout(canvas, this.graph, nodes, links, this.type);
	updateEditMenu(this.type);

/*	// Calculate the new layout
	this.layout.layoutForceDirected();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, 'Force directed');
//	this.center();*/
};

/**
 * Depict a Horizontal Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutHorizontalTree = function(canvas) {
	this.type = HORIZONTAL_TREE;
	// Calculate the new layout
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	var nodes = horizontalTree.nodes;
	var links = horizontalTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Depict a Vertical Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutVerticalTree = function(canvas) {
	this.type = VERTICAL_TREE;
	// Calculate the new layout
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	var nodes = verticalTree.nodes;
	var links = verticalTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Depict a Radial Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutRadialTree = function(canvas) {
	this.type = RADIAL_TREE;
	// Calculate the new layout
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	var nodes = radialTree.nodes;
	var links = radialTree.links;
//	delete this.layout;
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
	updateEditMenu(this.type);
};

/**
 * Adds a node to the corresponding layout.
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
 */
Layout.prototype.addNode = function(x, y) {
//console.log('this.layout.addNode(x, y)');
	this.layout.addNode(x, y);
};

/**
 * Gets the margins of the layout.
 */
Layout.prototype.getLayoutMargins = function() {
	var xmin=0, ymin=0, xmax=0, ymax=0;
	var i, n, l;
	
	if (this.layout.nodes.length>0) {
		n = this.layout.nodes[0];
		xmin = n.x;
		xmax = n.x;
		ymin = n.y;
		ymax = n.y;
	}
	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
		if (n.x < xmin) xmin = n.x;
		if (n.x > xmax) xmax = n.x;
		if (n.y < ymin) ymin = n.y;
		if (n.y > ymax) ymax = n.y;
	}
	return {xMin: xmin, xMax: xmax, yMin: ymin, yMax: ymax};
}

/**
 * Sets the origin to 0,0.
 */
Layout.prototype.setOrigin = function() {
	var pz = getPanAndZoom();
	var coord = [-WIDTH/2*(pz.scale-1), -HEIGHT/2*(pz.scale-1)];
	zoom.translate(coord);
	zoom.scale(pz.scale);
//console.log('setOrigin.scale: ' + pz.scale);	
	container.attr('transform', 'translate(' + coord + ')scale(' + pz.scale + ')');
	updateStatusBar();
}

/**
 * Sets the origin to 0,0 and scale to 1.
*/
Layout.prototype.setOriginWithNoZoom = function() {
	zoom.translate([0, 0]);
	zoom.scale(1);
	container.attr('transform', 'translate(0,0)scale(1)');
	updateStatusBar();
}

/**
 * Centers the layout.
 */
Layout.prototype.center = function() {
	this.setOrigin();
//console.log('** Layout.prototype.center **');	
	var box = this.getLayoutMargins();
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);
	var deltaX = (box.xMax - box.xMin) / 2 + box.xMin; // - (WIDTH / 2);
	var deltaY = (box.yMax - box.yMin) / 2 + box.yMin; //- (HEIGHT / 2); 
//console.log('deltaX=' + deltaX + ', deltaY=' + deltaY);	

	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
//console.log('n.x=' + n.x + ', n.y=' + n.y);	
		n.x = n.x - deltaX;
		n.y = n.y - deltaY; 
//console.log('this.layout.nodes[i]:');	
//console.dir(this.layout.nodes[i]);	
	}

	var nodes = this.layout.nodes;
	var links = this.layout.links;
	clearCanvas();
//console.dir(nodes);	
//console.dir(links);
/*	if (d3.event) {
		d3.event.translate[0] = 0;
		d3.event.translate[1] = 0;
	}*/
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
}

/**
 * Fits the layout.
 */
Layout.prototype.fit = function() {
	var k = 4; // k times the margin for fitting
	var box = this.getLayoutMargins();
//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
	
	var deltaX = box.xMax - box.xMin - (k*margin.left + k*margin.right);
	var deltaY = box.yMax - box.yMin - (k*margin.top + k*margin.bottom); 
	
	var factorX = WIDTH / deltaX;
	var factorY = HEIGHT / deltaY;
	
	for (i=0; i<this.layout.nodes.length; i++) {
		n = this.layout.nodes[i];
		n.x = (n.x - box.xMin) * factorX - WIDTH/2 + k*margin.left;
		n.y = (n.y - box.yMin) * factorY - HEIGHT/2 + k*margin.top;
	}
	
	
//console.dir(this.layout.nodes);	
//console.dir(this.layout.links);	
	
//	this.layout.updateLayout();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
	clearCanvas();
//console.dir(nodes);	
//console.dir(links);	

//console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
//console_listNodes(this.layout.nodes);

	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
	this.setOriginWithNoZoom();
	this.center();
	
};

/**
 * Checks if there is any node collapsed.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
Layout.prototype.isCollapsed = function(d) {
	return this.layout.isCollapsed();
}

/**
 * Uncollapse all nodes.
 * @return {Boolean} True if there is any node collapsed, otherwise, false.
 */
Layout.prototype.uncollapseAll = function(d) {
	var i;
	for (i=0; i<this.layout.nodes.length; i++) { 
		this.layout.nodes[i].collapsed = false;
		this.layout.nodes[i].visible = true;
	}
	this.layout.updateCollapsedLayout();
}

/**
 * Changes the color of a node.
 * @param {Object} d The node.
 */
Layout.prototype.changeNodeColor = function(d) {
	d3.select("#circle" + d.id)
		.style('fill', d.color);
	d3.select("#rect" + d.id)
		.style('fill', d.color);
}

/**
 * Changes the shape of a node.
 * @param {Object} d The node.
 */
Layout.prototype.changeNodeShape = function(d) {
	d3.select("#circle" + d.id)		
		.attr("r", function(d) { 
			if (d.shape == undefined) d.shape = 'Circle';
			return d.shape == 'Circle' ? (d.collapsed ? 8 : 5) : 0; 
		})
	d3.select("#rect" + d.id)
		.attr("width", function(d) { return d.shape == 'Square' ? (d.collapsed ? 16 : 10) : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? (d.collapsed ? 16 : 10) : 0; })
}

/**
 * Changes the color of a link.
 * @param {Object} d The link.
 */
Layout.prototype.changeLinkColor = function(d) {
	d3.select("#path" + d.source.id + '_' + d.target.id)
		.style('stroke', d.color);
}

/**
 * Changes the width of a link.
 * @param {Object} d The link.
 */
Layout.prototype.changeLinkWidth = function(d) {
	this.layout.changeLinkWidth(d);
//	d3.select("#path" + d.source.id + '_' + d.target.id)		
//		.style("stroke-width", function(d) { return d.width == undefined ? 2 : d.width; })
}

/**
 * Unselects a node or link.
 */
Layout.prototype.unselectElement = function() {
	// Unselect old link/node
	if (selected_object != null) {
		selected_object.select("circle").style("stroke-width", "1.5");	
		selected_object.select("rect").style("stroke-width", "1.5");	
		selected_object.style('stroke-dasharray', 'none');	
	}
	selected_object = null;
	selected_node = null;
	selected_link = null;
	menuElementProperties.setEnabled(false);
}

/**
 * Selects or unselects a node.
 * @param {Object} node The node.
 * @param {Object} object The object that represents the node on the canvas.
 */
Layout.prototype.selectNode = function(node, object) {
	var sameNode = (node == selected_node);

	this.unselectElement();
	if (!sameNode) {
		// Select new node
		selected_node = node;
		selected_object = object;
		selected_object.select("circle").style("stroke-width", "3");	
		selected_object.select("rect").style("stroke-width", "3");
		menuElementProperties.setEnabled(true);
	}
}

/**
 * Selects or unselects a link.
 * @param {Object} node The link.
 * @param {Object} object The object that represents the link on the canvas.
 */
Layout.prototype.selectLink = function(link, object) {
	var sameLink = (link == selected_link);

	this.unselectElement();
	if (!sameLink) {
		// Select new link
		selected_link = link;
		selected_object = object;
		selected_object.style("stroke-dasharray", "10, 2");	
		menuElementProperties.setEnabled(true);
	}
}

/**
 * Update elements on the layout.
 * @param {Object} self The layout itself.
 * @param {Object} node The node.
 * @param {Object} link The link.
 */
Layout.prototype.updateElements = function(self, node, link) {
	// Not in use
}

/**
 * Deletes a link from the layout
 * @param {int} source The source of the link.
 * @param {int} target The target of the link.
 */
Layout.prototype.deleteLink = function(source, target) {
	var i;

	this.graph.deleteLink(source, target);
	for (i=0; i<this.layout.links.length; i++) {
		if (this.layout.links[i].source.id == source && this.layout.links[i].target.id == target) {		
			this.layout.links.splice(i, 1);
			break;
		}
	}	

	clearCanvas();
	createDragLine();
	this.layout.updateLayout();
	updateMenu(this.graph);
}



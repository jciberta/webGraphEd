
/**
 * Create a Layout
 * @constructor
 * @this {Layout}
 */
Layout = function() {
	this.graph = new GraphDrawing();
	this.file = "";
	this.fileName = "";
	this.type = 'None';
	this.layout = new CustomLayout(canvas, this.graph);
//console_listNodes(this.layout.nodes);
}

/**
 * Clear the layout.
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
		this.layout = new ForceDirectedLayout2(canvas, this.graph, nodes, links)
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
	this.type = 'Force directed';
	var nodes = this.layout.nodes;
	var links = this.layout.links;
	this.type = FORCE_DIRECTED;
	this.layout = new ForceDirectedLayout(canvas, this.graph, nodes, links, this.type);

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
	// Calculate the new layout
	var horizontalTree = new HorizontalTreeLayout(canvas, this.graph);
	var nodes = horizontalTree.nodes;
	var links = horizontalTree.links;
	this.type = 'Horizontal tree';
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
};

/**
 * Depict a Vertical Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutVerticalTree = function(canvas) {
	// Calculate the new layout
	var verticalTree = new VerticalTreeLayout(canvas, this.graph);
	var nodes = verticalTree.nodes;
	var links = verticalTree.links;
	this.type = 'Vertical tree';
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
};

/**
 * Depict a Radial Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 */
Layout.prototype.layoutRadialTree = function(canvas) {
	// Calculate the new layout
	var radialTree = new RadialTreeLayout(canvas, this.graph);
	var nodes = radialTree.nodes;
	var links = radialTree.links;
	this.type = 'Radial tree';
	this.layout = new CustomLayout(canvas, this.graph, nodes, links, this.type);
	this.center();
};

/**
 * Adds a node to the corresponding layout.
 * @param {int} x The x coordinate.
 * @param {int} y The y coordinate.
 */
Layout.prototype.addNode = function(x, y) {
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
console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
console_listNodes(this.layout.nodes);
	var deltaX = (box.xMax - box.xMin) / 2 + box.xMin; // - (WIDTH / 2);
	var deltaY = (box.yMax - box.yMin) / 2 + box.yMin; //- (HEIGHT / 2); 
console.log('deltaX=' + deltaX + ', deltaY=' + deltaY);	

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
console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
console_listNodes(this.layout.nodes);
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
}

/**
 * Fits the layout.
 */
Layout.prototype.fit = function() {
	var k = 4; // k times the margin for fitting
	var box = this.getLayoutMargins();
console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
	
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

console.log('Box:' + JSON.stringify(this.getLayoutMargins()));	
console_listNodes(this.layout.nodes);

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
			return d.shape == 'Circle' ? 5 : 0; 
		})
	d3.select("#rect" + d.id)
		.attr("width", function(d) { return d.shape == 'Square' ? 10 : 0; })
		.attr("height", function(d) { return d.shape == 'Square' ? 10 : 0; })
}

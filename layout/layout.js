
/**
 * Create a Layout
 * @constructor
 */
Layout = function() {
	this.graph = new GraphDrawing();
	this.file = "";
	this.fileName = "";
	//this.layout = null;
	this.layout = new CustomLayout(canvas, this.graph);
console_listNodes(this.layout.nodes);
}

/**
 * Clear the layout.
 */
Layout.prototype.clear = function() {
	delete this.graph;
	this.graph = new GraphDrawing();
	delete this.layout;
	//this.layout = null;
	this.layout = new CustomLayout(canvas, this.graph);
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
	this.layout = new ForceDirectedLayout(canvas, this.graph);
};

/**
 * Depict a Horizontal Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {HorizontalTreeLayout} The new layout object.
 */
Layout.prototype.layoutHorizontalTree = function(canvas) {
//	this.layout = new HorizontalTreeLayout(canvas, this.graph);

	// Calculate the new layout
	this.layout.layoutHorizontalTree();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
//console.dir(nodes);	
//console.dir(links);	
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
	this.center();
};

/**
 * Depict a Vertical Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {VerticalTreeLayout} The new layout object.
 */
Layout.prototype.layoutVerticalTree = function(canvas) {
//	this.layout = new VerticalTreeLayout(canvas, this.graph);

	// Calculate the new layout
	this.layout.layoutVerticalTree();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
//console.dir(nodes);	
//console.dir(links);	
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
	this.center();
};

/**
 * Depict a Radial Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {RadialTreeLayout} The new layout object.
 */
Layout.prototype.layoutRadialTree = function(canvas) {
console.log('** Layout.prototype.layoutRadialTree **');		
//	this.layout = new RadialTreeLayout(canvas, this.graph);

	// Calculate the new layout
	this.layout.layoutRadialTree();
	var nodes = this.layout.nodes;
	var links = this.layout.links;
//console.dir(nodes);	
//console.dir(links);	
	this.layout = new CustomLayout(canvas, this.graph, nodes, links);
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
Layout.prototype.setOriginWithNoUnZoom = function() {
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
	this.setOriginWithNoUnZoom();
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

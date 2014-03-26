
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
	this.layout = new HorizontalTreeLayout(canvas, this.graph);
};

/**
 * Depict a Vertical Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {VerticalTreeLayout} The new layout object.
 */
Layout.prototype.layoutVerticalTree = function(canvas) {
	this.layout = new VerticalTreeLayout(canvas, this.graph);
};

/**
 * Depict a Radial Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {RadialTreeLayout} The new layout object.
 */
Layout.prototype.layoutRadialTree = function(canvas) {
	this.layout = new RadialTreeLayout(canvas, this.graph);
};

/**
 * Adds a node to the corresponding layout.
 */
Layout.prototype.addNode = function() {
console.log('addNode');		
	this.layout.addNode();
};


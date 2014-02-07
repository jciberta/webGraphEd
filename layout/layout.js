
/**
 * Create a Layout
 * @constructor
 */
Layout = function() {
  this.graph = new GraphDrawing();
  this.file = "";
  this.fileName = "";
  this.layout = null;
}

/**
 * Clear the layout.
 */
Layout.prototype.clear = function() {
  delete this.graph;
  this.graph = new GraphDrawing();
  delete this.layout;
  this.layout = null;
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
console.log('Layout.prototype.exportGraphML');
  this.graph.saveAsGraphML(this.fileName);
};

/**
 * Depict a Force Directed layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {ReingoldTilfordTreeLayout} The new layout object.
 */
Layout.prototype.layoutForceDirected = function(canvas) {
  this.layout = new ForceDirectedLayout(canvas, this.graph);
};

/**
 * Depict a Collapsible Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {CollapsibleTreeLayout} The new layout object.
 */
Layout.prototype.layoutCollapsibleTree = function(canvas) {
  this.layout = new CollapsibleTreeLayout(canvas, this.graph);
};

/**
 * Depict a Reingold Tilford Tree layout on a canvas.
 * @param {string} canvas Canvas where layout is depicted.
 * @return {ReingoldTilfordTreeLayout} The new layout object.
 */
Layout.prototype.layoutReingoldTilfordTree = function(canvas) {
  this.layout = new ReingoldTilfordTreeLayout(canvas, this.graph);
};



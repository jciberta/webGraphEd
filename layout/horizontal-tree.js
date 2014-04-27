
/**
 * Create a Horizontal Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
HorizontalTreeLayout = function(canvas, graph) {
	this.className = 'HorizontalTreeLayout';

    var jsonList = graph.getTreeD3JSON();

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;

	// Compute the new tree layout.
	this.nodes = tree.nodes(root).reverse();

	// Normalize for fixed-depth.
	this.nodes.forEach(function(d) { d.y = d.depth * 180; });

	// By default, D3 tree is vertical. Coordinates must be changed (x <-> y)
	var swap;
	for (i=0; i<this.nodes.length; i++) {
		n = this.nodes[i];
		swap = n.x;
		n.x = n.y;
		n.y = swap;
	}
	
	this.links = tree.links(this.nodes);
}


/**
 * Create a Radial Tree based on the Reingold Tilford Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
RadialTreeLayout = function(canvas, graph) {
	this.className = 'RadialTreeLayout';
	
//console.log('RadialTreeLayout');
    var jsonList = graph.getTreeD3JSON();
//console.log('jsonList: ' + JSON.stringify(jsonList));

    var diameter = HEIGHT;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { 
//console.log('a.depth: ' + a.depth);
//			return (a.parent == b.parent ? 1 : 2) / a.depth; 
			return (a.parent == b.parent ? 1 : 2) / (a.depth == 0 ? 1 : a.depth ); 
		});
	
    this.nodes = tree.nodes(jsonList);
    this.links = tree.links(this.nodes);
	
//console.log('nodes:');
//console.dir(this.nodes);
//console.log('links:');
//console.dir(this.links);

	// Transform polar coordinates to cartesian coordinates in the layout
	this.transformToCartesianCoordinates(this.nodes[0], 0, 0);

//console.log('nodes:');
//console.dir(this.nodes);
//console.log('links:');
//console.dir(this.links);
}

RadialTreeLayout.prototype.transformToCartesianCoordinates = function(obj, x, y) {
	var i, r = obj.y, t = obj.x;
	obj.x = cartesianX(r, t);
	obj.y = cartesianY(r, t);
//console.log('r: ' + r + ', t: ' + t + ' -> x: ' + obj.x + ', y: ' + obj.y);		
	for (i=0; i<this.links.length;i++) {
		if (this.links[i].source.id == obj.id) {
			this.links[i].source.x = obj.x;
			this.links[i].source.y = obj.y;
		}
		else if (this.links[i].target.id == obj.id) {
			this.links[i].target.x = obj.x;
			this.links[i].target.y = obj.y;
		}
	}
		if (obj.hasOwnProperty('children')) {
		for (i=0; i<obj.children.length;i++) {
			this.transformToCartesianCoordinates(obj.children[i], obj.x, obj.y);
		}
	}
}

/**
 * Adds a node to the corresponding layout. IT IS STILL USED?
 */
RadialTreeLayout.prototype.addNode = function() {
	var newId = this.graph.getNewNodeId();
//console.log('newId: ' + newId);		
	this.graph.addNode(newId, 'Node ' + newId);
	
	var graph = this.graph;

	var nodes = [];
	var obj = 'var n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
	eval(obj);
	nodes.push(n);
console.dir(nodes);		
	
    var node = this.viss.selectAll(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				console.log('id...'); 
				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);
			
	node.append("circle")
		.attr("r", 4.5)
//		.attr("cx", -WIDTH/4)
//		.attr("cy", -HEIGHT/4);

	node.append("text")
		.attr("dy", ".31em")
		.attr("transform", 'translate(' + [-WIDTH/4 + 8, -HEIGHT/4] + ')')
		.text('Node ' + newId)
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d3.select(this).text());
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(newId, answer);
			}
		});		
};

  


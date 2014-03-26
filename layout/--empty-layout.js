
/**
 * Create an custom layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
CustomLayout = function(canvas, graph) {
	this.canvas = canvas;
	this.graph = graph;
}

/**
 * Adds a node to the corresponding layout.
 */
CustomLayout.prototype.addNode = function() {
console.log('addNode');		
 
	var newId = this.graph.getNewNodeId();
console.log('newId: ' + newId);		
	
	var newNode = eval('{"id": "' + newId + '", "name": "New node"}');
console.log('newNode: ' + newNode);		

    var node = this.viss.selectAll(".node")
		.data(newNode)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d; })
			.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
			.call(drag);

/*	var node = this.viss
		.append("g")
			.attr("class", "node")
			.call(drag);*/
			

	node.append("circle")
		.attr("r", 4.5)
		.attr("cx", -WIDTH/4)
		.attr("cy", -HEIGHT/4)
		//.call(drag);

	node.append("text")
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
		.text(function(d) { return d.name; })
		.on("click", function(d) { 
console.log('d.parent: ' + d.parent);		
console.log('d.parent.id: ' + d.parent.id);		
console.log('d.parentNode: ' + d.parentNode);		
console.log('d.id: ' + d.id);		
			var answer = prompt("Please enter the new name", d.name);
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});		
		
		
		
/*	node.append("text")
		.attr("dy", ".31em")
		.attr("x", -WIDTH/4)
		.attr("y", -HEIGHT/4)
		.attr("transform", function(d) { return "translate(" + 8 + "," + 0 + ")"; })  
  
		.text("New node")
		.on("click", function(d) { 
console.log('d: ' + d);		
console.log('d: ' + d3.select(this));		
console.log('d: ' + d3.select(this).text);		
			var answer = prompt("Please enter the new name", d.name);
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});	*/
};

  


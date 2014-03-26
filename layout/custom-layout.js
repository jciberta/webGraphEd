
/**
 * Create an custom layout
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
CustomLayout = function(canvas, graph) {
	this.canvas = canvas;
	this.graph = graph;
	
	var newId = 1;
    var vis = container
        .append("svg:g")
		.attr("id", "vis")
        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");	
	
	var computeTransitionPath = function(d) {
		var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 7 : 2,
        targetPadding = d.right ? 7 : 2,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;		
	};	
	
//	var drag = d3.behavior.drag()
	this.drag = d3.behavior.drag()
		.on("dragstart", dragstarted)
		.on("drag", function(d, i) {
console.dir(d);
//console.log('d: ' + JSON.stringify(d));
			d.x += d3.event.dx
			d.y += d3.event.dy
			d3.select(this).select("circle").style("fill", "yellow");
			d3.select(this).attr("transform", function(d){
				return "translate(" + [ d.x, d.y ] + ")";
			})
			d3.selectAll('path.link')
				.attr( 'd', computeTransitionPath);
		})
		.on("dragend", function(d) {
			if (PAN_AND_ZOOM) {
				d3.select(this).classed("dragging", false);
				d3.select(this).select("circle").style("fill", "white");
			}
		});		
	
	this.nodes = [];
	var obj = 'var n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
	newId++;
	var obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4+10) + ', y: ' + (-HEIGHT/4+10) + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
//console.dir(nodes);			
	
    var node = vis.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);

	node.append("circle")
		.attr("r", 4.5)

	node.append("text")
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d.name);
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});	
	
	
	
	newId++;
	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4+30) + ', y: ' + (-HEIGHT/4+30) + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
	
	this.updateLayout();
/*	node = vis.selectAll(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);

	node.append("circle")
		.attr("r", 4.5)

	node.append("text")
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d.name);
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});	*/
	
}

/**
 * Updates the layout, drawing the whole graph drawing.
 */
CustomLayout.prototype.updateLayout = function() {
	var vis = d3.select("#vis");
	
	var node = vis.selectAll(".node")
		.data(this.nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				console.dir(d); 
				return d; 
			})
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(this.drag);

	node.append("circle")
		.attr("r", 4.5)

	node.append("text")
		.attr("dy", ".31em")
		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
		.attr("transform", function(d) { 
			return "translate(8)";	})
		.text(function(d) { return d.name; })
		.on("click", function(d) { 
			var answer = prompt("Please enter the new name", d.name); // d.name could be also d3.select(this).text()
			if (answer != null) {
				// Change text on layout
				d3.select(this).text(answer);				
				// Change text on graph drawing object
				graph.changeLabel(d.id, answer);
			}
		});	
}

/**
 * Adds a node to the corresponding layout.
 */
CustomLayout.prototype.addNode = function() {
	var newId = this.graph.getNewNodeId();
	obj = 'n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4+30) + ', y: ' + (-HEIGHT/4+30) + ', size: 1, depth: 1}';
	eval(obj);
	this.nodes.push(n);
	this.updateLayout();
	this.graph.addNode(newId, 'Node ' + newId);
}

/**
 * Adds a node to the corresponding layout.
 */
CustomLayout.prototype.addNode2 = function() {
//console.log('addNode');		
 
	var newId = this.graph.getNewNodeId();
//console.log('newId: ' + newId);		
	
//	var newNode = eval('{"id": "' + newId + '", "name": "New node"}');
//console.log('newNode: ' + newNode);		

	var nodes = []
	var obj = 'var n = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
	eval(obj);
	nodes.push(n);

/*	var vis = d3.select("#vis");
console.log('vis: ' + vis);		
console.dir(vis);		
    var node = vis.select(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d; })
			.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
			.call(this.drag);
console.log('node: ' + node);		*/

	var vis = d3.select("#vis");
    var node = vis.append("g")
			.attr("class", "node")
			.attr("id", function(d) { 
				var obj = 'var d = {id: "' + newId + '", name: "Node ' + newId + '", x: ' + (-WIDTH/4) + ', y: ' + (-HEIGHT/4) + ', size: 1, depth: 1}';
				eval(obj);
console.dir(d);		
				return d; 
			})
//			.attr("transform", function(d) { 
//				return "translate(" + [ (-WIDTH/4), (-HEIGHT/4) ] + ")"
//			})
			.call(this.drag);


/*	var node = this.viss
		.append("g")
			.attr("class", "node")
			.call(drag);*/
			

	node.append("circle")
		.attr("r", 4.5)
		.attr("cx", -WIDTH/4)
		.attr("cy", -HEIGHT/4)

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

  


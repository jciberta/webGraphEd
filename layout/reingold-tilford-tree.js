
/**
 * Create a Reingold Tilford Tree layout
 * Based on http://bl.ocks.org/mbostock/4063550
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
ReingoldTilfordTreeLayout = function(canvas, graph) {
	this.graph = graph;
 
    var jsonList = graph.getTreeD3JSON();
//console.log('jsonList: ' + jsonList);

    var diameter = HEIGHT;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

	// http://stackoverflow.com/questions/16070150/d3-substituting-d3-svg-diagonal-with-d3-svg-line
    var line = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    function lineData(d){
        // I'm assuming here that supplied datum 
        // is a link between 'source' and 'target'
        var points = [
            {x: d.source.x, y: d.source.y},
            {x: d.target.x, y: d.target.y}
        ]
        return line(points);
    }    

    var vis = container
        .append("svg:g")
        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")");
	this.viss = vis;

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
	
	var drag = d3.behavior.drag()
		.on("dragstart", dragstarted)
		.on("drag", function(d, i) {
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
    
    var nodes = tree.nodes(jsonList),
        links = tree.links(nodes);
//console.dir(nodes);
//console.dir(links);

	function transformToCartesianCoordinates(obj, x, y) {
		var i, r = obj.y, t = obj.x;
console.log('r: ' + r + ', t: ' + t);		
		obj.x = cartesianX(r, t);
		obj.y = cartesianY(r, t);
		for (i=0; i<links.length;i++) {
			if (links[i].source.id == obj.id) {
				links[i].source.x = obj.x;
				links[i].source.y = obj.y;
			}
			else if (links[i].target.id == obj.id) {
				links[i].target.x = obj.x;
				links[i].target.y = obj.y;
			}
		}
			if (obj.hasOwnProperty('children')) {
			for (i=0; i<obj.children.length;i++) {
				transformToCartesianCoordinates(obj.children[i], obj.x, obj.y);
			}
		}
	}

	// Transform polar coordinates to cartesian coordinates in the layout
	transformToCartesianCoordinates(nodes[0], 0, 0);
//console.dir(nodes);
//console.dir(links);

    var link = vis.selectAll(".link")
        .data(links)
        .enter().append("path")
            .attr("class", "link")
            .attr("d", lineData);
  
    var node = vis.selectAll(".node")
		.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d; })
			.attr("transform", function(d) { 
				return "translate(" + [ d.x, d.y ] + ")";
			})
			.call(drag);

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
}

/**
 * Adds a node to the corresponding layout.
 */
ReingoldTilfordTreeLayout.prototype.addNode = function() {
 
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

  


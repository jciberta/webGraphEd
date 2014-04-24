
/**
 * Create a Vertical Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
VerticalTreeLayout = function(canvas, graph) {
//console.log('VerticalTreeLayout');
    var jsonList = graph.getTreeD3JSON();
//console.log('jsonList: ' + JSON.stringify(jsonList));

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;

	// Compute the new tree layout.
	this.nodes = tree.nodes(root).reverse();

	// Normalize for fixed-depth.
	this.nodes.forEach(function(d) { d.y = d.depth * 180 / 2; });

	this.links = tree.links(this.nodes);
		
//console.log('nodes:');
//console.dir(this.nodes);
//console.log('links:');
//console.dir(this.links);
}
/**
 * Create a Vertical tree
 * @constructor
 * @param {string} canvas Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph Graph drawing object
 */
VerticalTreeLayout2 = function(canvas, graph) {
	this.canvas = canvas;
	this.graph = graph;
	
	var m = [20, 120, 20, 120], i = 0;
	var startState, endState;    

//console.log('Collapse');					
//this.toggle(); 	
	
	var jsonList = graph.getTreeD3JSON();

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

    // Straight links 
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
//    var vis = d3.select("#container")
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");    
	
	// Line displayed when dragging new nodes
	var drag_line = vis.append('svg:path')
		.attr('class', 'dragline hidden')
		.attr('d', 'M0,0L0,0');
	
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
//console.log('d3.event.dx: ' + d3.event.dx);
			d.x += d3.event.dx
			d.y += d3.event.dy
//			var color = d3.selectAll('circle').style("fill", "yellow");
//console.log('color: ' + color);
//			d3.select(this).attr("transform", function(d, i){
			if (PAN_AND_ZOOM)
                d3.select(this).select("circle").style("fill", "yellow");
//console.log('this: ' + JSON.stringify(this));
			d3.select(this).attr("transform", function(d){
//				return "rotate(" + (270) + ")translate(" + [ d.x, d.y ] + ")"; 
//				return "translate(" + [ d.x, d.y ] + ")rotate(90)"; 
				return "translate(" + [ d.x, d.y ] + ")";
				
				d3.selectAll("path.link").attr("stroke", "orange")
					.attr("transform", "translate(" + [ d.x, d.y ] + ")");
			})
			d3.selectAll('path.link')
//				.style("fill", "yellow")
				.attr( 'd', computeTransitionPath);
//console.log('link: ');
				
		})
		.on("dragend", function(d) {
			if (PAN_AND_ZOOM) {
				d3.select(this).classed("dragging", false);
				d3.select(this).select("circle").style("fill", "white");
			}
		});	
	
    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;
//console.log('root: ' + JSON.stringify(root));
//console.log('root: ' + root.id);
  
    function update(source) {
//console.log('source: ' + source);
//console.log('source: ' + JSON.stringify(source));
	
        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse();

        // Normalize for fixed-depth.
        nodes.forEach(function(d) { d.y = d.depth * 180 / 2 + 100; });

        // Update the nodes...
        var node = vis.selectAll("g.node")
//        var node = canvas.selectAll("container")
            .data(nodes, function(d) { return d.id || (d.id = ++i); });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + source.y0 + "," + (source.x0) + ")"; })
			.call(drag);

        nodeEnter.append("svg:circle")
            .attr("r", 1e-6)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
			.on("click", function(d, i) {
				if (d3.event.shiftKey) {
					// Collapse
//console.log('Collapse');					
					this.toggle(d); 
					update(d); 
				}
/*				else {
					var e = d3.event,
						g = this.parentNode,
						isSelected = d3.select(g).classed( selected");
					if (!e.ctrlKey) {
						d3.selectAll('g.selected').classed("selected", false);
					}
					d3.select(g).classed("selected", !isSelected);
					// reappend dragged element as last 
					// so that its stays on top 
					g.parentNode.appendChild(g);
				} */
			});		

        nodeEnter.append("svg:text")
            .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
            .attr("dy", ".35em")
            .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.name; })
			.attr("transform", function(d) { return "rotate(90)"; })
            .style("fill-opacity", 1e-6)
			.on("click", function(d) { 
				var answer = prompt("Please enter the new name", d.name);
				if (answer != null) {
					// Change text on layout
					d3.select(this).text(answer);	
					changeLabel(root, d.id, answer);
					// Change text on graph drawing object
					graph.changeLabel(d.id, answer);
				}
			});
			
        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        nodeUpdate.select("circle")
            .attr("r", 4.5)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
            .remove();

        nodeExit.select("circle")
            .attr("r", 1e-6);

        nodeExit.select("text")
            .style("fill-opacity", 1e-6);

        // Update the links…
//        var link = canvas.selectAll("path.link")
        var link = vis.selectAll("path.link")
            .data(tree.links(nodes), function(d) { return d.target.id; });

        // Enter any new links at the parent's previous position.
        link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {x: source.y0, y: source.x0};
                return lineData({source: o, target: o});
            })
            .transition()
            .duration(duration)
            .attr("d", lineData);

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", lineData);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {x: source.y, y: source.x};
                return lineData({source: o, target: o});
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.y;
            d.y0 = d.x;
        });
    }

    // Toggle children.
    function toggle(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
    }	
  
    function toggleAll(d) {
        if (d.children) {
            d.children.forEach(toggleAll);
            toggle(d);
        }
    }

	function changeLabel(node, id, label) {
		if (node.id == id) {
			node.name = label;
		}
		else {
			for (var i in node.children) { 
				changeLabel(node.children[i], id, label);
			}
		}
	}
	
    update(root);
}

/**
 * Updates the layout.
 * @param {Object} source The source node to update.
 */
VerticalTreeLayout.prototype.updateLayout = function(source) {
}

/**
 * Toggle a node.
 * @param {Object} d The node to toggle.
 */
VerticalTreeLayout.prototype.toggle = function(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
}

/**
 * Toggle a node and its sons.
 * @param {Object} d The node to toggle.
 */
VerticalTreeLayout.prototype.toggleAll = function(d) {
	if (d.children) {
		d.children.forEach(toggleAll);
		toggle(d);
	}
}

/**
 * Adds a node to the corresponding layout.
 */
VerticalTreeLayout.prototype.addNode = function() {
	var newId = this.graph.getNewNodeId();
console.log('newId: ' + newId);		
	
	//var newNode = eval('{"id": "' + newId + '", "name": "New node"}');
//console.log('newNode: ' + newNode);		

/*    var node = this.viss.selectAll(".node")
		.data(newNode)
		.enter().append("g")
			.attr("class", "node")
			.attr("id", function(d) { return d; })
			.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
			.call(drag);*/

	var node = this.canvas
		.append("g")
			.attr("class", "node")
			.call(this.drag);

	node.append("circle")
		.attr("r", 4.5)
		.attr("cx", -WIDTH/4)
		.attr("cy", -HEIGHT/4)
		//.call(drag);

	node.append("text")
		.attr("dy", ".31em")
//		.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
//		.attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
		.attr("transform", 'translate(' + (-WIDTH/4 + 8) + ',' + (-HEIGHT/4) + ')')
//		.text(function(d) { return d.name; })
		.text('Node ' + newId)
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

  


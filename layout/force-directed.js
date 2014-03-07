
/**
 * Create a Force Directed layout
 * Based on http://bl.ocks.org/MoritzStefaner/1377729
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
ForceDirectedLayout = function(canvas, graph) {
//	var w = 960, h = 500;
	var i, j, k;

	var labelDistance = 0;

//	var vis = d3.select("body").append("svg:svg").attr("width", w).attr("height", h);

	var nodes = [];
	var labelAnchors = [];
	var labelAnchorLinks = [];
	var links = [];

	
	canvas = container;
	
/*	for (i = 0; i < 30; i++) {
		var node = {
			label : "node " + i
		};
		nodes.push(node);
		labelAnchors.push({
			node : node
		});
		labelAnchors.push({
			node : node
		});
	};*/
	
//console.log('graph.listNodes :' + graph.listNodes);
	for (i=0; i<graph.listNodes.length; i++) { 
		var node = {
			id : graph.listNodes[i][0],
			label : graph.listNodes[i][1]
		};
		nodes.push(node);
		labelAnchors.push({
			node : node
		});
		labelAnchors.push({
			node : node
		});
		// Labels of nodes
		labelAnchorLinks.push({
			source : i * 2,
			target : i * 2 + 1,
			weight : 1
		});
	}
	
console.log('nodes[0].label: ' + nodes[0].label);

	
/*	for (i = 0; i < nodes.length; i++) {
		for(var j = 0; j < i; j++) {
			if(Math.random() > .95)
				links.push({
					source : i,
					target : j,
					weight : Math.random()
				});
		}
		labelAnchorLinks.push({
			source : i * 2,
			target : i * 2 + 1,
			weight : 1
		});
	};*/

	// Labels of nodes
/*	for (i=0; i<graph.listNodes.length; i++) { 
		labelAnchorLinks.push({
			source : i * 2,
			target : i * 2 + 1,
			weight : 1
		});
	}*/

	for (i=0; i<graph.listEdges.length; i++) { 
		s = graph.listEdges[i][0];
		d = graph.listEdges[i][1];
//console.log('s: ' + s);
//console.log('d: ' + d);
		for (j=0; j<graph.listNodes.length; j++) {
			if (graph.listNodes[j][0]==s) {
				for (k=0; k<graph.listNodes.length; k++) {
					if (graph.listNodes[k][0]==d) {
//console.log('Inside');
						links.push({
							source : j,
							target : k,
							weight : 1
						});
					}
				}
			}
		}
	}

/*	
console.log('graph.listEdges :' + graph.listEdges);
	for (i=0; i<graph.listNodes.length; i++) { 
		for (j=0; j<graph.listEdges.length; j++) { 
//console.log('graph.listEdges[j][0] :' + graph.listEdges[j][0]);
//console.log('graph.listNodes[0] :' + graph.listNodes[i][0]);
//console.log('graph.listEdges[i][1] :' + graph.listEdges[i][1]);
			if (graph.listEdges[j][0]==graph.listNodes[i][0]) {
console.log('Inside');
console.log('  graph.listNodes[0] :' + graph.listNodes[i][0]);
console.log('    graph.listEdges[j][0] :' + graph.listEdges[j][0]);
console.log('    graph.listEdges[j][1] :' + graph.listEdges[j][1]);
				links.push({
//					source : i,
//					target : j,
					source : graph.listEdges[j][0],
					target : graph.listEdges[j][1],
					weight : 1
				});
			}
		}

	}*/


//	console.log('nodes :' + nodes);
//	console.log('labelAnchors :' + labelAnchors);
//	console.log('labelAnchorLinks :' + labelAnchorLinks);
//	console.log('links :' + links);


	var force = d3.layout.force().size([WIDTH, HEIGHT]).nodes(nodes).links(links).gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
		return x.weight * 10
	});
	force.start();

	var force2 = d3.layout.force()
		.nodes(labelAnchors).links(labelAnchorLinks)
		.gravity(0).linkDistance(0).linkStrength(8).charge(-100)
		.size([WIDTH, HEIGHT]);
	force2.start();

	var link = canvas.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC");

	var node = canvas.selectAll("g.node").data(force.nodes()).enter().append("svg:g").attr("class", "node");
	node.append("svg:circle")
		.attr("r", 4.5)
//		.style("fill", "#555")
//		.style("stroke", "#FFF")
//		.style("stroke-width", 3);
	node.call(force.drag);

	var anchorLink = canvas.selectAll("line.anchorLink").data(labelAnchorLinks)//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

	var anchorNode = canvas.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
	
	anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
	
	anchorNode.append("svg:text").text(function(d, i) {
		return i % 2 == 0 ? "" : d.node.label
	}).style("fill", "#555").style("font-family", "Arial").style("font-size", 12)
				.on("click", function(d) { 
console.log('d: ' + JSON.stringify(d));
console.log('d.node.label: ' + d.node.label);
					var answer = prompt("Please enter the new name", d.node.label);
					if (answer != null) {
						// Change text on layout
						d3.select(this).text(answer);	
						// Change text on graph drawing object
						graph.changeLabel(d.node.id, answer);
					}
				});


	var updateLink = function() {
		this.attr("x1", function(d) {
			return d.source.x;
		}).attr("y1", function(d) {
			return d.source.y;
		}).attr("x2", function(d) {
			return d.target.x;
		}).attr("y2", function(d) {
			return d.target.y;
		});

	}

	var updateNode = function() {
		this.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});
	}

	force.on("tick", function() {
		force2.start();
		node.call(updateNode);
		anchorNode.each(function(d, i) {
			if (i % 2 == 0) {
				d.x = d.node.x;
				d.y = d.node.y;
			} 
			else {
				var b = this.childNodes[1].getBBox();
				var diffX = d.x - d.node.x;
				var diffY = d.y - d.node.y;
				var dist = Math.sqrt(diffX * diffX + diffY * diffY);
				var shiftX = b.width * (diffX - dist) / (dist * 2);
				shiftX = Math.max(-b.width, Math.min(0, shiftX));
				var shiftY = 5;
				this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
			}
		});
		anchorNode.call(updateNode);
		link.call(updateLink);
		anchorLink.call(updateLink);
	});
}
 
/*ForceDirectedLayout2 = function(canvas, graph) {
    var adjacencyList = graph.getAdjacencyList();
    console.log('adjacencyList: ' + adjacencyList);

    var nodes = d3.values(adjacencyList);
    var links = d3.merge(nodes.map(function(source) {
        return source.map(function(target) {
            return {source: source, target: adjacencyList[target]};
        });
    }));

//console.log('canvas: ', canvas);

    var force = d3.layout.force()
        .nodes(nodes)
        .links(links)
        .size([WIDTH, HEIGHT])
        .start();

    var link = canvas.selectAll("line.link")
        .data(links)
        .enter().append("svg:line");

    var node = canvas.selectAll("circle.node")
        .data(nodes)
        .enter().append("svg:circle")
        .attr("r", 5)
        .call(force.drag);

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    });
}*/


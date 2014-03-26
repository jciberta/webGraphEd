
/**
 * Create a Collapsible Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
HorizontalTreeLayout = function(canvas, graph) {
	var m = [20, 120, 20, 120], i = 0;
	var startState, endState;    

	var jsonList = graph.getTreeD3JSON();

	var tree = d3.layout.tree()
		.size([HEIGHT, WIDTH]);

	// Diagonal links
	var diagonal = d3.svg.diagonal()
		.projection(function(d) { return [d.y, d.x]; });
	
    // Straight links 
    // http://stackoverflow.com/questions/16070150/d3-substituting-d3-svg-diagonal-with-d3-svg-line
    var line = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; });
    function lineData(d){
        // I'm assuming here that supplied datum 
        // is a link between 'source' and 'target'
        var points = [
            {x: d.source.y, y: d.source.x},
            {x: d.target.y, y: d.target.x}
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
		/*var deltaX = d.target.x - d.source.x,
		deltaY = d.target.y - d.source.y,
		dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
		normX = deltaX / dist,
		normY = deltaY / dist,
		sourcePadding = radius + 2;//d.left ? 17 : 12,
		targetPadding = radius + 6;//d.right ? 17 : 12,
		sourceX = d.source.x + (sourcePadding * normX),
		sourceY = d.source.y + (sourcePadding * normY),
		targetX = d.target.x - (targetPadding * normX),
		targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;*/
		
		// BO!!!!
		/*var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 17 : 12,
        targetPadding = d.right ? 17 : 12,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
		return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;*/		

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
		return 'M' + sourceY + ',' + sourceX + 'L' + targetY + ',' + targetX;		
		
	};	
	
	var drag = d3.behavior.drag()
		.on("dragstart", dragstarted)
		.on("drag", function(d, i) {
console.log('d3.event.dx: ' + d3.event.dx);
			d.x += d3.event.dy
			d.y += d3.event.dx
//			var color = d3.selectAll('circle').style("fill", "yellow");
//console.log('color: ' + color);
//			d3.select(this).attr("transform", function(d, i){
			d3.select(this).select("circle").style("fill", "yellow");
//console.log('this: ' + JSON.stringify(this));
			d3.select(this).attr("transform", function(d){
//				return "rotate(" + (270) + ")translate(" + [ d.x, d.y ] + ")"; 
//				return "translate(" + [ d.x, d.y ] + ")rotate(90)"; 
				return "translate(" + [ d.y, d.x ] + ")";
				
				d3.selectAll("path.link").attr("stroke", "orange")
					.attr("transform", "translate(" + [ d.y, d.x ] + ")");
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

	
	
/*	var drag = d3.behavior.drag()
		.on("drag", function(d, i) {
			if(startState) {
				return;
			}
console.log('on("drag"');			
			var selection = d3.selectAll('.selected');
console.log('selection: ' + selection);			
			if( selection[0].indexOf(this)==-1) {
				selection.classed("selected", false);
				selection = d3.select(this);
				selection.classed("selected", true);
			} 
			d3.select(this).attr("transform", function(d, i) {
//			selection.attr("transform", function(d, i) {
				d.x += d3.event.dx;
				d.y += d3.event.dy;
				return "translate(" + [ d.x,d.y ] + ")"
			})
			// Reappend dragged element as last 
			// so that its stays on top 
			this.parentNode.appendChild(this);
			//gTransitions.attr('d', computeTransitionPath);
			d3.event.sourceEvent.stopPropagation();
		})
		.on( "dragend", function(d) {
			// TODO : http://stackoverflow.com/questions/14667401/click-event-not-firing-after-drag-sometimes-in-d3-js

			// needed by FF
			drag_line
				.classed('hidden', true)
				.style('marker-end', '');
			if( startState && endState) {
				startState.transitions.push( { label : "transition label 1", target : endState});
				restart();
			}
			startState = undefined;
			d3.event.sourceEvent.stopPropagation();
		});	
*/	
	
	
	
    root = jsonList;
    root.x0 = HEIGHT / 2;
    root.y0 = 0;
console.log('root: ' + JSON.stringify(root));
console.log('root: ' + root.id);
  
    function update(source) {
        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse();

        // Normalize for fixed-depth.
        nodes.forEach(function(d) { d.y = d.depth * 180; });

        // Update the nodes…
        var node = vis.selectAll("g.node")
//        var node = canvas.selectAll("container")
            .data(nodes, function(d) { return d.id || (d.id = ++i); });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//            .on("click", function(d) {
//				toggle(d); update(d); 
//			});
			.call(drag);

        nodeEnter.append("svg:circle")
            .attr("r", 1e-6)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
			.on("click", function(d, i) {
				if (d3.event.shiftKey) {
					// Collapse
					toggle(d); update(d); 
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
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
            .attr("r", 4.5)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
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
                var o = {x: source.x0, y: source.y0};
//                return diagonal({source: o, target: o});
                return lineData({source: o, target: o});
            })
            .transition()
            .duration(duration)
//            .attr("d", diagonal);
            .attr("d", lineData);

        // Transition links to their new position.
        link.transition()
            .duration(duration)
//            .attr("d", diagonal);
            .attr("d", lineData);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {x: source.x, y: source.y};
//                return diagonal({source: o, target: o});
                return lineData({source: o, target: o});
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
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
//console.log(node.children[i]); 
			}
		}
	}
	
  // Initialize the display to show a few nodes.
//  root.children.forEach(toggleAll);

    update(root);
//});
//}

}

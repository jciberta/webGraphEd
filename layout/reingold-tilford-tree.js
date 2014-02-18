
/**
 * Create a Reingold Tilford Tree layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
ReingoldTilfordTreeLayout = function(canvas, graph) {
 
    var jsonList = graph.getTreeD3JSON();

//console.log('jsonList: ' + jsonList);

    var diameter = HEIGHT;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

/*var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter - 150)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
*/

/*    var zoom = d3.behavior.zoom()
        .scaleExtent([1, 10])
        .on("zoom", zoomed);
*/
  
/*	var drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);
*/



/*    container = canvas.append("g")
        .attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")")
        .call(zoom);*/
    container.attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")")
       .call(zoom);

    
    var nodes = tree.nodes(jsonList),
        links = tree.links(nodes);

    var link = container.selectAll(".link")
        .data(links)
        .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

    var node = container.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .call(drag);
      

  node.append("circle")
      .attr("r", 4.5)
      //.call(drag);

  node.append("text")
      .attr("dy", ".31em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
      .text(function(d) { return d.name; });

  //d3.select(self.frameElement).style("height", diameter - 150 + "px");
  
    function redraw() {
        trans=d3.event.translate;
        scale=d3.event.scale
        node.attr("transform", "translate(" + trans + ")" + " scale(" + scale + ")")
        console.log(scale)
    }
    
 /*   function zoomed() {
        container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function dragstarted(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
    }

    function dragged(d) {
        d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }

    function dragended(d) {
        d3.select(this).classed("dragging", false);
    }*/

}

  


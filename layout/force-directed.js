
/**
 * Create a Force Directed layout
 * @constructor
 * @param {string} canvas - Canvas where the graph drawing will be lay out.
 * @param {GraphDrawing} graph - Graph drawing object
 */
ForceDirectedLayout = function(canvas, graph) {


  var adjacencyList = graph.getAdjacencyList();
console.log('adjacencyList: ' + adjacencyList);

  var nodes = d3.values(adjacencyList);
  var links = d3.merge(nodes.map(function(source) {
        return source.map(function(target) {
          return {source: source, target: adjacencyList[target]};
        });
      }));

console.log('canvas: ', canvas);

/*var w = 960,
    h = 500;

var vis = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);*/


  var force = d3.layout.force()
      .nodes(nodes)
      .links(links)
      .size([w, h])
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
}
 


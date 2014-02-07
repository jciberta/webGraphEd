// graphml_file.js

/**
 * Creates an instance of GraphMLFile.
 * @constructor
 * @param {string} content The Content of the file.
 */
function GraphMLFile(content) {
  if (content===undefined) { // parameter was omitted in call
    this.content = '';
  }
  else
  {
    this.content = content;
    var parser = new DOMParser();
    this.XML = parser.parseFromString(content,"text/xml");
  }
}

/**
 * Get a list of nodes from a GraphML file.
 * @return {Node[]} True if the graph drawing is a tree.
 */
GraphMLFile.prototype.getNodes = function() {
	var i, id, n=[];
	var nodes = this.XML.getElementsByTagName("node");

	for (i=0;i<nodes.length;i++) {
		id = nodes[i].getAttribute("id");
		n.push([id, '']);
	}
	return n;
}

/**
 * Get a list of edges from a GraphML file.
 * @return {Edge[]} True if the graph drawing is a tree.
 */
GraphMLFile.prototype.getEdges = function() {
	var i, s, t, n=[];
	var nodes = this.XML.getElementsByTagName("edge");

	for (i=0;i<nodes.length;i++) {
		s = nodes[i].getAttribute("source");
		t = nodes[i].getAttribute("target");
		n.push([s, t, '']);
	}
	return n;
}

/**
 * Save the current graph drawing in GraphML format.
 * @param {GraphDrawing} graph The graph drawing.
 * @param {string} filename The name of the file.
 */
GraphMLFile.prototype.save = function(graph, filename) {
  var i, sFile = '';
  var ENTER = '\n'

  sFile += '<?xml version="1.0" encoding="UTF-8"?>' + ENTER;
  sFile += '<graphml>' + ENTER;
  sFile += '  <graph>' + ENTER;
  for (i=0;i<graph.listNodes.length;i++) {  
    sFile += '    <node id="' + graph.listNodes[i][0] + '"/>' + ENTER;
  }
  for (i=0;i<graph.listEdges.length;i++) {  
    sFile += '    <edge source="' + graph.listEdges[i][0] + '" target="' + graph.listEdges[i][1] + '"/>' + ENTER;
  }
  sFile += '  </graph>' + ENTER;
  sFile += '</graphml>' + ENTER;

//console.log('save: ' + sFile);

  var blob = new Blob([sFile], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename + '.graphml');

}

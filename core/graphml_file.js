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
        this.XML = parser.parseFromString(content, "text/xml");
    }
}

/**
 * Get a list of nodes from a GraphML file.
 * @return {Node[]} True if the graph drawing is a tree.
 */
GraphMLFile.prototype.getNodes = function() {
	var i, j, n = [];
	var nodes, data, key;
	var id, label = '', shape = 'Circle', color = 'White';
	var child;

	// Example:
	//  <node id="1">
	//      <data key="label">ORG RECT</data>
	//      <data key="shape">Square</data>
	//      <data key="color">Orange</data>
	//  </node>
	
	nodes = this.XML.getElementsByTagName('node');
	for (i=0; i<nodes.length; i++) {
		id = nodes[i].getAttribute('id');
		data = nodes[i].getElementsByTagName('data');
		for (j=0; j<data.length; j++) {
			key = data[j].getAttribute('key');
			switch (key) {
				case 'label': 
					label = data[j].textContent;
					break;
				case 'shape': 
					shape = data[j].textContent;
					break;
				case 'color': 
					color = data[j].textContent;
					break;
			}
		}
//console.log('n: ' + id + ', ' + label + ', ' + shape + ', ' + color);		
		n.push([id, label, shape, color]);
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
    sFile += '  <key id="label" for="node" attr.name="label" attr.type="string"/>' + ENTER;
    sFile += '  <key id="shape" for="node" attr.name="shape" attr.type="string">' + ENTER;
    sFile += '    <default>Circle</default>' + ENTER;
    sFile += '  </key>' + ENTER;
    sFile += '  <key id="color" for="node" attr.name="color" attr.type="string">' + ENTER;
    sFile += '    <default>White</default>' + ENTER;
    sFile += '  </key>' + ENTER;
	
    sFile += '  <graph>' + ENTER;
    for (i=0;i<graph.listNodes.length;i++) {  
        sFile += '    <node id="' + graph.listNodes[i][0] + '">' + ENTER;
		if (graph.listNodes[i].length > 1 && graph.listNodes[i][1] != '') 
			sFile += '      <data key="label">' + graph.listNodes[i][1] + '</data>' + ENTER;
		if (graph.listNodes[i].length > 2) 
			sFile += '      <data key="shape">' + graph.listNodes[i][2] + '</data>' + ENTER;
		if (graph.listNodes[i].length > 3) 
			sFile += '      <data key="color">' + graph.listNodes[i][3] + '</data>' + ENTER;
        sFile += '    </node>' + ENTER;
    }
    for (i=0;i<graph.listEdges.length;i++) {  
        sFile += '    <edge source="' + graph.listEdges[i][0] + '" target="' + graph.listEdges[i][1] + '"/>' + ENTER;
    }
    sFile += '  </graph>' + ENTER;
    sFile += '</graphml>' + ENTER;

    var blob = new Blob([sFile], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename + '.graphml');
}

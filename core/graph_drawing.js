
 /**
 * @file Classes related to graph drawing.
 * @author Josep Ciberta 
 */
 
/**
 * Creates an instance of Node.
 * @constructor
 * @this {Node}
 * @param {int} id The identification of the node.
 * @param {string} label The label of the node.
 * @param {string} shape The shape of the node.
 * @param {string} color The color of the node.
 */
function Node(id, label, shape, color) {
    this.className = 'Node';

	this.id = id;
	(label == undefined) ? this.label = '' : this.label = label; 
	(shape == undefined) ? this.shape = 'Circle' : this.shape = label; 
	(color == undefined) ? this.color = 'White' : this.color = label; 
}

Node.prototype.getId = function() {
    return this.id;
}

Node.prototype.getLabel = function() {
    return this.label;
}

/**
 * Creates an instance of Edge.
 * @constructor
 * @this {Edge}
 * @param {int} src The source of the edge.
 * @param {int} dst The destinations of the edge.
 * @param {string} label The label of the edge (never used).
 */
function Edge(src, dst, label) {
    this.className = 'Edge';

    this.source = src;
    this.target = dst;
    this.label = label;

    this.getSource = function() { return this.source; };
    this.getTarget = function() { return this.target; };
}

/**
 * Creates an instance of GraphDrawing.
 *
 * @constructor
 * @this {GraphDrawing}
 * @param {Array} ln List of nodes.
 * @param {Array} le List of edges.
 */
function GraphDrawing(ln, le) {
    this.className = 'GraphDrawing';

	if (ln===undefined) { // parameter was omitted in call
		this.listNodes = [];
		this.listEdges = [];
	}
	else {
		this.listNodes = ln;
		this.listEdges = le;
	}

//	this.isDirected = false;
//	this.isPlanar = false;
}

/**
 * Gets the adjacent nodes of a specified node.
 * @param {int} id The id of the node.
 * @return {Array} The adjacent nodes.
 */
GraphDrawing.prototype.getAdjacents = function(n) {
	var r=[], i;

	for (i=0; i<this.listEdges.length; i++) {
		if (this.listEdges[i][0]==n) {
			if (r.indexOf(this.listEdges[i][1]!=-1))
			r.push(this.listEdges[i][1]);
		}
		else if (this.listEdges[i][1]==n) {
			if (r.indexOf(this.listEdges[i][0]!=-1))
			r.push(this.listEdges[i][0]);
		}
	}
	return r;
}

/**
 * Gets the directed adjacent nodes of a specified node.
 * @param {int} id The id of the node.
 * @return {Array} The directed adjacent nodes.
 */
GraphDrawing.prototype.getDirectedAdjacents = function(n) {
    var r=[], i;

    for (i=0; i<this.listEdges.length; i++) {
        if (this.listEdges[i][0]==n) {
            if (r.indexOf(this.listEdges[i][1]!=-1))
            r.push(this.listEdges[i][1]);
        }
    }
    return r;
}

/**
 * Gets the adjacency list of the graph drawing.
 * @return {Array} The adjacency list.
 */
GraphDrawing.prototype.getAdjacencyList = function() {
    var r={}, n, i;

//console.log('this.listNodes: ' + this.listNodes);
//console.log('this.listEdges: ' + this.listEdges);
//console.log('this.listNodes.length: ' + this.listNodes.length);
    for (i=0; i<this.listNodes.length; i++) {
      n = this.listNodes[i][0];
      r[n] = this.getAdjacents(n);
//console.log('n: ' + n + ', ' + r[n]);
    }
    return r;
}

/**
 * Gets the tree of the graph drawing as a JSON object.
 * @return {Object} The tree in JSON notation.
 */
GraphDrawing.prototype.getTreeD3JSON = function() {
//console.log('this: ' + this);
    var t = new Tree(this);
//console.log('Tree.toD3Json: ' + t.toD3JSONString());

//    return t.toD3JSONString();
    return t.toD3JSON();
}

/**
 * Gets the node with a specific id.
 * @param {string} id The id of the node.
 * @return {Node} The node or null.
 */
GraphDrawing.prototype.getNode = function(id) {
    var i;
    for (i=0; i<this.listNodes.length; i++) { 
        if (this.listNodes[i][0]==id)
        return this.listNodes[i];
    } 
    return null;   
}

/**
 * Sets the node with a specific values.
 * @param {int} id The id of the node.
 * @param {string} label The label of the node.
 * @param {string} shape The shape of the node.
 * @param {string} color The color of the node.
 */
GraphDrawing.prototype.setNode = function(id, array) {
    var i;
    for (i=0; i<this.listNodes.length; i++) { 
        if (this.listNodes[i][0]==id) {
			this.listNodes[i][1] = array[1];
			this.listNodes[i][2] = array[2];
			this.listNodes[i][3] = array[3];
//console.log('this.listNodes:');
//console.dir(this.listNodes);			
		}
    } 
}

/**
 * Gets the link with a specific id.
 * @param {int} source The source node id of the link.
 * @param {int} target The target node id of the link.
 * @return {Edge} The link or null.
 */
GraphDrawing.prototype.getLink = function(source, target) {
//console.log('source: ' + source + ', target:' + target);
    var i;
    for (i=0; i<this.listEdges.length; i++) { 
        if (this.listEdges[i][0]==source && this.listEdges[i][1]==target) {
//console.log('this.listEdges[i]: ' + this.listEdges[i]);
			return this.listEdges[i];
		}
    } 
    return null;   
}

/**
 * Gets the root node when the graph drawing represents a tree, otherwise it throw an exception.
 * @return {Node} The root node.
 */
GraphDrawing.prototype.getRoot = function() {
//  if (!this.isTree) throw "Not a tree."; 

	// The source must be unique, not a target from another node.
	var root, n1, n2, i, j;
	var bRoot = true;
	for (i=0; i<this.listEdges.length; i++) {
		n1 = this.listEdges[i][0];
		bRoot = true;
		for (j=0; j<this.listEdges.length; j++) {
			if (i!=j) {
				n2 = this.listEdges[j][1];
//console.log('i: ' + i + ', j: ' + j + ' n1: ' + n1 + ', n2: ' + n2);
				if (n1==n2) bRoot = false;
			}
		}
		if (bRoot) {
//        root = n1;
//console.log('n1: ' + n1);
			root = this.getNode(n1);
			break;
		}
	//console.log('root: ' + root);
	}
	return root;
}

/**
* Imports a file in a GML format.
* @param {String} newFile The file to import.
*/
GraphDrawing.prototype.importGML = function(newFile) {
	var gml, graph, i, n, e;

	gml = new GMLFile(newFile);

	// Get nodes
	this.listNodes = gml.getNodes();
//console.log('Nodes=' + this.listNodes);

	// Get edges
	this.listEdges = gml.getEdges();
//console.log('Edges=' + this.listEdges);
}

/**
* Imports a file in a GraphML format.
* @param {String} newFile The file to import.
*/
GraphDrawing.prototype.importGraphML = function(newFile) {
	var graphml, graph, i, n, e;

	graphml = new GraphMLFile(newFile);

	// Get nodes
	this.listNodes = graphml.getNodes();
//console.log('Nodes=' + this.listNodes);

	// Get edges
	this.listEdges = graphml.getEdges();
//console.log('Edges=' + this.listEdges);
}

/**
* Determines if a graph drawing is connected.
* @return {boolean} True if the graph drawing is connected.
*/
GraphDrawing.prototype.isConnected = function() {
	// Depth-First Search (DFS) variation (non-recursive)
	var l=[]; // List of visited
	var i=0, j;

//console.log('GraphDrawing.isConnected:');
//console.log(' - listNodes: ' + this.listNodes);
//console.log(' - listNodes.length: ' + this.listNodes.length);
	if (this.listNodes.length<2) return false;

	l.push(parseInt(this.listNodes[0][0])); // First node
	while (i<l.length) {
//console.log(' - l (list of visited): ' + l);
		a = this.getAdjacents(l[i]);
//console.log(' - a (adjacents of l): ' + a);
		for (j=0; j<a.length; j++) {
			a[j] = parseInt(a[j]);
			if (l.indexOf(a[j])==-1) {
//console.log('   - l: ' + l);
//console.dir(l);
//console.log('   - a[j]: ' + a[j]);
//console.dir(a[j]);
//console.log('   - l.indexOf(a[j]): ' + l.indexOf(a[j]));
				l.push(a[j]);
			}
		}
		i++;
	}
//console.log(' - l.length: ' + (l.length));
//console.log(' - Result: ' + (this.listNodes.length==l.length));
	return (this.listNodes.length == l.length);
}

/**
* Determines if a directed graph drawing is connected.
* @return {boolean} True if the graph drawing is connected.
*/
GraphDrawing.prototype.isDirectedConnected = function() {
	// Depth-First Search (DFS) variation (non-recursive)
	var l = []; // List of visited
	var i = 0, j;

//console.log('GraphDrawing.isDirectedConnected:');
//console.log(' - listNodes: ' + this.listNodes);
//console.log(' - listNodes.length: ' + this.listNodes.length);
	if (this.listNodes.length < 2) return false;

	var root = this.getRoot();
	
//	l.push(parseInt(this.listNodes[0][0])); // First node
	l.push(parseInt(root)); // First node
	while (i < l.length) {
//console.log(' - l (list of visited): ' + l);
		a = this.getDirectedAdjacents(l[i]);
//console.log(' - a (adjacents of l): ' + a);
		for (j=0; j<a.length; j++) {
			a[j] = parseInt(a[j]);
			if (l.indexOf(a[j]) == -1) {
//console.log('   - l (visited): ' + l);
//console.dir(l);
//console.log('   - a[j]: ' + a[j]);
//console.dir(a[j]);
//console.log('   - l.indexOf(a[j]): ' + l.indexOf(a[j]));
				l.push(a[j]);
			}
		}
		i++;
	}
//console.log(' - l.length: ' + (l.length));
//console.log(' - Result: ' + (this.listNodes.length==l.length));
	return (this.listNodes.length == l.length);
}

/**
 * Determines if a there is a cicle in a graph drawing.
 * @return {boolean} True if the graph drawing is cyclic.
 */
GraphDrawing.prototype.isCyclic = function() {
	// Depth-First Search (DFS) variation (non-recursive)
	var l=[], i=0, j, cycleDetected=false;

	if (this.listNodes.length<2) return false;

	l.push(this.listNodes[0][0]); // First node
	while (i<l.length) {
		a = this.getDirectedAdjacents(l[i]);
		for (j=0; j<a.length; j++) {
			if (l.indexOf(a[j])==-1)
				l.push(a[j]);
			else {
				cycleDetected = true;
				break;
			}
		}
		i++;
	}
	return cycleDetected;
}

/**
 * Determines if a graph drawing is a tree.
 * @return {boolean} True if the graph drawing is a tree.
 */
GraphDrawing.prototype.isTree = function() {
    return (this.isDirectedConnected() && !this.isCyclic());
}

/**
 * Determines if a graph drawing is a binary tree.
 * @return {boolean} True if the graph drawing is a binary tree.
 */
GraphDrawing.prototype.isBinaryTree = function() {
	var i, da;
    var bIsBinaryTree = this.isTree();
	
	if (bIsBinaryTree) {
        // Check for each node there is no more than 2 adjacent edges
		for (i=0; i<this.listNodes.length;i++) {
            da = this.getDirectedAdjacents(this.listNodes[i][0]);
            if (da.length > 2) {
                bIsBinaryTree = false;
                break;
            }
        }
	}
    return bIsBinaryTree;
}

/**
 * Saves the graph drawing in the GML format.
 * @param {string} filename The name of the file.
 */
GraphDrawing.prototype.saveAsGML = function(filename) {
	var gml = new GMLFile();
	gml.save(this, filename);
}

/**
 * Saves the graph drawing in the GraphML format.
 * @param {string} filename The name of the file.
 */
GraphDrawing.prototype.saveAsGraphML = function(filename) {
	var graphml = new GraphMLFile();
	graphml.save(this, filename);
}

/**
 * Changes label on a specified node.
 * @param {string} id The id the node.
 * @param {string} label The new label.
 */
GraphDrawing.prototype.changeLabel = function(id, label) {
	var i;
	for (i=0; i<this.listNodes.length; i++) {
		if (this.listNodes[i][0]==id) {
			this.listNodes[i][1] = label;
			break;
		}
	}
}

/**
 * Obtain a new id for the node.
 * @return {integer} The new node's id.
 */
GraphDrawing.prototype.getNewNodeId = function() {
	var i, max=0;
	for (i=0; i<this.listNodes.length; i++) {
		if (parseInt(this.listNodes[i][0])>max) 
			max=this.listNodes[i][0];
	}
	return parseInt(max)+1;
}

/**
 * Adds a node to the graph drawing
 * @param {int} id The identification of the node.
 * @param {string} label The label of the node.
 */
GraphDrawing.prototype.addNode = function(id, label) {
    this.listNodes.push([id, label]);
console.log('Nodes=' + this.listNodes);

//	n.push([this.getPair(a[i], 'id'), this.getQuotedPair(a[i], 'label')]);
//	this.id = id;
//    this.label = label; 
}

/**
 * Deletes a node from the graph drawing
 * @param {int} id The identification of the node.
 */
GraphDrawing.prototype.deleteNode = function(id) {
console.log('id=' + id);

	var i;
console.log('Nodes: ' + this.listNodes);
	for (i=0; i<this.listNodes.length; i++) {
		if (this.listNodes[i][0] == id) {
			this.listNodes.splice(i, 1);
			break;
		}
	}
console.log('Nodes: ' + this.listNodes);

console.log('Edges: ' + this.listEdges);
	for (i=this.listEdges.length-1; i>=0; i--) {
		if (this.listEdges[i][0] == id) {
			this.listEdges.splice(i, 1);
		} 
		else if (this.listEdges[i][1] == id) {
			this.listEdges.splice(i, 1);
		} 
	}
console.log('Edges: ' + this.listEdges);
}

/**
 * Deletes a link from the graph drawing
 * @param {int} source The source of the link.
 * @param {int} target The target of the link.
 */
GraphDrawing.prototype.deleteLink = function(source, target) {
	var i;
console.log('Links: ' + this.listEdges);
	for (i=0; i<this.listEdges.length; i++) {
		if (this.listEdges[i][0] == source && this.listEdges[i][1] == target) {
			this.listEdges.splice(i, 1);
			break;
		}
	}
console.log('Links: ' + this.listEdges);
}

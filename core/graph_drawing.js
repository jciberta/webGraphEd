/** 
 *  @file      graph_drawing.js 
 *  @summary   Capçalera del fitxer de filtres 
 *  @desc      En aquest fitxer hi ha les capçaleres de les utilitats dels filtres de text 
 *  @author    Josep Ciberta 
 *  @version   0.1 
 *  \date      10-12-2011 
 *  @copyright GNU Public License. 
 */ 

/**
 * Creates an instance of Node.
 * @constructor
 * @this {Node}
 * @param {number} id The identification of the node.
 * @param {number} label The label of the node.
 */
function Node(id, label) {
    this.id = id;
    this.label = label; 
}

Node.prototype.getId = function() {
    return this.id;
}

Node.prototype.getLabel = function() {
    return this.label;
}

function Edge(src, dst, label) {
    // Constructor
    this.source = src;
    this.target = dst;
    this.label = label;

    this.getSource = function() { return this.source; };
}

/**
 * Creates an instance of GraphDrawing.
 *
 * @constructor
 * @this {GraphDrawing}
 * @param {[]} ln List of nodes.
 * @param {[]} le List of edges.
 */
function GraphDrawing(ln, le) {
  if (ln===undefined) { // parameter was omitted in call
    this.listNodes = [];
    this.listEdges = [];
  }
  else {
    this.listNodes = ln;
    this.listEdges = le;
  }

  this.isDirected = false;
  this.isPlanar = false;
}

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

GraphDrawing.prototype.getTreeD3JSON = function() {
    var t = new Tree(this);
//console.log('Tree: ' + t);
console.log('Tree.toD3Json: ' + t.toD3JSONString());

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
 * Gets the root node when the graph drawing represents a tree, otherwise it throw an exception.
 * @return {Node} The root node.
 */
GraphDrawing.prototype.getRoot = function() {
  if (!this.isTree) throw "Not a tree."; 
  
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

GraphDrawing.prototype.importGML = function(element) {
  var gml, graph, i, n, e;

  gml = new GMLFile(element);
//console.log('element=' + element);
//console.log('gml=' + gml);
//console.log('gml.getProperties=' + gml.getProperties());


//console.log('typeof=' + typeof(gml));

  // Get nodes
  this.listNodes = gml.getNodes();
//console.log('Nodes=' + this.listNodes);

  // Get edges
  this.listEdges = gml.getEdges();
//console.log('Edges=' + this.listEdges);

}

GraphDrawing.prototype.importGraphML = function(element) {
  var graphml, graph, i, n, e;

  graphml = new GraphMLFile(element);
//    graph = gml.getProperties('graph');
//console.log('importGML graph: ' + graph);
//console.log('element=' + element);
  
  // Get nodes
  this.listNodes = graphml.getNodes();
console.log('Nodes=' + this.listNodes);

  // Get edges
  this.listEdges = graphml.getEdges();
console.log('Edges=' + this.listEdges);
}

GraphDrawing.prototype.markAsUnvisited = function() {
  for (var i=0; i<listNodes.length; i++)
    listNodes[i].visited = false;
}

/**
 * Determines if a graph drawing is connected.
 * @return {boolean} True if the graph drawing is connected.
 */
GraphDrawing.prototype.isConnected = function() {
   // Depth-First Search (DFS) variation (non-recursive)
  var l=[], i=0, j;
  
  l.push(this.listNodes[0][0]); // First node
  while (i<l.length) {
    a = this.getAdjacents(l[i]);
    for (j=0; j<a.length; j++) {
      if (l.indexOf(a[j])==-1)
        l.push(a[j]);
    }
    i++;
  }
  return (this.listNodes.length==l.length);
}

/**
 * Determines if a there is a cicle in a graph drawing.
 * @return {boolean} True if the graph drawing is cyclic.
 */
GraphDrawing.prototype.isCyclic = function() {
  // Depth-First Search (DFS) variation (non-recursive)
  var l=[], i=0, j, cycleDetected=false;
  
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
    return (this.isConnected() && !this.isCyclic());
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



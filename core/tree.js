
 /**
 * @file Classes related to trees.
 * @author Josep Ciberta 
 */

/**
 * Creates a node for a tree.
 * @class A tree is composed by nodes. TreeNode implements this behaviour with 2 properties:
 * <ul>
 * <li>node: then node itself.
 * <li>listChildren: list of children nodes. These are also TreeNode.
 * </ul>
 * @constructor
 * @param {Node} node Node of the tree.
 */
TreeNode = function(node) {
    this.node = node;
    this.listChildren = [];
};

/**
 * Add tree node children to the tree recursively.
 * @param {GraphDrawing} graph The graph drawing data to populate the tree.
 */
TreeNode.prototype.addChildren = function(graph) {
    var i, tn, sonId, newTreeNode;
//    console.log('graph.listNodes: ' + graph.listNodes);
//    console.log('graph.listEdges: ' + graph.listEdges);

    for (i=0;i<graph.listEdges.length;i++) {
//console.log('this.node: ' + this.node);
        if (this.node[0] == graph.listEdges[i][0]) {
            // Add node
            sonId = graph.listEdges[i][1];
//console.log('sonId: ' + sonId);
            newTreeNode = new TreeNode(graph.getNode(sonId));
            this.listChildren.push(newTreeNode);
//            console.log('newTreeNode.node: ' + newTreeNode.node);
            newTreeNode.addChildren(graph);
        }
    }
};

/**
 * Indicates if a tree nodes has children.
 * @return {boolean} True if the tree nodes has children.
 */
TreeNode.prototype.hasChildren = function() {
    return (this.listChildren.length>0);
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {string} The nested JSON string.
 */
TreeNode.prototype.toD3JSONString = function() {
    var i, sReturn;

    sReturn = '{';
    sReturn += '"id": "' + this.node[0]+ '", ';
    sReturn += '"name": "' + this.node[1]+ '"';
//console.log('** this.node: ' + this.node);
    if (this.hasChildren()) {
        sReturn += ', "children": [';
//console.log('** this.listChildren.length: ' + this.listChildren.length);
        for (i=0;i<this.listChildren.length;i++) {
        //    console.log('** this.listChildren[i]: ' + this.listChildren[i]);
            sReturn += this.listChildren[i].toD3JSONString();
            if (i<this.listChildren.length-1)  
            sReturn += ', ';
        }
        sReturn += ']';
    }
    else {
        sReturn += ', "size": 1';
    }
    sReturn += '}';
    return sReturn;
};


/**
 * Creates a tree.
 * @class The Tree class contains the root node and a list of TreeNode.
 * @constructor
 * @param {GraphDrawing} graph The graph drawing data to populate the tree.
 */
Tree = function(graph) {
	if (!graph.isTree()) throw "Not a tree."; 

    var root = graph.getRoot();
    //  this.listChildren = [];
    this.graph = graph;
    this.treeNode = new TreeNode(root);

//console.log('root: ' + root);
//console.log('treeNode: ' + this.treeNode);

    //  this.treeNode.addChildren(this.treeNode);            
    this.treeNode.addChildren(graph);            

    //    listEdges = [[1,2], [1,3], [2,4], [2,5], [3,6], [3,7], [4,8]];
};

/**
 * Add tree node children to the tree recursively.
 * @param {TreeNode} tn The tree node to insert.
 */
Tree.prototype.addChildren = function(tn) {
    var i, tn, sonId;
//    console.log('TreeNode: ' + tn);
//    console.log('TreeNode.node: ' + tn.node);
//    console.log('graph.listNodes: ' + this.graph.listNodes);
//    console.log('graph.listEdges: ' + this.graph.listEdges);

    for (i=0;i<this.graph.listEdges.length;i++) {
        console.log('tn.node: ' + tn.node);
        if (tn.node[0] == this.graph.listEdges[i][0]) {
            // Add node
            sonId = this.graph.listEdges[i][1];
            tnew = new TreeNode(this.graph.getNode(sonId));
            this.listChildren.push(tnew);
            console.log('tnew.node: ' + tnew.node);
            this.addChildren(tnew);
        }
    }
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {D3JSON} The nested JSON object.
 */
Tree.prototype.toD3JSON = function() {
    var s;
    s = this.treeNode.toD3JSONString();
//    console.log('this.treeNode.toD3JSONString(): ' + this.treeNode.toD3JSONString());
    return JSON.parse(s);
};

/**
 * Convert the tree into D3 JSON notation.
 * @return {string} The nested JSON string.
 */
Tree.prototype.toD3JSONString = function() {
    return this.treeNode.toD3JSONString();
};


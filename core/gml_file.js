// gml_file.js

/**
 * Creates an instance of GMLFile.
 * @constructor
 * @param {string} content The Content of the file.
 */
function GMLFile(content) {
    if (content===undefined) { // parameter was omitted in call
        this.content = '';
    }
    else {
        this.content = content.replace(/\r?\n|\r/g, ' '); // Replace ENTER with a space
    }
}

GMLFile.prototype.getProperties = function(element) {
  var i, a=[], s, openBracket=0;

  s = this.content;
  i = s.trim().indexOf(element);
  while (i>=0) {
    // String without element
    s = s.substring(i+element.length, s.length).trim();
    
    // The next must be [
    i = s.indexOf('[');
    if (i==0) {
      openBracket++;
      s = s.substring(i.length, s.length).trim();
      for (i=0; i<s.length; i++) {
        if (s[i]=='[') {
          openBracket++
        }
        else if (s[i]==']') {
          openBracket--;
          if (openBracket==1) {
            // This is the last ]
            rest = s.substring(i+1, s.length).trim();
            s = s.substring(1, i).trim();
            break; 
          }
        }
      }
      s = s.substring(0, i).trim();
      a.push(s);
      openBracket=0;
    }
    else {
      s = '';
    }
    s = rest;
    i = s.trim().indexOf(element);
    rest = '';
  }
  return a;
}

GMLFile.prototype.getPair = function(str, item) {
    var i, r='';

    i = str.indexOf(item);
    if (i>=0) {
        // Item exists
        r = nextWord(str, i);
    }
    return r;
}

GMLFile.prototype.getQuotedPair = function(str, item) {
    var i, r='';

    i = str.indexOf(item);
    if (i>=0) {
        // Item exists
        r = nextQuotedWord(str, i);
    }
    return r;
}

/**
 * Get a list of nodes from a GraphML file.
 * @return {Node[]} True if the graph drawing is a tree.
 */
GMLFile.prototype.getNodes = function() {
    var a, i, n=[];

    a = this.getProperties('node');
    for (i=0; i<a.length; i++) {
        n.push([this.getPair(a[i], 'id'), this.getQuotedPair(a[i], 'label')]);
    }
    return n;
}

/**
 * Get a list of edges from a GraphML file.
 * @return {Edge[]} True if the graph drawing is a tree.
 */
GMLFile.prototype.getEdges = function() {
    var a, i, n=[];

    a = this.getProperties('edge');
    for (i=0; i<a.length; i++) {
        n.push([this.getPair(a[i], 'source'), this.getPair(a[i], 'target'), this.getQuotedPair(a[i], 'label')]);
    }
    return n;
}

/**
 * Save the current graph drawing in GML format.
 * @param {GraphDrawing} graph The graph drawing.
 * @param {string} filename The name of the file.
 */
GMLFile.prototype.save = function(graph, filename) {
    var i, sFile = '';
    var ENTER = '\n'

    sFile += 'graph [' + ENTER;
    for (i=0;i<graph.listNodes.length;i++) {  
        sFile += '  node [ id ' + graph.listNodes[i][0] + ' ]' + ENTER;
    }
    for (i=0;i<graph.listEdges.length;i++) {  
        sFile += '  edge [ source ' + graph.listEdges[i][0] + ' target ' + graph.listEdges[i][1] + ' ]' + ENTER;
    }
    sFile += ']' + ENTER;

    var blob = new Blob([sFile], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename + '.gml');
}

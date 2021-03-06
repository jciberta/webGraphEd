
// ----------------------------------------------------------------------------
//                               Initialization
// ----------------------------------------------------------------------------

if (!checkBrowserCompatibility()) {
	alert('Some needed APIs are not fully supported in this browser.');
}

function loadGraphDrawing() {
	// Load file into layout object
	switch (format) {
		case 'GML':
			layout.importGML(graph);
			break;
		case 'GRAPHML':
			layout.importGraphML(graph);
			break;
		default:
			alert("Format not supported!"); 
			throw "Format not supported!";
			break;
	}
   
    // Layout the graph drawing
    switch (query.layout) {
        case 't':
        case 'ht':
            layout.layoutHorizontalTree(canvas);
            break;
        case 'vt':
            layout.layoutVerticalTree(canvas);
            break;
        case 'rt':
            layout.layoutRadialTree(container);
            break;
        case 'fd':
            layout.layoutForceDirected(canvas);
            break;
        default:
            alert("Layout not supported!"); 
            throw "Layout not supported!";
            break;
    }
	
	if (EMBEDDED && query.layout!='fd') { 
		layout.fit(); 
	}
    updateMenu(layout.graph);
}

// URL Parameters:
// - benchmark=[true|false]
// - layout=[t|rt|fd]
// - url|graph,format=[gml|graphml]
// - width|height
// - embed=[true|false]
var query = getURLParameters();
var graph, format;
var bWait = true;
//console.log('query: ' + query);
//console.log('query.layout: ' + query.layout);

if (query.width != undefined) WIDTH = query.width;
if (query.height != undefined) HEIGHT = query.height;

createCanvas();	
layout = new Layout();

if (query.benchmark != undefined) BENCHMARK = (query.benchmark.toLowerCase() == 'true');
if (BENCHMARK) {
	var benchmark = new Benchmark(['binary-tree50.gml', 'binary-tree500.gml', 'binary-tree1000.gml', 'binary-tree2000.gml', 'binary-tree5000.gml']);
	benchmark.start();
	throw 'Benchmark completed.' // Stop the application
}

// Example 1: ?layout=t&format=gml&graph=graph%20[%0A%20%20comment%20"Binary%20tree"%0A%20%20node%20[%20id%201%20label%20"Node%201"%20]%0A%20%20node%20[%20id%202%20label%20"Node%202"%20]%0A%20%20node%20[%20id%203%20label%20"Node%203"%20]%0A%20%20node%20[%20id%204%20label%20"Node%204"%20]%0A%20%20node%20[%20id%205%20label%20"Node%205"%20]%0A%0A%20%20edge%20[%20source%201%20target%202%20]%0A%20%20edge%20[%20source%201%20target%203%20]%0A%20%20edge%20[%20source%202%20target%204%20]%0A%20%20edge%20[%20source%202%20target%205%20]%0A]
// graph [
//   comment "Binary tree"
//   node [ id 1 label "Node 1" ]
//   node [ id 2 label "Node 2" ]
//   node [ id 3 label "Node 3" ]
//   node [ id 4 label "Node 4" ]
//   node [ id 4 label "Node 5" ]
//
//   edge [ source 1 target 2 ]
//   edge [ source 1 target 3 ]
//   edge [ source 2 target 4 ]
//   edge [ source 2 target 5 ]
// ] 
// Example 2: ?layout=rt&url=http://xtec.cat/~jciberta/webGraphEd/binary-tree2.gml
if (query.layout != undefined) {

	if (query.embed != undefined) EMBEDDED = (query.embed.toLowerCase() == 'true');
console.log('WIDTH: ' + WIDTH + ', HEIGHT: ' + HEIGHT + ', EMBEDDED: ' + EMBEDDED);  

	if (EMBEDDED) {
		// Embed into another web page with iframe:
		// <iframe src="http://xtec.cat/~jciberta/webGraphEd/webGraphEd.html" width="200" height="200"></iframe>
		var menuBarDiv = document.getElementById('menuBar');
		var mainDiv = document.getElementById('main');
		var statusBarDiv = document.getElementById('statusBar');
		menuBarDiv.style.display = 'none';
		statusBarDiv.style.display = 'none';
//		menuBarDiv.style.visibility = 'hidden';
//		statusBarDiv.style.visibility = 'hidden';
		mainDiv.parentNode.insertBefore(menuBarDiv, mainDiv);
	}

    // Get the graph drawing
    if (query.format != undefined && query.graph != undefined) {
//console.log('format: ' + query.format.toUpperCase());    
//console.log('graph: ' + decodeURIComponent(query.graph));    

		graph = decodeURIComponent(query.graph);
		format = query.format.toUpperCase();
		loadGraphDrawing();
		textFileName = 'noname';
    }
    else if (query.url != undefined) {
		var allText, lines;

		// NOTE: only work on the server side. DON'T try in local development, it doesn't work!
		// Adapted from http://social.msdn.microsoft.com/Forums/en-US/64ea2d16-7594-400b-8b25-8b3b9a078eab/read-external-text-file-with-javascript?forum=sidebargadfetdevelopment
		var txtFile = new XMLHttpRequest();
		txtFile.open("GET", query.url, true);
		txtFile.onreadystatechange = function() {
		  if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
			if (txtFile.status === 200) {  // Makes sure it's found the file.
				graph = txtFile.responseText; 
				textFileName = getFileNameFromURL(query.url);
				format = getFileExtension(query.url).toUpperCase();
//console.log('graph: ' + graph);
//console.log('format: ' + format);
				loadGraphDrawing();
			}
		  }
		}
		txtFile.send(null);    
   }
	updateStatusBar();   
}


$(document).ready(function() {
	console.log("Time until DOMready: ", Date.now()-timerStart + ' ms');
});
$(window).load(function() {
	console.log("Time until everything loaded: ", Date.now()-timerStart + 'ms');
});
statusBarMessage = 'Page loaded in ' + (Date.now()-timerStart)/1000 + ' s.';
updateStatusBar();

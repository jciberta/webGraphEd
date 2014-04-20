
var BENCHMARK_ITERATIONS = 10;

/**
 * Create a Benchmark
 * @constructor
 * @this {Benchmark}
 * @param {Array} files The list of files to benchmark.
*/
Benchmark = function(files) {
	this.files = files;
	this.results = []
/*	this.graph = new GraphDrawing();
	this.file = "";
	this.fileName = "";
	this.type = 'None';
	this.layout = new CustomLayout(canvas, this.graph);*/
//console_listNodes(this.layout.nodes);
}

/**
 * Starts the benchmark.
 */
Benchmark.prototype.start = function() {
	var i;
//	for (i=0; i<this.files.length; i++) {
//		this.loadFile(this.files[i]);
//	}
		this.loadFile(this.files[0]);
};

/**
 * Loads a file.
 * @param {String} filename The name of the file.
 */
Benchmark.prototype.loadFile = function(filename) {
	var loadTime, textFile = '';
/*var file = {name: filename, size: 0, type: '', lastModifiedDate: null, webkitRelativePath: ''};
console.dir(file);

var blob = new Blob(["Hello world!"], { type: "text/plain" });
console.log('blob');
console.dir(blob);*/

//filelist = new FileList(blob);

console.log('loadFile: ' + name);

	timerStart = Date.now();
	loading = true;
	$('#buffer').load('http://xtec.cat/~jciberta/webGraphEd/binary-tree2.gml');
/*	$('#buffer').load('http://xtec.cat/~jciberta/webGraphEd/binary-tree2.gml', function() {
		loading = false;
		alert( "Load was performed." );
	});*/
//	while (loading) {};
	loadTime = (Date.now()-timerStart)/1000;
	
console.log('loadTime: ' + loadTime + ' s.');

	// Wait until the file is loaded
	while (textFile == '') {
		textFile = document.getElementById('buffer').innerHTML;
	}
console.log('textFile: ' + textFile);
	layout.importGML(textFile);


	// HORIZONTAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutHorizontalTree(container);
		loadTime = (Date.now()-timerStart)/1000;
console.log('HORIZONTAL_TREE: ' + loadTime + ' s.');
		
	
	
	
};

/*
function readFile(that) {
console.log('that: ' + that);
console.log('that.files[0]: ' + that.files[0]);
//	var output = null;
//  textFileName = that.files[0];
	if (that.files && that.files[0]) {
		timerStart = Date.now();
		newLayout();
		var reader = new FileReader();
		reader.onload = function (e) {  
			textFile = e.target.result;
			textFileName = that.files[0].name;
console.log('textFileName: ' + textFileName);

			importFile(textFileName);
			updateMenu(layout.graph);
//			clearCanvas();
console.log('textFileName: ' + textFileName);
			document.title = 'webGraphEd - ' + textFileName;
			statusBarMessage = 'File loaded in ' + (Date.now()-timerStart)/1000 + ' s.';
			updateStatusBar();
//console.log('output: ' + output);
		};
		reader.readAsText(that.files[0]);
	}
} */




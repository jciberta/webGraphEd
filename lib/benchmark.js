
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
	this.waiting = false;
}

/**
 * Starts the benchmark.
 */
Benchmark.prototype.start = function() {
	var i;

	document.body.style.cursor = 'wait';
	this.menuBarDiv = document.getElementById('menuBar');
	this.mainDiv = document.getElementById('main');
	this.statusBarDiv = document.getElementById('statusBar');
	this.logDiv = document.getElementById('log');
	this.logDiv.style.display = '';
	this.logDiv.innerHTML = '<h2>Benchmark results</h2>';
//	HEIGHT = HEIGHT / 2;

	this.results = []
	for (i=0; i<this.files.length; i++) {
		this.loadFile(this.files[i]);
	}
//		this.loadFile(this.files[0]);
};

/**
 * Loads a file.
 * @param {String} filename The name of the file.
 */
Benchmark.prototype.loadFile = function(filename) {
	var timerStart, loadTime, loadFileTime, textFile = '';
	var layoutHorizontalTreeTime, layoutVerticalTreeTime, layoutRadialTreeTime, layoutForceDirected;

	var url = String(window.location);
	var path = getBaseFromURL(url);
	var filenameURL = path + '/' + filename
console.log('filenameURL: ' + filenameURL);

	timerStart = Date.now();

	self = this;

	$('#buffer').load(filenameURL, function(response, status, xhr) {
		if (status == "error") {
			alert('Error ' + xhr.status + ' ' + xhr.statusText);
			throw 'Benchmark Aborted.'
		}
		self.logDiv.innerHTML += '<h3>File ' + filename + '</h3>';
		self.logDiv.innerHTML += '<ul>';
		textFile = document.getElementById('buffer').innerHTML;
		layout.importGML(textFile);
		loadFileTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Load file: ' + loadFileTime + '</li>';

		// HORIZONTAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutHorizontalTree(container);
		layoutHorizontalTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Horizontal tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('HORIZONTAL_TREE: ' + layoutHorizontalTreeTime + ' s.');
		
		// VERTICAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutVerticalTree(container);
		layoutVerticalTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Vertical tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('VERTICAL_TREE: ' + layoutVerticalTreeTime + ' s.');

		// RADIAL_TREE
		timerStart = Date.now();
		clearCanvas();
		layout.layoutRadialTree(container);
		layoutRadialTreeTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Radial tree: ' + layoutHorizontalTreeTime + '</li>';
console.log('RADIAL_TREE: ' + layoutRadialTreeTime + ' s.');
	
		// FORCE_DIRECTED
		timerStart = Date.now();
		clearCanvas();
		layout.layoutForceDirected(container);
		layoutForceDirectedTime = (Date.now()-timerStart)/1000;
		self.logDiv.innerHTML += '<li>Force directed: ' + layoutForceDirectedTime + '</li>';
console.log('FORCE_DIRECTED: ' + layoutForceDirectedTime + ' s.');

		self.logDiv.innerHTML += '</ul>';
	
		var layoutTime = {
			loadFile: loadFileTime, 
			horizontalTree: layoutHorizontalTreeTime, 
			verticalTree: layoutVerticalTreeTime, 
			radialTree: layoutRadialTreeTime, 
			forceDirected: layoutForceDirectedTime
		};

		self.results.push({filename: filename, time: layoutTime});
console.log('this.results:' + JSON.stringify(self.results));
		
		layout.clear();	
		if (filename == self.lastFile()) {
			self.menuBarDiv.style.display = 'none';
			self.mainDiv.style.display = 'none';
			self.statusBarDiv.style.display = 'none'; 
			document.body.style.cursor = 'default';

			showResults();
		}
	});
};

/**
 * Show results.
 */
Benchmark.prototype.showResults = function() {
	var i, text = 'Benchmark results\n\n';

	for (i=0; i<this.results.length; i++) {
		text += 'File ' + this.results[i].filename + '\n';
		text += '  - LoadFile: ' + this.results[i].time.loadFile + '\n';
		text += '  - HorizontalTree: ' + this.results[i].time.horizontalTree + '\n';
		text += '  - VerticalTree: ' + this.results[i].time.verticalTree + '\n';
		text += '  - RadialTree: ' + this.results[i].time.radialTree + '\n';
		text += '  - ForceDirected: ' + this.results[i].time.forceDirected + '\n';
	}
	alert(text);
}

/**
 * Returns the last file of the benchmark.
 * @return {string} The last file of the benchmark.
 */
Benchmark.prototype.lastFile = function() {
	var i = this.files.length;
	return i==0 ? null : this.files[i-1];
}


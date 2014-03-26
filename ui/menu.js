/*
var dialogAbout = new goog.ui.Dialog();
dialogAbout.setContent('<h1>webGraphEd</h1>' +
	'Graph drawing editor for the web.<br><br> ' +
	'License: ');
dialogAbout.setTitle('About webGraphEd');
dialogAbout.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogProperties = new goog.ui.Dialog();
dialogProperties.setTitle('Properties');
dialogProperties.setButtonSet(goog.ui.Dialog.ButtonSet.OK);
*/


function readFile(that) {
//console.log('that: ' + that);
//console.log('that.files[0]: ' + that.files[0]);
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
} 


function showAbout() {
	dialogAbout.setVisible(true);
}


function showProperties() {
  dialogProperties.setContent("<h1>Graph drawing properties</h1>" +
  "Connected graph: " + (layout.graph.isConnected() ? "yes" : "no") + '<br>' +
  "Cyclic graph: " + (layout.graph.isCyclic() ? "yes" : "no") + '<br>' +
  "Tree: " + (layout.graph.isTree() ? "yes" : "no") + '<br>' +
  "Binary tree: " + (layout.graph.isBinaryTree() ? "yes" : "no") + '<br>');
	dialogProperties.setVisible(true);
}

function exportToGML() {
console.log('exportToGML');
  layout.exportGML();
}

function exportToGraphML() {
console.log('exportToGraphML');
  layout.exportGraphML();
}

function newLayout() {

	// Clear the canvas
	clearCanvas();
	
	
/*	// Remove the SVG element
	var element = document.getElementById("canvas");
	element.parentNode.removeChild(element);

	// Insert the SVG element
	createCanvas();
/*  vis = d3.select("#main")
    .append("svg:svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    .attr("id", "canvas")
  frame = d3.select("svg")
    .append("svg:rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("fill", "none");
*/
	// Clear the layout
	layout.clear();

	updateMenu(false);
}

function importFile(filename) {
    var ext = getFileExtension(filename).toUpperCase();
    filename = filename.substr(0, filename.lastIndexOf('.')); // Trim the file extension
    layout.setFileName(filename); 
//console.log('getFileExtension: ' + ext);
    if (ext == 'GML') {
        layout.importGML(textFile);
    }
    else if (ext == 'GRAPHML') {
        layout.importGraphML(textFile);
    }
    else {
        alert("Format not supported!"); 
        throw "Format not supported!";
    }
}





// Create programmatic menu bar with menus.
//buildMenu = function(rootNode) {
//function buildMenu(rootNode) {

function updateMenu(graph) {
    if ((graph==true) || (graph==false)) {
        menuFileProperties.setEnabled(graph);
        menuTree.setEnabled(graph);	
        menuVerticalTree.setEnabled(graph);
        menuRadialTree.setEnabled(graph);
        menuForceDirected.setEnabled(graph);
        menuFileExportToGML.setEnabled(graph);
        menuFileExportToGraphML.setEnabled(graph);
    }
    else {
        menuFileProperties.setEnabled(true);
        var bIsTree = graph.isTree();
        menuTree.setEnabled(bIsTree);	
        menuVerticalTree.setEnabled(bIsTree);	
        menuRadialTree.setEnabled(bIsTree);
        menuForceDirected.setEnabled(true);
        menuFileExportToGML.setEnabled(true);
        menuFileExportToGraphML.setEnabled(true);
    }
}

function updateStatusBar() { 
	var sHTML = '';
	
	sHTML += '<TABLE><TR>';
	sHTML += '<TD style="width:200px"><B>Filename</B>: ' + textFileName + '</TD>';
	if (d3.event == null) 
		sHTML += '<TD style="width:100px"><B>Zoom</B>: </TD>';
	else
		sHTML += '<TD style="width:100px"><B>Zoom</B>: ' + Math.floor(d3.event.scale*100) + '%</TD>';
	if (PAN_AND_ZOOM) 
        sHTML += '<TD style="width:200px"><B>Mode</B>: Pan & Zoom</TD>';
    else
        sHTML += '<TD style="width:200px"><B>Mode</B>: Edit</TD>';
	sHTML += '<TD>' + statusBarMessage + '</TD>';
	sHTML += '</TR></TABLE>';
	document.getElementById('statusBar').innerHTML = sHTML;
}

function updatePanAndZoom(bValue) {
    PAN_AND_ZOOM = bValue;
	if (PAN_AND_ZOOM) {
/*		oldTranslate = d3.event.translate;
		oldScale = d3.event.scale;
console.log('oldTranslate: ' + oldTranslate);
console.log('oldScale: ' + oldScale);*/
	}
    menuPanZoomMode.setChecked(PAN_AND_ZOOM); 
    menuEditMode.setChecked(!PAN_AND_ZOOM);    
    updateStatusBar();
}


var menubar = goog.ui.menuBar.create();
/*    var menuNames = ['File', 'Layout', 'Help'];
    var menuOptions = [];
    menuOptions[0] = ['New', 'Open', null, 'Exit'];
    menuOptions[1] = ['Tree', 'Radial tree', 'Force directed'];
    menuOptions[2] = ['About'];
*/

// File menu
var menuFile = new goog.ui.Menu();
var menuFileNew = new goog.ui.MenuItem('New'); 
menuFileNew.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileNew); 
var menuFileOpen = new goog.ui.MenuItem('Open'); 
menuFileOpen.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileOpen); 
menuFile.addItem(new goog.ui.MenuSeparator());
var menuFileExportToGML = new goog.ui.MenuItem('Export to GML');
menuFileExportToGML.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileExportToGML); 
var menuFileExportToGraphML = new goog.ui.MenuItem('Export to GraphML');
menuFileExportToGraphML.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileExportToGraphML); 
menuFile.addItem(new goog.ui.MenuSeparator());
var menuFileProperties = new goog.ui.MenuItem('Properties');
menuFileProperties.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileProperties); 
menuFile.addItem(new goog.ui.MenuSeparator());
var menuFileExit = new goog.ui.MenuItem('Exit');
menuFileExit.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuFile.addItem(menuFileExit); 

var btnFile = new goog.ui.MenuButton('File', menuFile);
btnFile.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnFile, true);
goog.events.listen(btnFile, goog.ui.Component.EventType.ACTION, function(e) {
	if (e.target && e.target.getCaption() == 'New') {
		newLayout();
		document.title = 'webGraphEd';
		}
	else if (e.target && e.target.getCaption() == 'Open') {
		$('#openFile').click();
	}
	else if (e.target && e.target.getCaption() == 'Export to GML') {
		exportToGML();
	}
	else if (e.target && e.target.getCaption() == 'Export to GraphML') {
		exportToGraphML();
	}
	else if (e.target && e.target.getCaption() == 'Properties') {
//console.log('showProperties: ');
		showProperties();
	}
});	
	
// Edit menu
var menuEdit = new goog.ui.Menu();
var menuPanZoomMode = new goog.ui.CheckBoxMenuItem('Pan & Zoom');
//menuPanZoomMode.setSelectable(true);
menuPanZoomMode.setCheckable(true);
menuPanZoomMode.setChecked(true);
menuPanZoomMode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuPanZoomMode); 
var menuEditMode = new goog.ui.CheckBoxMenuItem('Edit');
//menuEditMode.setSelectable(true);
menuEditMode.setCheckable(true);
menuEditMode.setChecked(false);
menuEditMode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuEditMode); 
menuEdit.addItem(new goog.ui.MenuSeparator());
var menuAddNode = new goog.ui.MenuItem('Add node');
menuAddNode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuAddNode); 

var btnEdit = new goog.ui.MenuButton('Edit', menuEdit);
btnEdit.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnEdit, true);
goog.events.listen(btnEdit, goog.ui.Component.EventType.ACTION, function(e) {
//console.log('listen');
	if (e.target && e.target.getCaption() == 'Pan & Zoom') {
        updatePanAndZoom(true);
	}
	else if (e.target && e.target.getCaption() == 'Edit') {
        updatePanAndZoom(false);
	}
	else if (e.target && e.target.getCaption() == 'Add node') {
//console.log('layout: ' + JSON.stringify(layout));
console.log('Add node');
		layout.addNode();
	}
});	


    
// Layout menu
var menuLayout = new goog.ui.Menu();
var menuTree = new goog.ui.MenuItem('Horizontal Tree');
menuTree.setEnabled(false);	
menuTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuTree); 
var menuVerticalTree = new goog.ui.MenuItem('Vertical tree');
menuVerticalTree.setEnabled(false);	
menuVerticalTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuVerticalTree); 
var menuRadialTree = new goog.ui.MenuItem('Radial tree'); 
menuRadialTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuRadialTree); 
menuLayout.addItem(new goog.ui.MenuSeparator());
var menuForceDirected = new goog.ui.MenuItem('Force directed');
menuForceDirected.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuForceDirected); 
updateMenu(false);

var btnLayout = new goog.ui.MenuButton('Layout', menuLayout);
btnLayout.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnLayout, true);
goog.events.listen(btnLayout, goog.ui.Component.EventType.ACTION, function(e) {
	if (e.target && e.target.getCaption() == 'Horizontal Tree') {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutHorizontalTree(canvas);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
	else if (e.target && e.target.getCaption() == 'Vertical tree') {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutVerticalTree(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
	else if (e.target && e.target.getCaption() == 'Radial tree') {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutRadialTree(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
		else if (e.target && e.target.getCaption() == 'Force directed') {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutForceDirected(canvas);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
});	

// Help menu
var menuHelp = new goog.ui.Menu();
var menuDocumentation = new goog.ui.MenuItem('Documentation'); 
menuDocumentation.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuHelp.addItem(menuDocumentation); 
menuHelp.addItem(new goog.ui.MenuSeparator());
var menuAbout = new goog.ui.MenuItem('About'); 
menuAbout.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuHelp.addItem(menuAbout); 
var btnAbout = new goog.ui.MenuButton('Help', menuHelp);
btnAbout.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnAbout, true);
goog.events.listen(btnAbout, goog.ui.Component.EventType.ACTION, function(e) {
	if (e.target && e.target.getCaption() == 'Documentation') {
		window.open("doc/index.html");
	}
	else if (e.target && e.target.getCaption() == 'About') {
		showAbout();
	}
});	

updateMenu(false);


menubar.render(goog.dom.getElement('menuBar'));




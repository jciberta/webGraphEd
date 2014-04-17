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

function showDebug() {
console.log('showDebug:');
	var i, s = '';

	s += '<b>GraphDrawing object</b><br>';
	s += '<ul>';
	s += '<li> List of nodes: ' + layout.graph.listNodes + '</li><br>';
	s += '<li> List of edges: ' + layout.graph.listEdges + '</li><br>';
	s += '</ul>';
	s += '<b>Layout object</b><br>';
	s += '<pre>';
	s += '  - layout keys: ' + Object.keys(layout) + '<br>';
	s += '  - layout.layout keys: ' + Object.keys(layout.layout) + '<br>';
	s += '  - Nodes keys: ' + Object.keys(layout.layout.nodes) + '<br>';
	s += '  - Links keys: ' + Object.keys(layout.layout.links) + '<br>';
	s += '  - isCollapsed? ' + layout.isCollapsed() + '<br>';
	s += '</pre>';

	dialogDebug.setContent(s);
console.dir(layout.layout.nodes);
console.dir(layout.layout.links);
	dialogDebug.setVisible(true);
}

function showNodeProperties(d) {
	var i, s = '';
	
	chooseNodeProperties(4);
	//openprompt();
	return;

	s += '<b>Shape</b><br>';
	s += '<input type="radio" name="shape" value="circle">Circle<br>';
	s += '<input type="radio" name="shape" value="square">Square';
	s += '</form>';
	s += '<br>';
	s += '<div id="cp"></div>';
	s += '<script type="text/javascript">';
	s += "createColorPaletteDemo(['black', 'blue', 'red', 'magenta', 'green', 'cyan', 'orange', 'yellow', ";
	s += "'#404040', '#808080', '#b0b0b0', 'white'], 4, ";
	s += "'This is a 4x3 color palette with named colors:');";
	s += 'console.log("Inside showNodeProperties")';
	s += '</script>';
	s += '<form>';
	s += '<b>Color</b><br>';
console.log(s);
	dialogNodeProperties.setContent(s);
//	dialogNodeProperties.setVisible(true);
	
/*
window.open("http://www.w3schools.com","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
window.open('http://www.quackit.com/common/link_builder.cfm','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');	
*/

window.open("nodeProperties.html","_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");

/*
var popupWindow = null;
function centeredPopup(url,winName,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}
centeredPopup(this.href,'myWindow','500','300','yes');*/

}


function exportToGML() {
	layout.exportGML();
}

function exportToGraphML() {
	layout.exportGraphML();
}

function newLayout() {
	clearCanvas();
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
//        menuFileProperties.setEnabled(graph);
        menuTree.setEnabled(graph);	
        menuVerticalTree.setEnabled(graph);
        menuRadialTree.setEnabled(graph);
        menuForceDirected.setEnabled(graph);
        menuFileExportToGML.setEnabled(graph);
        menuFileExportToGraphML.setEnabled(graph);
    }
    else {
//        menuFileProperties.setEnabled(true);
        isTree = graph.isTree();
        menuTree.setEnabled(isTree);	
        menuVerticalTree.setEnabled(isTree);	
        menuRadialTree.setEnabled(isTree);
        menuForceDirected.setEnabled(true);
        menuFileExportToGML.setEnabled(true);
        menuFileExportToGraphML.setEnabled(true);
    }
}

function updateStatusBar() { 
	var sHTML = '';
	pz = getPanAndZoom();
//console.log('pz: ' + JSON.stringify(pz));
	
	sHTML += '<TABLE><TR>';
	sHTML += '<TD style="width:200px"><B>Filename</B>: ' + textFileName + '</TD>';
	if (pz == null) {
//	if (d3.event == null) {
		sHTML += '<TD style="width:100px"><B>Zoom</B>: </TD>';
		sHTML += '<TD style="width:100px"><B>Pan</B>: </TD>';
	} else {
		sHTML += '<TD style="width:100px"><B>Zoom</B>: ' + Math.floor(pz.scale*100) + '%</TD>';
//		sHTML += '<TD style="width:100px"><B>Zoom</B>: ' + Math.floor(d3.event.scale*100) + '%</TD>';
//		sHTML += '<TD style="width:200px"><B>Pan</B>: ' + d3.event.translate + '</TD>';
		sHTML += '<TD style="width:200px"><B>Pan</B>: ' + Math.floor(pz.translate.x) + ',' + Math.floor(pz.translate.y) + '</TD>';
//console.dir(d3.event.translate);		
	}
/*	if (PAN_AND_ZOOM) 
        sHTML += '<TD style="width:200px"><B>Mode</B>: Pan & Zoom</TD>';
    else
        sHTML += '<TD style="width:200px"><B>Mode</B>: Edit</TD>';*/
	sHTML += '<TD>' + statusBarMessage + '</TD>';
	sHTML += '</TR></TABLE>';
	document.getElementById('statusBar').innerHTML = sHTML;
}

/*function updatePanAndZoom(bValue) {
    PAN_AND_ZOOM = bValue;
    menuPanZoomMode.setChecked(PAN_AND_ZOOM); 
    menuEditMode.setChecked(!PAN_AND_ZOOM);    
    updateStatusBar();
}*/


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
		showProperties();
	}
});	
	
// Edit menu
var menuEdit = new goog.ui.Menu();
/*var menuPanZoomMode = new goog.ui.CheckBoxMenuItem('Pan & Zoom');
menuPanZoomMode.setCheckable(true);
menuPanZoomMode.setChecked(true);
menuPanZoomMode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuPanZoomMode); 
var menuEditMode = new goog.ui.CheckBoxMenuItem('Edit');
menuEditMode.setCheckable(true);
menuEditMode.setChecked(false);
menuEditMode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuEditMode); 
menuEdit.addItem(new goog.ui.MenuSeparator());*/
/*var menuZoomIn = new goog.ui.MenuItem('Zoom in');
menuZoomIn.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuZoomIn); 
var menuZoomOut = new goog.ui.MenuItem('Zoom out');
menuZoomOut.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuZoomOut); */
var menuCenter = new goog.ui.MenuItem('Center');
menuCenter.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuCenter); 
var menuFit = new goog.ui.MenuItem('Fit');
menuFit.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuFit); 
menuEdit.addItem(new goog.ui.MenuSeparator());
var menuAddNode = new goog.ui.MenuItem('Add node');
menuAddNode.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuEdit.addItem(menuAddNode); 
var menuUncollapseAll = new goog.ui.MenuItem('Uncollapse all');
menuUncollapseAll.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuUncollapseAll.setEnabled(false);
menuUncollapseAll.setEnabled(false);
menuEdit.addItem(menuUncollapseAll); 

var btnEdit = new goog.ui.MenuButton('Edit', menuEdit);
btnEdit.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnEdit, true);
goog.events.listen(btnEdit, goog.ui.Component.EventType.ACTION, function(e) {
//console.log('listen');
/*	if (e.target && e.target.getCaption() == 'Pan & Zoom') {
        updatePanAndZoom(true);
	}
	else if (e.target && e.target.getCaption() == 'Edit') {
        updatePanAndZoom(false);
	}
	else if (e.target && e.target.getCaption() == 'Zoom in') {
		zoomIn();
	}
	else if (e.target && e.target.getCaption() == 'Zoom out') {
		zoomOut();
	}
	else if (e.target && e.target.getCaption() == 'Zoom out') {
        updatePanAndZoom(false);
	}*/
	if (e.target && e.target.getCaption() == 'Center') {
        layout.center();
	}
	else if (e.target && e.target.getCaption() == 'Fit') {
        layout.fit();
	}
	else if (e.target && e.target.getCaption() == 'Add node') {
//console.log('layout: ' + JSON.stringify(layout));
console.log('Add node');
		layout.addNode((-WIDTH/4+30), (-HEIGHT/4+30));
//		layout.addNode(0, 0);
	}
	else if (e.target && e.target.getCaption() == 'Uncollapse all') {
        layout.uncollapseAll();
	}
});	


    
// Layout menu
var menuLayout = new goog.ui.Menu();
var menuTree = new goog.ui.MenuItem(HORIZONTAL_TREE);
menuTree.setEnabled(false);	
menuTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuTree); 
var menuVerticalTree = new goog.ui.MenuItem(VERTICAL_TREE);
menuVerticalTree.setEnabled(false);	
menuVerticalTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuVerticalTree); 
var menuRadialTree = new goog.ui.MenuItem(RADIAL_TREE); 
menuRadialTree.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuRadialTree); 
menuLayout.addItem(new goog.ui.MenuSeparator());
var menuForceDirected = new goog.ui.MenuItem(FORCE_DIRECTED);
menuForceDirected.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuLayout.addItem(menuForceDirected); 
updateMenu(false);

var btnLayout = new goog.ui.MenuButton('Layout', menuLayout);
btnLayout.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menubar.addChild(btnLayout, true);
goog.events.listen(btnLayout, goog.ui.Component.EventType.ACTION, function(e) {
	if (e.target && e.target.getCaption() == HORIZONTAL_TREE) {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutHorizontalTree(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
	else if (e.target && e.target.getCaption() == VERTICAL_TREE) {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutVerticalTree(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
	else if (e.target && e.target.getCaption() == RADIAL_TREE) {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutRadialTree(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
		else if (e.target && e.target.getCaption() == FORCE_DIRECTED) {
		timerStart = Date.now();
		clearCanvas();
		layout.layoutForceDirected(container);
		statusBarMessage = 'Layout done in ' + (Date.now()-timerStart)/1000 + ' s.';
		updateStatusBar();
	}
});	

// Help menu
var menuHelp = new goog.ui.Menu();
if (DEBUG) {
	var menuDebug = new goog.ui.MenuItem('Debug'); 
	menuDebug.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
	menuHelp.addItem(menuDebug); 
}
var menuContents = new goog.ui.MenuItem('Contents'); 
menuContents.setDispatchTransitionEvents(goog.ui.Component.State.ALL, true);
menuHelp.addItem(menuContents); 
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
	if (e.target && e.target.getCaption() == 'Debug') {
		showDebug();
	}
	else if (e.target && e.target.getCaption() == 'Contents') {
		window.open("help.html");
	}
	else if (e.target && e.target.getCaption() == 'Documentation') {
		window.open("doc/index.html");
	}
	else if (e.target && e.target.getCaption() == 'About') {
		showAbout();
	}
});	

updateMenu(false);

menubar.render(goog.dom.getElement('menuBar'));




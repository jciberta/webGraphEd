
/*
User interface:

	<div id="menuBar"></div>
	<div id="main"></div>
	<div id="statusBar"></div>
	<div id='fileDialog'>
		<input type="file" id="openFile" style="display:none" onchange='readFile(this)' />
	</div>
	<div id="buffer" style="display:none"></div>
	<div id="log" style="display:none"></div>
	
*/

var menuBarDiv = document.createElement('div');
menuBarDiv.id = 'menuBar';
var mainDiv = document.createElement('div');
mainDiv.id = 'main';
var statusBarDiv = document.createElement('div');
statusBarDiv.id = 'statusBar';
var fileDialogDiv = document.createElement('div');
fileDialogDiv.id = 'fileDialog';
fileDialogDiv.innerHTML = '<input type="file" id="openFile" style="display:none" onchange="readFile(this)" />'
var bufferDiv = document.createElement('div');
bufferDiv.id = 'buffer';
bufferDiv.style.display = 'none';
var logDiv = document.createElement('div');
logDiv.id = 'log';
logDiv.style.display = 'none';

document.body.appendChild(menuBarDiv);
document.body.appendChild(mainDiv);
document.body.appendChild(statusBarDiv);
document.body.appendChild(fileDialogDiv);
document.body.appendChild(bufferDiv);
document.body.appendChild(logDiv);

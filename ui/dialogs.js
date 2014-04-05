
var dialogAbout = new goog.ui.Dialog();
dialogAbout.setTitle('About webGraphEd');
dialogAbout.setContent('<h1>webGraphEd</h1>' +
	'Graph drawing editor for the web.<br><br> ' +
	'License: ');
dialogAbout.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogProperties = new goog.ui.Dialog();
dialogProperties.setTitle('Properties');
dialogProperties.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogDebug = new goog.ui.Dialog();
dialogDebug.setTitle('Debug information');
dialogDebug.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogNodeProperties = new goog.ui.Dialog();
dialogNodeProperties.setTitle('Node properties');
dialogNodeProperties.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


// Color Palette 
function createColorPaletteDemo(colors, width, caption) {
	goog.dom.getElement('cp').appendChild(goog.dom.createDom('p', null, caption));
	var cp = new goog.ui.ColorPalette(colors);
	cp.setSize(width); // If we only set the columns, the rows are calculated.
	cp.render(goog.dom.getElement('cp'));
	goog.events.listen(cp, goog.ui.Component.EventType.ACTION, onColorEvent);
	goog.events.listen(cp, EVENTS, logEvent);
	return cp;
}

function onColorEvent(e) {
	var palette = e.target;
	var color = palette.getSelectedColor();
//	goog.style.setStyle(goog.dom.getElement('cp_value'), 'background-color', color);
//	goog.dom.getElement('cp_value').title = color;
//	goog.dom.getElement('cp_text').innerHTML = goog.color.parse(color).hex;
}

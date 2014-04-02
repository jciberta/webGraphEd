
var dialogAbout = new goog.ui.Dialog();
dialogAbout.setContent('<h1>webGraphEd</h1>' +
	'Graph drawing editor for the web.<br><br> ' +
	'License: ');
dialogAbout.setTitle('About webGraphEd');
dialogAbout.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogProperties = new goog.ui.Dialog();
dialogProperties.setTitle('Properties');
dialogProperties.setButtonSet(goog.ui.Dialog.ButtonSet.OK);


var dialogDebug = new goog.ui.Dialog();
dialogDebug.setTitle('Debug information');
dialogDebug.setButtonSet(goog.ui.Dialog.ButtonSet.OK);

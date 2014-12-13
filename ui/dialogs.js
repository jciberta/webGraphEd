
var dialogAbout = new goog.ui.Dialog();
dialogAbout.setTitle('About webGraphEd');
dialogAbout.setContent('<h1>webGraphEd</h1>' +
	'Graph drawing editor for the web.<br><br> ' +
	'License: <a href="http://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPL version 3</a><br>' +
	'Source code: <a href="https://github.com/jciberta/webGraphEd">https://github.com/jciberta/webGraphEd</a><br><br>' +
    'Used libraries:<br>' + 
    '- D3 version 3.4.6: BSD license<br>' +
    '- Closure: Apache 2.0 license<br>' +
    '- QUnit version 1.12.0: MIT license<br>' +
    '- JQuery version 2.1.0: MIT license<br>' +
    '- JQuery Impromptu version 5.2.3: MIT license<br>' +
    '- FileSaver: MIT/X11 license<br>' +
    '<br>' + 
    'A copy of these licenses can be found within the source code.' +
    '<br><br>' + 
	'<center>' +
	'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
	'<input type="hidden" name="cmd" value="_s-xclick">' +
	'<input type="hidden" name="hosted_button_id" value="57GZRNXAJS8F2">' +
	'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
	'<img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">' +
	'</form>' +
	'</center>' 
);
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
/*function createColorPaletteDemo(colors, width, caption) {
	goog.dom.getElement('cp').appendChild(goog.dom.createDom('p', null, caption));
	var cp = new goog.ui.ColorPalette(colors);
	cp.setSize(width); // If we only set the columns, the rows are calculated.
	cp.render(goog.dom.getElement('cp'));
	goog.events.listen(cp, goog.ui.Component.EventType.ACTION, onColorEvent);
	goog.events.listen(cp, EVENTS, logEvent);
	return cp;
}*/

/*function onColorEvent(e) {
	var palette = e.target;
	var color = palette.getSelectedColor();
//	goog.style.setStyle(goog.dom.getElement('cp_value'), 'background-color', color);
//	goog.dom.getElement('cp_value').title = color;
//	goog.dom.getElement('cp_text').innerHTML = goog.color.parse(color).hex;
}*/


function chooseNodeProperties(d) {
	// Default values
	if (d.shape == undefined) d.shape = DEFAULT_SHAPE;
	if (d.color == undefined) d.color = DEFAULT_COLOR_NODE;

	function listShapes(d) {
		var aShapes = ['Circle', 'Square'];
		var i, s = '';
		
		for (i=0; i<aShapes.length; i++) {
			if (i % 5 == 0) s += '<tr>'; 
			s += '<td><input type="radio" name="shape" value="' + aShapes[i] + '" ' + (d.shape==aShapes[i] ? 'checked="checked"' : '') + '>' + aShapes[i] + '</td>';
			if ((i+1) % 5 == 0) s += '</tr>'; 
		}
//console.log('s: ' + s);		
		return s;
	}
	
	function listColors(d) {
		var aColors = ['Red', 'White', 'Cyan', 'Silver', 'Blue', 'Gray', 'DarkBlue', 'Black', 'LightBlue', 'Orange', 'Purple', 'Brown', 'Yellow', 'Maroon', 'Lime', 'Green', 'Magenta', 'Olive'];
		var i, s = '';
		
		for (i=0; i<aColors.length; i++) {
			if (i % 5 == 0) s += '<tr>'; 
			s += '<td><input type="radio" name="color" value="' + aColors[i] + '" ' + (d.color==aColors[i] ? 'checked="checked"' : '') + '>' + aColors[i] + '</td>';
			if ((i+1) % 5 == 0) s += '</tr>'; 
		}
//console.log('s: ' + s);		
		return s;
	}
	
	var txt = '<h1>Node Properties</h1>'+
		'Select shape:<br>' +
		'<table>' + listShapes(d) + '</table>' +
		'<br>Select color:<br>' +
		'<table>' + listColors(d) + '</table>';

	$.prompt(txt, { 
		buttons: {Change:true, Cancel:false},
		submit: function(e, v, m, f) {
			// This is simple pre submit validation, the submit function
			// return true to proceed to the callback, or false to take 
			// no further action, the prompt will stay open.
			var flag = true;
			// ...
			return flag;
		},
		close: function(e, v, m, f) {
			if (v) {
				var n;
				$.each(f, function(i, obj) {
					n = layout.graph.getNode(d.id);
					switch (i) {
						case 'shape': 
							n[2] = obj; 
							d.shape = obj; 
							layout.changeNodeShape(d); 
							break;
						case 'color': 
							n[3] = obj; 
							d.color = obj; 
							layout.changeNodeColor(d); 
							break;
					}
				});	
//				layout.update();
			}
			else {}
		},
		overlayspeed: 'fast',
		promptspeed: 'fast',
		show: 'show'
	});
}

/**
 * Open a dialog for choosing link properties.
 * @param {Object} d The link object.
 */
function chooseLinkProperties(d) {
	// Default values
	if (d.width == undefined) d.width = DEFAULT_WIDTH;
	if (d.color == undefined) d.color = DEFAULT_COLOR_LINK;

	function listWidths(d) {
		var aWidths = ['2', '4'];
		var i, s = '';
		
		for (i=0; i<aWidths.length; i++) {
			if (i % 5 == 0) s += '<tr>'; 
			s += '<td><input type="radio" name="width" value="' + aWidths[i] + '" ' + (d.width==aWidths[i] ? 'checked="checked"' : '') + '>' + aWidths[i] + '</td>';
			if ((i+1) % 5 == 0) s += '</tr>'; 
		}
		return s;
	}
	
	function listColors(d) {
		var aColors = ['Red', 'White', 'Cyan', 'Silver', 'Blue', 'Gray', 'DarkBlue', 'Black', 'LightBlue', 'Orange', 'Purple', 'Brown', 'Yellow', 'Maroon', 'Lime', 'Green', 'Magenta', 'Olive'];
		var i, s = '';
		
		for (i=0; i<aColors.length; i++) {
			if (i % 5 == 0) s += '<tr>'; 
			s += '<td><input type="radio" name="color" value="' + aColors[i] + '" ' + (d.color==aColors[i] ? 'checked="checked"' : '') + '>' + aColors[i] + '</td>';
			if ((i+1) % 5 == 0) s += '</tr>'; 
		}
		return s;
	}
	
	var txt = '<h1>Link Properties</h1>'+
		'Select width:<br>' +
		'<table>' + listWidths(d) + '</table>' +
		'<br>Select color:<br>' +
		'<table>' + listColors(d) + '</table>';

	$.prompt(txt, { 
		buttons: {Change:true, Cancel:false},
		submit: function(e, v, m, f) {
			// This is simple pre submit validation, the submit function
			// return true to proceed to the callback, or false to take 
			// no further action, the prompt will stay open.
			var flag = true;
			// ...
			return flag;
		},
		close: function(e, v, m, f) {
			if (v) {
				var l;
				$.each(f, function(i, obj) {
					l = layout.graph.getLink(d.source.id, d.target.id);
					switch (i) {
						case 'width': 
							l[3] = obj; 
							d.width = obj; 
							layout.changeLinkWidth(d); 
							break;
						case 'color': 
							l[4] = obj; 
							d.color = obj; 
							layout.changeLinkColor(d); 
							break;
					}
				});	
//				layout.update();
			}
			else {}
		},
		overlayspeed: 'fast',
		promptspeed: 'fast',
		show: 'show'
	});
}

/*
function openprompt() {

	var temp = {
		state0: {
			title: 'Content Rating',
			html:'<label class="radio" for="rate_content_poor"><input type="radio" name="rate_content" id="rate_content_poor" value="Poor" class="radioinput" />Poor</label>'+
					'<label class="radio" for="rate_content_ok"><input type="radio" name="rate_content" id="rate_content_ok" value="Ok" class="radioinput" />Ok</label>'+
					'<label class="radio" for="rate_content_good"><input type="radio" name="rate_content" id="rate_content_good" value="Good" class="radioinput" />Good</label>'+
					'<label class="radio" for="rate_content_excellent"><input type="radio" name="rate_content" id="rate_content_excellent" value="Excellent" class="radioinput" />Excellent!</label>',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){ 
				if(!v)
					$.prompt.close()
				else $.prompt.goToState('state1');//go forward
				return false; 
			}
		},
		state1: {
			title: 'Needs Improvement',
			html:'<p>Check all which need improvement:</p>'+
					'<label class="checkbox" for="rate_improve_colors"><input type="checkbox" name="rate_improve" id="rate_improve_colors" value="Color Scheme" class="radioinput" />Color Scheme</label>'+
					'<label class="checkbox" for="rate_improve_graphics"><input type="checkbox" name="rate_improve" id="rate_improve_graphics" value="Graphics" class="radioinput" />Graphics</label>'+
					'<label class="checkbox" for="rate_improve_readability"><input type="checkbox" name="rate_improve" id="rate_improve_readability" value="readability" class="radioinput" />Readability</label>'+
					'<label class="checkbox" for="rate_improve_content"><input type="checkbox" name="rate_improve" id="rate_improve_content" value="Content" class="radioinput" />Content</label>'+
					'<label class="checkbox" for="rate_improve_other"><input type="checkbox" name="rate_improve" id="rate_improve_other" value="Other" class="radioinput" />Other</label>'+
					'<input type="text" name="rate_improve_other_txt" id="rate_improve_other_txt" value="" placeholder="Other Description" />',
			buttons: { Back: -1, Cancel: 0, Next: 1 },
			focus: 2,
			submit:function(e,v,m,f){
				if(v==0)
					$.prompt.close()
				else if(v==1)
					$.prompt.goToState('state2');//go forward
				else if(v=-1)
					$.prompt.goToState('state0');//go back
				return false; 
			}
		},
		state2: {
			title: 'How did you find this site?',
			html:'<select name="rate_find" id="rate_find"><option value="Search">Search</option><option value="Online Publication">Online Publication</option><option value="friend">A Friend</option><option value="No Clue">No Clue</option></select>',
			buttons: { Back: -1, Cancel: 0, Next: 1 },
			focus: 2,
			submit: function(e, v, m, f){
				if (v == 0) 
					$.prompt.close()
				else 
					if (v == 1) 
						$.prompt.goToState('state3');//go forward
					else 
						if (v = -1) 
							$.prompt.goToState('state1');//go back
				return false;
			}
		},
		state3: {
			title: 'Additional Comments',
			html:'<p>Please leave any other comments you have about this site:</p><div class="field"><textarea id="rate_comments" name="rate_comments"></textarea></div>',
			buttons: { Back: -1, Cancel: 0, Finish: 1 },
			focus: 2,
			submit:function(e,v,m,f){ 
				if(v==0) 
					$.prompt.close()
				else if(v==1)								
					return true; //we're done
				else if(v=-1)
					$.prompt.goToState('state2');//go back
				return false; 
			}
		}
	}
	
	$.prompt(temp,{
		close: function(e,v,m,f){
			var str = "You can now process with this given information:<br />";
			$.each(f,function(i,obj){
				str += i + " - <em>" + obj + "</em><br />";
			});	
			$('#results').html(str);
		},
		classes: {
			box: '',
			fade: '',
			prompt: '',
			close: '',
			title: 'lead',
			message: '',
			buttons: '',
			button: 'btn',
			defaultButton: 'btn-primary'
		}
	});
}*/

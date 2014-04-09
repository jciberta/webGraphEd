
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


function chooseNodeProperties(d) {
	// Default values
	if (d.shape == undefined) d.shape = 'Circle';
	if (d.color == undefined) d.color = 'White';

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
		}
	});
}


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
}

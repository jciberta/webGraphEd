
function console_listNodes(n) {
	var i;
	for (i=0; i<n.length; i++) {
		console.log(
			'id: ' + n[i].id + ', ' +
			'x: ' + n[i].x + ', ' +
			'y: ' + n[i].y + ', ' +
			'label: ' + n[i].label + ', ' +
			'visible: ' + n[i].visible + ', ' +
			'collapsed: ' + n[i].collapsed + ', ' 
		);
	}
}

function console_listLinks(l) {
	var i;
	for (i=0; i<l.length; i++) {
		console.log(
			'source.id: ' + l[i].source.id + ', ' +
			'source.visible: ' + l[i].source.visible + ', ' +
			'source.collapsed: ' + l[i].source.collapsed + ', ' +
			'target.id: ' + l[i].target.id + ', ' +
			'target.visible: ' + l[i].target.visible + ', ' +
			'target.collapsed: ' + l[i].target.collapsed + ', ' 
		);
	}
}
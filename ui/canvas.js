


function createCanvas() {
	canvas = d3.select("#main").append("svg")
		.attr("id", "canvas")
		.attr("width", WIDTH + margin.left + margin.right)
		.attr("height", HEIGHT + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.right + ")")
			.call(zoom);
			
	container = canvas.append("g")
		.attr("id", "container")
//		.attr("transform", "translate(" + margin.left + "," + margin.right + ")")
//		.call(zoom);
			
	frame = d3.select("svg")
//	frame = canvas
		.append("svg:rect")
			.attr("id", "frame")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("stroke", "#000")
			.attr("stroke-width", 1)
			.attr("fill", "none");			
}

function destroyCanvas() {
	var element = document.getElementById("canvas");
	element.parentNode.removeChild(element);
}

function clearCanvas() {
	// Remove the SVG element (canvas)
	destroyCanvas();

	// Insert the SVG element (canvas)
	createCanvas();
}





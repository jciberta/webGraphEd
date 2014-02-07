
/**
 * Gets the extension of a file
 * @param {string} filename The name of the file.
 * @return {string} The file extension.
 */
function getFileExtension(filename) {
	return filename.split('.').pop();
}

function readFile(that) {
alert("that:" + that.files[0]);
  var output;
	if (that.files && that.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {  
			output = e.target.result;
alert("e:" + output);
		};
		prova = reader.readAsText(that.files[0]);
alert("reader:" + output);
alert("prova:" + prova);
	}
  return output;
} 



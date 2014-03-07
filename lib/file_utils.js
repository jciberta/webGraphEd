
/**
 * Gets the extension of a file
 * @param {string} filename The name of the file.
 * @return {string} The file extension.
 */
function getFileExtension(filename) {
	return filename.split('.').pop();
}

/**
 * Gets the filename from a URL
 * @param {string} url The URL.
 * @return {string} The filename.
 */
function getFileNameFromURL(url) {
	return url.substring(url.lastIndexOf('/')+1);
}

/*function readFile(that) {
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
*/


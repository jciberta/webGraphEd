
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

/**
 * Gets the URL without the file and the following.
 * @param {string} url The URL.
 * @return {string} The base.
 */
function getBaseFromURL(url) {
	return url.substring(0, url.lastIndexOf('/'));
}

/**
 * Gets the path from a URL
 * @param {string} url The URL.
 * @return {string} The path.
 */
function getPathFromURL(url) {
console.log('url: ' + url);	
	var a = url.split('://');
	var i = a[1].lastIndexOf('/');
//console.log('a[1]: ' + a[1] + ', i: ' + i);	
//console.log('a[1]: ' + a[1] + ', s: ' + s);	
	return s = a[1].substring(0, i);
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


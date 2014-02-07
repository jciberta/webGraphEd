

function checkBrowserCompatibility() {
  // Check for the various File API support.
  return (window.File && window.FileReader && window.FileList && window.Blob && window.DOMParser);
} 

function installedPlugins() {
  var out = "";
  out = out + "<table cellspacing='4' cellpadding='4'>";
  out = out + "<tr><th bgcolor='#CCCCCC'>Name<\/th><th bgcolor='#CCCCCC'>File<\/th><th bgcolor='#CCCCCC'>Description<\/th><\/tr>";
  for (i=0; i<navigator.plugins.length; i++) {
	  thisPlugin = navigator.plugins[i]
	  out = out + "<tr valign='top'><td bgcolor='#CCCCCC'>" + thisPlugin.name;
	  out = out + "<\/td><td bgcolor='#CCCCCC'>" + thisPlugin.filename;
	  out = out + "<\/td><td bgcolor='#CCCCCC'>" + thisPlugin.description + "<\/td><\/tr>";
  }
  out = out + "<\/table>";
	return out;
}



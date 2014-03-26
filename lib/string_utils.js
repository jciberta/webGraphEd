// string_utils.js

/**
 * Gives format to s string like printf/string.format
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 * Example: "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
 * Output: ASP is dead, but ASP.NET is alive! ASP {2}
 */
String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function nextIndexOf(str, substr, from) {
  var str1 = str.substring(from, str.length);
//alert("str1: " + str1);
//alert("str1: " + str.indexOf(substr));
// ...
  return str.indexOf(substr);
} 

function getStringBetween(str, left, right) {
  var i, s = '';

  i = str.indexOf(left);
  if (i>0) {
    s = str.substring(i+left.length, str.length);
    i = s.indexOf(right);
    if (i>0) {
      s = s.substring(0, i);
    }
  }

  return s;
}

function nextWord(str, i) {
// Next word from position i
  var i, s;

  // Begin of the next word
  i = str.indexOf(' ', i);
  s = str.substring(i, str.length).trim() + ' '; 
  // End of the next word
  i = s.indexOf(' ');
  s = s.substring(0, i).trim();  
  return s;
}

function nextQuotedWord(str, i) {
// Next word from position i
  var i, s='';

  // Begin of the next word
  i = str.indexOf('"', i);
    if (i>=0) {
    s = str.substring(i+1, str.length).trim();  
  //console.log(s);
    // End of the next word
    i = s.indexOf('"');
    s = s.substring(0, i).trim();  
  }
//console.log(s);
  return s;
}


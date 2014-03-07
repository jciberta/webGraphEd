
// ----------------------------------------------------------------------------
//                             Global variables
// ----------------------------------------------------------------------------
var margin = {top: -5, right: -5, bottom: -5, left: -5};
var WIDTH = window.screen.availWidth - 40;
var HEIGHT = window.screen.availHeight - 150;

var textFile;
var textFileName = 'noname';

var svg, canvas, container, frame, rect;
var layout;

var PAN_AND_ZOOM = true;
var oldTranslate, oldScale;

var statusBarMessage = '';

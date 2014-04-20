
// ----------------------------------------------------------------------------
//                             Global variables
// ----------------------------------------------------------------------------
var margin = {top: -5, right: -5, bottom: -5, left: -5};
var WIDTH = window.screen.availWidth - 40;
var HEIGHT = window.screen.availHeight - 150;

var textFile;
var textFileName = 'noname';

var svg, canvas, container, frame, rect, vis;
var layout;

//var PAN_AND_ZOOM = true;
var BENCHMARK = false;
var EMBEDDED = false;
var oldTranslate, oldScale;

var statusBarMessage = '';

// In case of overlapping events, just execute one
//var doingAction = false;

// For drag and drop behaviour, and other
var source_node = null, source_object = null;
var target_node = null, target_object = null;
var selected_node = null, selected_object = null;
var linking = false; 
var coord = {x: 0, y: 0};
var pz = {translate: {x: 0, y: 0}, scale: 1}; // Pan & Zoom
var drag_line = null;

// Optimization
var isTree = false; // Global variable in order not to run so many times the DFS algorihms

// Layout types
HORIZONTAL_TREE = 'Horizontal tree';
VERTICAL_TREE = 'Vertical tree';
RADIAL_TREE = 'Radial tree';
FORCE_DIRECTED = 'Force directed';

// Debug mode
var DEBUG = true;

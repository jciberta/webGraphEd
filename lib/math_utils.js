// math_utils.js
// See http://en.wikipedia.org/wiki/Polar_coordinate_system

/**
 * Calculates cartesian x from a polar coordinates.
 * @param {real} r The radial coordinate.
 * @param {real} t The angular coordinate.
 * @return {real} The cartesian x coordinate.
 */
function cartesianX(r, t) {
	return r * Math.cos((t - 90) / 180 * Math.PI);
}

/**
 * Calculates cartesian y from a polar coordinates.
 * @param {real} r The radial coordinate.
 * @param {real} t The angular coordinate.
 * @return {real} The cartesian y coordinate.
 */
function cartesianY(r, t) {
	return r * Math.sin((t - 90) / 180 * Math.PI);
}

/**
 * Calculates radial coordinate from a cartesian coordinates.
 * @param {real} x The x coordinate.
 * @param {real} y The y coordinate.
 * @return {real} The radial coordinate.
 */
function polarR(x, y) {
	return Math.sqrt(x*x + y*y);
}

/**
 * Calculates angular coordinate from a cartesian coordinates.
 * @param {real} x The x coordinate.
 * @param {real} y The y coordinate.
 * @return {real} The angular coordinate.
 */
function polarT(x, y) {
	return Math.atan2(y, x);
}

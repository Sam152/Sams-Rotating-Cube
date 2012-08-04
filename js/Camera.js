/**
 * Creates and maintains an instance of a camera we can use.
 * 
 * @constructor
 * @author Sam
 * @this {Controller}
 */
function Camera(){

	// The aspect ratio of our room
	var aspect = Config.width / Config.height;

	// Create a new three camera instance.
	this.threeCamera = new THREE.PerspectiveCamera(
		75, 	// The field of view.
		aspect,	// The aspect ratio.
		1, 		// Near clipping plane.
		10000  	// Far clipping plane.
	);

	// Set an initial position of the Camera
	this.threeCamera.position.z = 1000;

}
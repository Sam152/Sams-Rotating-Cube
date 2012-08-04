/**
 * The application we are creating.
 *
 * @constructor
 * @this {Application}
 */
function Application(){

	// Create a camera instance
	this.camera = new Camera();

	// Create an instance of a three scene
	this.scene = new THREE.Scene();

	// Create a three renderer
	this.renderer = new THREE.CanvasRenderer();

	// Create a controls object to be used throughout the application.
	this.controls = new Controller();

	// Create an object for our application elements.
	this.appElements = {};

	// Start our application automatically.
	this.start();

}


/**
 * A function to call the start of the application elements.
 * @this {Application}
 */
Application.prototype.startApplicationElements = function(){

	// Create a new cube
	this.appElements.cube = new Cube(this);
}

/**
 * A function to call the start of the application elements.
 * @this {Application}
 */
Application.prototype.tickApplicationElements = function(){

	// Ensure the cube we created is ticking along.
	this.appElements.cube.tick();

}


/**
 * Called when the application is due to start.
 *
 * @this {Application}
 */
Application.prototype.start = function(){

	var self = this;

	// Add the camera to our scene.
	this.scene.add(this.camera.threeCamera);

	// Set the size of the renderer.
	this.renderer.setSize(Config.width, Config.height);

	// Add our renderer to the HTML document
	document.body.appendChild(this.renderer.domElement);

	// Kick off the rendering while maintaining the objects `this` property.
	requestAnimationFrame(function(){ self.render.call(self); });

	// Run the setup code for the applications elements.
	this.startApplicationElements();

}


/**
 * This runs every time the application renders.
 *
 * @this {Application}
 */
Application.prototype.render = function(){
	
	var self = this;

	// Ensure the rendering process starts again, keeping `this` in tact.
	requestAnimationFrame(function(){ self.render.call(self); });

	// Render our application elements
	this.tickApplicationElements();

	// Render the camera and the scene
	this.renderer.render(this.scene, this.camera.threeCamera);

}
/**
 * Creates a simple rotating cube.
 *
 * @constructor
 * @param {Application} application The application that this cube is to be placed in.
 * @this {Cube}
 */
function Cube(application){

	// Attach our application to our cube for later use.
	this.app = application;

	// Create some geometry for the Cube.
	this.geometry = new THREE.CubeGeometry(200, 200, 200);
		
	// Create the cubes material.
	this.material = new THREE.MeshBasicMaterial(
		{
			color: 0xff7700,
			wireframe: true
		}
	);

	// Create the cubes mesh based off the geometry and the material.
	this.mesh = new THREE.Mesh(
		this.geometry,
		this.material
	);

	// Add our newly created cube mesh to our application.
	this.app.scene.add(this.mesh);

}


/**
 * Renders the Cube we have created.
 *
 * @this {Cube}
 */
Cube.prototype.tick = function(){

	// The speed at which the cube should rotate.
	var speed = 0.03;

	// Depending on which way the arrow keys are pressed move the cube.
	if(this.app.controls.left){
		this.mesh.rotation.y -= speed;
	}

	if(this.app.controls.right){
		this.mesh.rotation.y += speed;
	}

	if(this.app.controls.up){
		this.mesh.rotation.x -= speed;
	}

	if(this.app.controls.down){
		this.mesh.rotation.x += speed;
	}

}

/**
 * Creates an instance of a controller.
 *
 * @constructor
 * @this {Controller}
 */
function Controller(){

	// Keep a reference to the current context.
	var self = this;

	// The constants representing the state of keys.
	this.up = 		false;
	this.down = 	false;
	this.left = 	false;
	this.right = 	false;
	this.space = 	false;

	// The event listeners responsible for handling key presses.
	addEventListener(
		'keydown',
		function(e){ Controller.prototype.keyEvent.call(self, e); },
		true
	);
	
	// The event listeners responsible for handling key releases.
	addEventListener(
		'keyup',
		function(e){ Controller.prototype.keyEvent.call(self, e); },
		true
	);
}

/**
 * Handles the key presses from the browser.
 * 
 * @this {Controller}
 * @param  {Event} e The event of the key press.
 */
Controller.prototype.keyEvent = function(e) {

	// A flag to set if we are pushing down or letting go.
	var action = (e.type == "keydown");

	// Use WASD and the arrow keys.
	switch(e.keyCode){
		case 87:
		case 38: 
			this.up = action;
			break;
		case 65:
		case 37:
			this.left = action;
			break;
		case 40:
		case 83:
			this.down = action;
			break;
		case 39:
		case 68:
			this.right = action;
			break;
		case 32:
			this.space = action;
			break;
	}
}
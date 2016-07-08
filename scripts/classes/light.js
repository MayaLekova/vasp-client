"use strict";

let SceneElement = require('./element');

class Light extends SceneElement {
	constructor(type, color) {
		this.type = type;
		this.color = color;
	}

	draw() {
		super.draw();
	}
};

module.exports = Light;

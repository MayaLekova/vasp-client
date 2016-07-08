"use strict";

let SceneElement = require('./element');

class Node extends SceneElement {
	constructor(flags, color, alpha, transform) {
		this.flags = flags;
		this.color = color;
		this.alpha = alpha;
		this.transform = transform;
	}

	draw() {
		super.draw();
	}
};

module.exports = Node;

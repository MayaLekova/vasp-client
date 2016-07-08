class SceneElement {
	constructor(id, reference, flags, transform) {
		this.id = id;
		this.reference = reference;
	}

	draw() {
		console.log('Object', id, 'is being drawn');
	}
}

module.exports = SceneObject;

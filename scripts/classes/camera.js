class Camera {
	constructor(options) {
		this.flags = options.flags,
		this.position = options.position,
		this.lookAt = options.lookAt,
		this.upVector = options.upVector,
		this.left = options.left,
		this.right = options.right,
		this.top = options.top,
		this.bottom = options.bottom,
		this.near = options.near,
		this.far = options.far
	}
}

module.exports = Camera;

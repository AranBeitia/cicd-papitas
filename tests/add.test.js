const add = require('./add')

test('sumar 1 + 2 es igual a 3', () => {
	expect(add(1, 3)).toBe(3)
})

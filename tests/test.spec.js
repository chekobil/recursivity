const {categories} = require('../data/categories.js')
const {getCategoryPath} = require('../src/script.js')
describe("Testing recursive function", () => {
    test("level 0, category1", () => {
        const result = getCategoryPath(categories, 'category1')
        const expected = "/category1"
        expect(result).toBe(expected)
    })
    test("level 0, category5", () => {
        const result = getCategoryPath(categories, 'category5')
        const expected = "/category5"
        expect(result).toBe(expected)
    })
    test("level 1, category2", () => {
        const result = getCategoryPath(categories, 'category2')
        const expected = "/category1/category2"
        expect(result).toBe(expected)
    })
    test("level 1, category3", () => {
        const result = getCategoryPath(categories, 'category3')
        const expected = "/category1/category3"
        expect(result).toBe(expected)
    })
    test("level 2, category4", () => {
        const result = getCategoryPath(categories, 'category4')
        const expected = "/category1/category3/category4"
        expect(result).toBe(expected)
    })
})
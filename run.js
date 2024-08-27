const {getCategoryPath} = require('./src/script.js')
const {categories} = require('./data/categories.js')
const categoryName = 'category4'
const res = getCategoryPath(categories, categoryName)
console.log(`Get ${categoryName} path:`);
console.log(res);
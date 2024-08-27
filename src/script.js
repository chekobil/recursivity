function getCategoryPath(categories, categoryName) {
    let path = '/'
    for(const branch of categories) {
        const name = branch.name
        const children = branch.subcategories
        if (categoryName === name) path += name
        else if (children?.length) {
            const branchName = getCategoryPath(children, categoryName)
            if (branchName.includes(categoryName)) path += name + branchName
        }
        else continue
    }
    return path
};
module.exports = {
    getCategoryPath
}
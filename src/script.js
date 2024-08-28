function getCategoryPath(categories, categoryName) {
    let path
    const sep = '/'
    for(const branch of categories) {
        const name = branch.name
        const children = branch.subcategories
        if (categoryName === name) path = path ?? sep + name
        else if (children?.length) {
            const branchName = getCategoryPath(children, categoryName)
            if (branchName?.includes(categoryName)) path = path ?? sep + name + branchName
        }
        else continue
    }
    return path
};
module.exports = {
    getCategoryPath
}
function getCategoryPath(categories, categoryName) {
    let path
    const sep = '/'
    for(const branch of categories) {
        const name = branch.name
        const children = branch.subcategories
        if (categoryName === name) {
            return path ?? sep + name
        } else if (children?.length) {
            const branchName = getCategoryPath(children, categoryName)
            if (branchName?.includes(categoryName)) {
                return path ?? sep + name + branchName
            }
        }
        else continue;
    }
    
};
module.exports = {
    getCategoryPath
}
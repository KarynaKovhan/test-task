function nodeChildCount(node, deep = Infinity) {
    let count = 0;

    function countChildren(currentNode, currentDepth) {
        if (currentDepth > deep) return;
        
        const children = currentNode.children;
        count += children.length;
        
        for (const child of children) {
            countChildren(child, currentDepth + 1);
        }
    }
    
    countChildren(node, 1);
    return count;
}

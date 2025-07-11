
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    //if root p and q are null return True.
    //if either one of them is null or their values are different reuturn False.
    // check if the are the same and return result.

    if (!p && !q) return true;
    if (!p || !q || (p.val !== q.val)) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
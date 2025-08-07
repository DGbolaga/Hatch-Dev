class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function depth(node: TreeNode | null): number {
        if (node === null) return 0;

        const l = depth(node.left);
        const r = depth(node.right);

        diameter = Math.max(diameter, l + r);
        return 1 + Math.max(l, r);
    }

    depth(root);
    return diameter;
}

//Inorder Traversal (LPR) = left parent right
//Preorder Traversal (PLR)
//Postorder Traversal (LRP)
//Note this applies only when it is in a new node i.e for every new node you must follow the direction

// Binary Tree

class BTreeNode<T> {
    key: T;
    left: BTreeNode <T> | null;
    right: BTreeNode <T> | null;

    constructor(key: T, left: BTreeNode<T> | null = null, right: BTreeNode<T> | null = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}


let root = new BTreeNode<number>(1);
root.left = new BTreeNode<number>(2)
root.right = new BTreeNode<number>(3)
root.left.left = new BTreeNode<number>(4)
root.left.right = new BTreeNode<number>(5)
root.right.left = new BTreeNode<number>(10)

// class BinaryTree<T> {
//     private root: BTreeNode<T> | null = null;

//     //insert elements
//     populate() {

//     }
// }

//inorder traversal
function dfs_inorder<T>(root: BTreeNode<T> | null, path: T[]): T[] {
    if (root == null) {
        return path;
    }

    dfs_inorder(root.left, path);
    path.push(root.key);
    dfs_inorder(root.right, path);
    return path;
}

//preorder traversal
function dfs_preorder<T>(root: BTreeNode<T> | null, path: T[]): T[] {
    if (root == null) {
        return path;
    }

    path.push(root.key);
    dfs_preorder(root.left, path);
    dfs_preorder(root.right, path);
    return path;
}

//postorder traversal
function dfs_postorder<T>(root: BTreeNode<T> | null, path: T[]): T[] {
    if (root == null) {
        return path;
    }

    dfs_postorder(root.left, path);
    dfs_postorder(root.right, path);
    path.push(root.key);
    return path;
}

//level-order traversal = BFS (breath-first search)
function bfs_levelorder<T>(root: BTreeNode<T> | null, path: T[]) {
    if (root == null) {
        return []
    }

    path.push(root.key)
    let level = 0

    let bfs: BTreeNode<T>[] = [root]
    while (bfs.length != 0) {
        let newbfs = []
        for (const node of bfs) {
            if (node.left){
                newbfs.push(node.left)
                path.push(node.left.key)
            }
            if (node.right) {
                newbfs.push(node.right)
                path.push(node.right.key)
            }
        }
        level += 1
        bfs = newbfs
    }

    console.log("tree level: ", level)
    return path
}




//Reverse level-order traversal = BFS (breath-first search)
function bfs_reverselevelorder<T>(root: BTreeNode<T> | null, path: T[]) {
    if (root == null) {
        return []
    }

    let bfs: BTreeNode<T>[] = [root]
    path.push(root.key)
    while (bfs.length > 0) {
        let newbfs = []
        for (const node of bfs) {
             if (node.right) {
                newbfs.push(node.right)
                path.push(node.right.key)
            }
            
            if (node.left){
                newbfs.push(node.left)
                path.push(node.left.key)
            }
        }

        
        bfs = newbfs
    }

    return path.reverse()
}

//Max element in binary tree.
function max_element_BT(root: BTreeNode<number> | null): number {
    //using inorder traversal - LPR
    let res: number = 0

    function dfs(root: BTreeNode<number> | null) {
        if (root == null) {
            return 
        }
        dfs(root.left)
        if (res < root.key) {
            res = root.key;
        }
        dfs(root.right)
    }
    dfs(root)
    return res
}

//Search for an element
function search_BT<T>(root: BTreeNode<T> | null, key: T): string {
    // using bfs
    if (root == null) {
        return "not found"
    }

    let bfs = [root]
    while (bfs.length > 0) {
        let newbfs = []
        for (const node of bfs) {
            if (node.key == key) {
                return "Found"
            }
            if (node.left) {
                newbfs.push(node.left)
            }
            if (node.right) {
                newbfs.push(node.right)
            }
        }
        bfs = newbfs
    }
    return "Not Found"
}

//Maximum depth of binary tree
function max_depth_of_BT<T>(root: BTreeNode<T> | null): number {
    if (root == null) {
        return -1
    }

    if (root.left == null && root.right == null) {
        return 0
    }


    let bfs: BTreeNode<T>[] = [root]
    let level = -1
    while (bfs.length != 0) {
        let newbfs = []
        for (const node of bfs) {
            if (node.left){
                newbfs.push(node.left)
            }
            if (node.right) {
                newbfs.push(node.right)
            }
        }
        level += 1
        bfs = newbfs
    }

    console.log("tree level: ", level)
    return level
}

//Deepest node of tree
function deepNode<T>(root: BTreeNode<T> | null): BTreeNode<T> | null{
    if (root == null) {
        return root
    }

    if (root.left == null && root.right == null) {
        return root
    }


    let bfs: BTreeNode<T>[] = [root]
    let lastNode: BTreeNode<T> | null = null;
    while (bfs.length != 0) {
        let newbfs = []
        for (const node of bfs) {
            if (node.left){
                newbfs.push(node.left)
                lastNode = node.left
            }
            if (node.right) {
                newbfs.push(node.right)
                lastNode = node.right
            }
        }
        bfs = newbfs
    }

    return lastNode
}

//Show all paths of a tree.
function findPath<T>(root: BTreeNode<T> | null, allPaths: T[][], path: T[]) {
    //recursively append path to paths.

    if (root == null) {
        return
    }

    path.push(root.key)

    if (!root.left && !root.right) {
        allPaths.push([...path]) //append path to paths
    }
    else {
        if (root.left) { //search left side 
            findPath<T>(root.left, allPaths, path)
        }
        if (root.right) { //search right side
            findPath<T>(root.right, allPaths, path)
        }
    }

    path.pop() // remove the last added tree so another path can be tried.
}



//Get maximum sum of path
function maxPath(root: BTreeNode<number> | null, allPathSum: number[], pathSum: number) {
    //recursively append path to paths.

    if (root == null) {
        return
    }

    pathSum += root.key

    if (!root.left && !root.right) {
        allPathSum.push(pathSum) //append path to paths
    }
    else {
        if (root.left) { //search left side 
            maxPath(root.left, allPathSum, pathSum)
        }
        if (root.right) { //search right side
            maxPath(root.right, allPathSum, pathSum)
        }
    }

    pathSum -= root.key // remove the last added tree so another path can be tried.
}


console.log(dfs_inorder<number>(root, []))
console.log(dfs_preorder<number>(root, []))
console.log(dfs_postorder<number>(root, []))
console.log(bfs_levelorder<number>(root, []))
console.log(bfs_reverselevelorder<number>(root, []))
console.log(max_element_BT(root))
console.log(search_BT<number>(root, 1))
console.log(max_depth_of_BT(root))
console.log(deepNode(root))

//all path
let allpath: number[] = []
let onepath = 0
maxPath(root, allpath, onepath)
console.log(allpath)


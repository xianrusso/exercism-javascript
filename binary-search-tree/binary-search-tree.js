export class BinarySearchTree {
    constructor(data) {
        this.data = data
        this.left = undefined
        this.right = undefined
    }

    insert(ndata) {
        if (ndata <= this.data) {
            if (!this.left) {
                this.left = new BinarySearchTree(ndata)
            } else {
                this.left.insert(ndata)
            }
        } else {
            if (!this.right) {
                this.right = new BinarySearchTree(ndata)
            } else {
                this.right.insert(ndata)
            }
        }
    }

    each(fn) {
        if (this.left) {
            this.left.each(fn)
        }
        fn.call(this, this.data)
        if (this.right) {
            this.right.each(fn)
        }
    }
}


function Node(key, value) {
    this.key = key;
    this.value = value;

    //please don't rename left, right and root properties
    this._left = null;
    this._right = null;
	
}

function BinarySearchTree() {
    this._root = null;
}


BinarySearchTree.prototype.root = function() {
	return this._root.value;
}

BinarySearchTree.prototype.insert = function(key,value) {
    var currentNode = new Node(key,value);
    if (!this._root) {
        this._root = currentNode;
    } else {
        this.add(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.add = function(currentNode) {
    var key = currentNode.key;
    var traverse = function(node) {
        
        if (key === node.key) {
            return;
        } else if (key > node.key) {
            if (!node._right) {
                node._right = currentNode;
                return;
            } else
                traverse(node._right);
        } else if (key < node.key) {
            if (!node._left) {
                node._left = currentNode;
                return;
            } else
                traverse(node._left);
        }
    };
    traverse(this._root);
};

BinarySearchTree.prototype.search = function(key) {
  var currentNode = this._root;

  while (currentNode != null){
   if (currentNode.key == key) return currentNode.value;
   else if (currentNode.key < key) currentNode = currentNode._right;
   else if (currentNode.key >key ) currentNode = currentNode._left;
  }
  return null;
}

BinarySearchTree.prototype.deleteMin = function(){
  deleteMin(this._root);
}

function deleteMin(node){
  if (node._left == null) return node._right;

  node._left = deleteMin(node._left);
   return node;
}

BinarySearchTree.prototype.delete = function(key){
  this.root = deleteNode(this.root, key);
}

function deleteNode(node, key){
  if (!node) return null;

  if (node.key > key) node._left = delete(node._left, key); 
  else if (node.key < key) node._right = delete(node._right, key);
  else {
    if (!node._right) return node._left;
    if (!node._left) return node._right;

    var t = node;
    node = getMin(t._right);
    node._right = deleteMin(t._right);
    node._left = t._left;
 }

   return node;
}
 
 
 
 
BinarySearchTree.prototype.traverse = function(bool) {
    if (bool){
	var node = this._root;
    var result = {};
    var depthAverages = [];

    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            if (!result[depth])
                result[depth] = [node.value];
            else
                result[depth].push(node.value);
        }
        
        if (node._right || node._left) {
            traverse(node._left, depth + 1);
            traverse(node._right, depth + 1);
        }
    };
    traverse(node, 0);

  
    for (var key in result) {
        var len = result[key].length;
        var depthAvg='';
        for (var i = 0; i < len; i++) {
            depthAvg += result[key][i];
        }
        depthAverages.push(depthAvg);
    }
    return depthAverages;} else {
	var node = this._root;
    var result = {};
    var depthAverages = [];

    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            if (!result[depth])
                result[depth] = [node.value];
            else
                result[depth].push(node.value);
        }
        
        if (node._right || node._left) {
            traverse(node._left, depth + 1);
            traverse(node._right, depth + 1);
        }
    };
    traverse(node, 0);

    
    for (var key in result) {
        var len = result[key].length;
        var depthAvg='';
        for (var i = 0; i < len; i++) {
            depthAvg += result[key][i];
        }
        depthAverages.push(depthAvg);
    }
    return depthAverages.reverse();}
		
	
	
	
	
};
BinarySearchTree.prototype.contains = function(value) {
    var node = this._root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            return traverse(node._right);
        } else if (value < node.value) {
            return traverse(node._left);
        }
    };
    return traverse(node);
};

BinarySearchTree.prototype.search = function(key) {
  var currentNode = this._root;

  while (currentNode != null){
   
   if (currentNode._left.key < currentNode._right.key) currentNode = currentNode._right;
   else return false;
   
  }
  return true;
}

const bst = new BinarySearchTree();
 console.log(bst.contains());

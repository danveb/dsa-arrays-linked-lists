// class Node 
class Node {
    constructor(val) {
        this.val = val 
        this.previous = null 
        this.next = null 
    }
}

// class DoublyLinkedList 
class DoublyLinkedList {
    constructor(val) {
        this.head = null 
        this.tail = null 
        this.size = 0 
    }

    // methods 
    // - push (append: add to end of list) 
    push(val) {

        // make a newNode 
        const newNode = new Node(val) 

        // case: check if list is empty 
        if(!this.head) {
            // head/tail are newNode 
            this.head = newNode 
            this.tail = newNode 
        } else {
            this.tail.next = newNode 
            newNode.previous = this.tail 
            this.tail = newNode 
        }
        this.length++
    }

    pop() {
        if(this.length === 0) {
            return false 
        }

        // get popped node 
        const popped = this.tail 
        // save newTail to a variable (could be null) 
        const newTail = this.tail.previous 
        // if newTail is not null 
        if(newTail) {
            // sever connection to popped node 
            newTail.next = null 
            // sever connection from popped node
            this.tail.previous = null 
            // in case of 1 length list
        } else {
            // make sure to edit head in case newTail is null 
            this.head = null 
        }
        // assign new tail (could be null) 
        this.tail = newTail 
        this.length-- 
        return popped 
    }

    shift() {
        //in case list is empty
        if (!this.head) {
          return false;
        }
        //save shifted node to variable
        const shiftedNode = this.head;
        //make the new head the next (might be null)
        const newHead = this.head.next; //might be null
        //if list is more than 1
        if (this.head !== this.tail) {
          newHead.prev = null;
          shiftedNode.next = null;
        } else {
          this.tail = null;
        }
        this.head = newHead;
        this.length--;
        return shiftedNode;
    }
    
    
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insertAtIndex(index, val) {
    //if index doesn't exist
        if (index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            const newNode = new Node(val);
            const after = this.accessAtIndex(index);
            const before = after.prev;
            after.prev = newNode;
            before.next = newNode;
            newNode.next = after;
            newNode.prev = before;
            this.length++;
        }
        return this;
    }

    removeAtIndex(index) {
        let removedNode;
        if (index >= this.length) {
            return false;
        }
        if (index == 0) {
            removedNode = this.shift();
        } else if (index == this.length - 1) {
            removedNode = this.pop();
        } else {
            removedNode = this.getNodeAtIndex(index);
            const after = removedNode.next;
            const before = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
            before.next = after;
            after.prev = before;
            this.length--;
        }
        return removedNode;
    }

    getNodeAtIndex(index) {
        if (index >= this.length || index < 0) {
            return false;
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    setNodeAtIndex(index, val) {
        const foundNode = this.getNodeAtIndex(index)
        if(foundNode){
            foundNode.value = val
            return foundNode;
        }
        return null;
    }
    
}


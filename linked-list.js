/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // create a new Node
    let newNode = new Node(val) 
    // case 1: check if length of linkedlist is 0 (empty)
    // OR
    // case 2: head/tail is null  
    if(this.length === 0) {
      // set head and tail to be the new node and increase length by 1
      this.head = newNode 
      this.tail = newNode 
      this.length++ 
    } else {
      // next item of tail will be a new node 
      this.tail.next = newNode 
      // point tail to new node 
      this.tail = newNode 
      // increase length 
      this.length++ 
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // create a new Node
    let newNode = new Node(val) 
    // case 1: check if length of linkedlist is 0 (empty)
    // OR 
    // case 2: head/tail is null  
    if(this.head === null) {
      // set head and tail to be the new node and increase length by 1
      this.head = newNode 
      this.tail = newNode 
      this.length++
    } else {
      // set the head to be left of new node   
      newNode.next = this.head 
      // new node is the head now
      this.head = newNode 
      // increase length
      this.length++ 
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    // case: check if length of list is empty 
    if (this.length === 0) {
      throw new Error("This list is empty!");
    }

    let data = this.tail.val 

    // case: check if length of list is 1
    if (this.length === 1) {
      // set header and tail both null 
      this.head = null
      this.tail = null
      this.length = 0
    } else {
      // use currentNode to be the head 
      let currentNode = this.head 
      // while loop: need to stop before the last node 
      while(currentNode.next.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = null 
      this.tail = currentNode 
      this.length-- 
    }
    return data

  }

  /** shift(): return & remove first item. */

  shift() {
    // case: check if length of list is empty 
    if (this.length === 0) {
      throw new Error("This list is empty!")
    }

    const currentNode = this.head

    // case: check if length of list is 1
    if (this.length === 1) {
      // set header and tail both null 
      this.head = null
      this.tail = null
      this.length = 0
      // if length is greater than 1
    } else {
      // advance head to the next element
      this.head = this.head.next 
      this.length--
    }
    // return data of currentNode 
    return currentNode.val 
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // case: check if idx is valid or greater than length 
    if(idx < 0 || idx >= this.length) {
      throw new Error('Invalid index') 
    }

    let i = 0 
    let current = this.head 
    while(i < idx && current.next) {
      current = current.next 
      i++
    }

    return current.val 
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // case: check if idx is valid or greater than length 
    if(idx < 0 || idx >= this.length) {
      throw new Error('Invalid index') 
    }

    if(idx === this.length - 1) {
      this.tail.val = val 
    } else {
      let current = this.head 
      let i = 0

      while(i < idx) {
        current = current.next 
        i++
      }

      current.val = val 

    }
  
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // case: check if idx is valid or great than length 
    if(idx < 0 || idx > this.length) {
      throw new Error('Invalid index') 
    }

    // case: check if idx is 0 
    // - we can unshift to beginning of list 
    if(idx === 0) {
      this.unshift(val) 
      // case: if idx is equal to the length 
      // - we can push to the end of list 
    } else if(idx === this.length) {
      this.push(val) 
      // case: insert between front and back? 
    } else {
      // create a new node
      const newNode = new Node(val) 
      let current = this.head 
      let prev = null 
      let counter = 0 

      while(counter < idx) {
        prev = current 
        current = current.next 
        counter++
      }
      newNode.next = current 
      prev.next = newNode 
      this.length++ 
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // case: check if idx is valid or greater than length 
    if(idx < 0 || idx >= this.length) {
      throw new Error('Invalid index') 
    }

    // case: if idx === 0 
    if(idx === 0) {
      return this.shift() 
    } else if(idx === this.length - 1) {
      return this.pop() 
    } else {
      let prev = null 
      let current = this.head 
      let counter = 0

      while(counter < idx) {
        prev = current 
        current = current.next 
        counter++ 
      }
      prev.next = current.next 
      this.size-- 
      
    }
    return current.val 

  }

  /** average(): return an average of all values in the list */

  average() {
    // case: check if the link list is empty 
    // - or maybe the head/tail is null 
    if(this.length === 0) {
      return 0
    }

    let total = 0
    let current = this.head     

    // loop through entire list 
    while(current) {
      total += current.val 
      current = current.next;
    }
    return total/this.length 
    
  }
}

module.exports = LinkedList;

export function LinkedList() {
  return {
    head: null,
    isLinkedList: true,
    append(value) {
      value = Node(value);
      if (!this.head) {
        this.head = value;
        return;
      }

      let tmp = this.head;
      while (tmp) {
        if (tmp.next === null) {
          tmp.next = value;
          break;
        }
        tmp = tmp.next;
      }
    },
    prepend(value) {
      value = Node(value);
      let tmp = this.head;
      this.head = value;
      value.next = tmp;
    },
    size() {
      let tmp = this.head;
      let size = 0;
      while (tmp !== null) {
        size++;
        tmp = tmp.next;
      }
      return size;
    },
    getHead() {
      return this.head;
    },
    getTail() {
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      return tmp;
    },
    at(index) {
      let tmp = this.head;
      let itemIndex = 0;
      while (tmp !== null) {
        if (index === itemIndex) {
          return tmp;
        }
        tmp = tmp.next;
        itemIndex++;
      }

      console.log(`No value found at index ${index}`);
      return;
    },
    pop() {
      // check if the list is empty
      if (!this.head) return;

      let tmp = this.head;
      if (tmp.next === null) {
        this.head = null;
      }
      while (tmp) {
        if (tmp.next.next === null) {
          tmp.next = null;
        }
        tmp = tmp.next;
      }
    },
    contains(value) {
      let tmp = this.head;
      while (tmp) {
        if (tmp.value == value) {
          return true;
        }
        tmp = tmp.next;
      }
      return false;
    },
    find(value) {
      let tmp = this.head;
      let itemIndex = 0;
      while (tmp) {
        if (tmp.value == value) {
          return itemIndex;
        }
        itemIndex++;
        tmp = tmp.next;
      }
      return null;
    },
    toString() {
      let tmp = this.head;
      let results = "";
      while (tmp) {
        results += `( ${tmp.value} ) -> `;
        if (tmp.next === null) {
          results += `null`;
        }
        tmp = tmp.next;
      }
      return results;
    },
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      value = Node(value);
      let previousNode = this.at(index);
      if (!previousNode) {
        console.log("No element at this index");
        return;
      }
      let tmp = previousNode.next;
      previousNode.next = value;
      value.next = tmp;
    },
    removeAt(index) {
      if (index === 0) {
        let tmp = this.head.next;
        this.head.next = null;
        this.head = tmp;
        return;
      }

      let previousNode = this.at(index - 1);
      let deletedNode = this.at(index);

      previousNode.next = previousNode.next.next;
      deletedNode.next = null;
      if (!previousNode || !deletedNode) {
        console.log("No element at this index");
        return;
      }
    },
  };
}

function Node(value = null) {
  return {
    value,
    next: null,
  };
}
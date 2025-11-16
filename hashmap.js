import { LinkedList } from "./linkedList.js";

function HashMap(loadFactor = 0.75, capacity = 16) {
  return {
    loadFactor,
    capacity,
    buckets: new Array(capacity),
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;

      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }
      
      // console.log(hashCode)
      return hashCode
    },
    set(key, value) {
      const index = this.hash(key);

      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }

      // to do: check if the key is in the linked list already if yes update it
      if (this.buckets[index] === undefined || this.buckets[index][0] === key) {
        this.buckets[index] = [key, value];
      } else if (this.buckets[index].isLinkedList) {
        let tmp = this.buckets[index].getHead();
        let inList = false;
        while (tmp) {
          if (tmp.value[0] === key) {
            inList = true;
            tmp.value[1] = value;
          }
          tmp = tmp.next;
        }
        if (!inList) {
          this.buckets[index].append([key, value]);
        }
        console.log("adding to the list");
      } else if (this.buckets[index][0] !== key) {
        console.log("creating the list");
        let linkedList = LinkedList();
        linkedList.append(this.buckets[index]);
        linkedList.append([key, value]);
        this.buckets[index] = linkedList;
      } 


      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]?.isLinkedList) {
          console.log(this.buckets[i].toString());
        } else {
          console.log(this.buckets[i]);
        }
      }
    }, 
    get(key) {
      const index = this.hash(key);

      if (this.buckets[index] == undefined) {
        return null
      } else if (this.buckets[index].isLinkedList) {
        let tmp = this.buckets[index].getHead();
        while (true) {
          if (tmp.value[0] === key) {
            // console.log(tmp)
            // console.log(tmp.value[0])
            // console.log(tmp.value[1])
            return tmp.value[1]
          }
          tmp = tmp.next
        }
      }

      console.log(this.buckets[index][0]);
      if (this.buckets[index][0] == key) {
        return this.buckets[index][1]
      }
    },
  };
}

let hashmap = HashMap();
hashmap.set("Carlos", "I am the old value");
hashmap.set("Carlos", "I am the new value");
hashmap.set("bus", 1);
hashmap.set("olej", 2);
hashmap.set("new", 3);
hashmap.set("old", 4);
hashmap.set("loop", 5);
hashmap.set("for", 6);
hashmap.set("bool", 7);
hashmap.set("new", 5);


console.log(hashmap.get("Carlos"));
console.log(hashmap.get("bool"));
console.log(hashmap.get("for"));
console.log(hashmap.get("new"));
console.log(hashmap.get("none"));
console.log(hashmap.get("neww"));
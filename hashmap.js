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
      
      console.log(hashCode)
      return hashCode
    },
    set(key, value) {
      const index = this.hash(key);

      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }

      if (this.buckets[index] === undefined) {
        this.buckets[index] = [key, value]
      } else if (this.buckets[index][0] === key) {
        this.buckets[index] = [key, value]
      } else if (this.buckets[index].isLinkedList) {
        this.buckets[index].append([key, value]);
        console.log("adding to the list");
      }
        else if (this.buckets[index][0] !== key) {
        console.log("creating the list");
        let linkedList = LinkedList();
        linkedList.append(this.buckets[index]);
        linkedList.append([key, value]);
        this.buckets[index] = linkedList;
        linkedList = LinkedList();
      } 


      for (let i = 0; i < this.buckets.length; i++) {
        console.log(this.buckets[i]);
      }

      // for (let i = 0; i < this.buckets.length; i++) {


      //   if (this.buckets[i].isLinkedList) {
      //     if (this.buckets[i].contains(key)) {

      //     }
      //   }
      // }

      // const linkedList = LinkedList();
      // console.log(linkedList.isLinkedList);
      // linkedList.append([key, value])
      // this.buckets[index] = linkedList;

      // console.log(this.buckets)
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
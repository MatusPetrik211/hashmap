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

      this.buckets[index] = [key, value]

      console.log(this.buckets)
    }, 
  };
}

let hashmap = HashMap();
hashmap.set("fdsfdsf", 0);
hashmap.set("bus", 1);
hashmap.set("olej", 2);
hashmap.set("new", 3);
hashmap.set("old", 4);
hashmap.set("loop", 5);
hashmap.set("for", 6);
hashmap.set("bool", 7);
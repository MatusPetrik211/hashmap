import { LinkedList } from "./linkedList.js";

function HashMap(loadFactor = 0.75, capacity = 16) {
  return {
    loadFactor,
    capacity,
    buckets: [],
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;

      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }
      
      return hashCode
    },
    set(key, value) {
      const keys = this.buckets.map(pair => pair[0]);

      console.log(keys);

      for (let i = 0; i < this.buckets.length; i++) {
        console.log("hello");
      }
    }, 
  };
}

let hashmap = HashMap();
hashmap.set("key", 3);
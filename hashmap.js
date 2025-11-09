function HashMap(loadFactor = 0.75, capacity = 16) {
  return {
    loadFactor,
    capacity,
    hash(key, capacity) {
      let hashCode = 0;
      const primeNumber = 31;

      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }
      
      return hashCode
    }
  };
}

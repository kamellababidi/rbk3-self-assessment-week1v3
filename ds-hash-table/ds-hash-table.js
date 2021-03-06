
// Grade 2:Half complete
var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      arr:[],
      retrieve: function(key) {
        for(var i=0;i<this._storage[hashFn(key, max)].length;i+=2){
          if(this._storage[hashFn(key, max)][i]===key)
            return this._storage[hashFn(key, max)][i]
        }
      },

      insert: function(key, value) {
        //your code is here
        var index=hashFn(key, max)
        this.arr.push(key)
        this.arr.push(value)
        for (var i=0;i<this._storage[hashFn(key, max)].length;i++){
          if( this._storage[hashFn(key, max)][i]===undefined){
            this._storage[hashFn(key, max)][i]=this.arr;
            return
          }
        }  
        
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
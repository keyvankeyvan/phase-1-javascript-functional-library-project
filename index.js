let arrMaker = function (collection) {
    let correctFormatArr = []
    if (Array.isArray(collection) === false) {
        for (const property in collection) {
            correctFormatArr.push(collection[property])
        }
    } else {
        correctFormatArr = [...collection]
    }
    return correctFormatArr
}


let myEach = function (collection, alert) {
    let correctFormat = arrMaker(collection)
    correctFormat.forEach((element) => (alert(element)));

    return collection
}

let myMap = function (collection, callback) {
    let correctFormat = arrMaker(collection)
    let mappedArr = []
    correctFormat.forEach((element) => {
        mappedArr.push(callback(element))
    })

    return mappedArr
}

const myReduce = function (collection, callback, acc) {
    let newCollection = arrMaker(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

const myFind = function(collection, predicate) {
    let newCollection = arrMaker(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
}

const myFilter = function(collection, predicate) {
    let newCollection = arrMaker(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
}

const mySize = function(collection) {
    let newCollection = arrMaker(collection);
    return newCollection.length;
}

const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
}

const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}

const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
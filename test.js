let arr = ['qwe','asd','zxc','iop','bnm']

let obj = {
    asd: 'qwe',
    asd1: '234234',
    asd2: 'cxcxzczx',
    asd3: 'xcvxcvxcvsdf',
    asd4: 'lodfvdsfv'
}

console.log(Array.isArray(obj))

let arrMaker = function (object) {
    let correctFormatArr = []
    for (const property in object) {
        correctFormatArr.push(object[property])
    }
    return correctFormatArr
}

let myEach = function (collection, callback) {
    collection.forEach(element => {
        console.log(element)
    });

    return collection
}

// myEach(arr)
// console.log('\n')
let obj2 = arrMaker(obj)
console.log(Array.isArray(obj2))
// myEach(obj2)
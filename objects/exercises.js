// 4.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map((key) => key.toUpperCase());

// 5.

let myObj = Object.create(myProtoObj);

// 7.

funtion copyObj(sourceObject, keysArray){
    let newObject = {};

    if(keysArray){
        keys.forEach(function(key) {
            newObject[key] = sourceObject[key];
        });
        return newObject;
    } else {
        return Object.assign(newObject, sourceObject);
    }
}


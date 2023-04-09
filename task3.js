function createObject() {
    return Object.create(null);
}

const obj = createObject();
console.log(Object.getPrototypeOf(obj));
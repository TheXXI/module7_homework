const object = {
    num: 1,
    str: "строка",
    bool: true

}

const name1 = "string";
const name2 = "str";

function isPropertyName (propName, obj) {
    for (let key in obj) {
        if (key == propName) {
            return true
        }
    }
    return false
}

console.log(isPropertyName(name1, object));
console.log(isPropertyName(name2, object));
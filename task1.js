const object = {
    num: 1,
    str: "строка",
    bool: true

}
function showKeyAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log('ключ: ' + key + ', значение: ' + obj[key]);
        }
    }
}

showKeyAndValues(object);
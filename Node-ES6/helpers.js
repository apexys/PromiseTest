module.exports.PromiseSerialAll = (array) => {
    if(array.length > 0){
        let promise = array.shift();
        return array.shift().then(() => module.exports.PromiseSerialAll(array));
    }else{
        return Promise.resolve([]);
    }
}

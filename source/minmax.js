'use strict';

function minmax(data) {

    let validData = [];

    if(data.length === 0){
        return getMinMax(validData);
    }
    
    data = data.replace(/,/g,'').split(" ");

    for(let item=0;item<data.length;++item){
        let newItem = +data[item];
        if(!Number.isNaN(newItem)) {
            validData.push(newItem);
        }
    }
    return getMinMax(validData)
};

function getMinMax(data) {
    let zeroResult = [undefined,undefined];
    let result = [];
    let min,max;

    if(data.length === 0) return zeroResult;
    min = Math.min(...data);
    max = Math.max(...data);
    result.push(min,max);

    return result;
}

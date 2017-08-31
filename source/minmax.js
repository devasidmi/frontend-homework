'use strict';

function minmax(data) {
    return data.length === 0 ? zeroResult() : getMinMax(validateData(data));
}

function validateData(data){

    let validData = [];
    data = data.replace(/,/g,'').split(" ");

    data.forEach(function (item, i, data) {
        if(!Number.isNaN(+item)){
            validData.push(+item)
        }
    });

    return validData;
}

function zeroResult(){
    return [undefined,undefined]
}

function getMinMax(data) {

    let result = [];
    let min,max;

    if(data.length === 0)return zeroResult();

    min = Math.min(...data);
    max = Math.max(...data);
    result.push(min,max);

    return result;
}
'use strict';

function minmax(data) {
    return data.length === 0 ? zeroResult() : getMinMax(validateData(data));
}

function validateData(data){

    const validData = [];
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

    if(data.length === 0){
        return zeroResult()
    }
    return [Math.min(...data),Math.max(...data)];
}
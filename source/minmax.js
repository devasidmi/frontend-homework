'use strict';

function minmax(data) {
    return getMinMax(validateData(data));
}

function validateData(data) {
    return data.replace(/,/g, '').split(" ").filter(item => (item != "" && (!!Number(item) || +item === 0) && (!isFinite(item) || /\d/.test(item))));
}

function zeroResult() {
    return [undefined, undefined]
}

function getMinMax(data) {

    if (data.length === 0) {
        return zeroResult()
    }
    return [Math.min(...data), Math.max(...data)];
}
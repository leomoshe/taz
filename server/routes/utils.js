'use strict';

const fs = require('fs');
const path = require('path');

function saveRecords(table, data) {
    let fileName = path.join(__dirname, '..', 'db', table + '.json')
    fs.writeFileSync(fileName,  JSON.stringify(data), 'utf8');
}

function getRecords(table) {
    let data = '[]';
    let fileName = path.join(__dirname, '..', 'db', table + '.json')
    
    try {
        data = fs.readFileSync(fileName);
    } catch(err) {
        console.error(err)
        saveRecords(table, data);
    }
    return JSON.parse(data);
}

function getRecord(table, id) {
    const data = getRecords(table);
    let record = data.find(item => item.id === id);
    return record;
}

function addRecord(table, item) {
    const data = getRecords(table);
    data.push(item);
    saveRecords(table, data);
}

function removeRecord(table, id) {
    const data = getRecords(table);
    let record = data.find(item => item.id === id);
    data.splice(items.findIndex(function(item){
        return item.id === id;
    }), 1);
    saveRecords(table, data);
}

module.exports = {
    getRecords: getRecords,
    getRecord: getRecord,
    addRecord: addRecord,
    removeRecord: removeRecord
};
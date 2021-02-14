'use strict';

const fs = require('fs');
const path = require('path');

function saveRecords(table, data) {
    let fileName = path.join(__dirname, '..', 'db', table + '.json')
    fs.writeFileSync(fileName,  JSON.stringify(data), 'utf8');
}

function getRecords(table) {
    let data = [];
    const fileName = path.join(__dirname, '..', 'db', table + '.json')
    
    try {
        data = fs.readFileSync(fileName);
    } catch(err) {
        console.error(err)
        saveRecords(table, data);
    }
    return JSON.parse(data);
}

function getRecord(table, id) {
    const records = getRecords(table);
    const record = records.find(item => item.id === id);
    return record;
}

function addRecord(table, data) {
    const records = getRecords(table);
    records.splice(records.findIndex(function(item){
        return item.id === data.id;
    }), 1);
    records.push(data);
    saveRecords(table, records);
}

function removeRecord(table, id) {
    const records = getRecords(table);
    records.splice(records.findIndex(function(item){
        return item.id === id;
    }), 1);
    saveRecords(table, records);
}

module.exports = {
    getRecords: getRecords,
    getRecord: getRecord,
    addRecord: addRecord,
    removeRecord: removeRecord
};
'use strict';

const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

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

function removeRecordFromContainer(container, id){
    let idx = -1;
    try {
        idx = container.findIndex(item => item.id === id);
    } catch {}
    if (idx > -1) {
        container.splice(idx, 1); 
        return true;
    }
    return false;
}

function addRecord(table, data) {
    const records = getRecords(table);
    removeRecordFromContainer(records, data.id);
    records.push(data);
    saveRecords(table, records);
}

function removeRecord(table, id) {
    const records = getRecords(table);
    if (removeRecordFromContainer(records, id)) {
        saveRecords(table, records);
        return true;
    }
    return false;
}

const validateRules = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = {
    getRecords: getRecords,
    getRecord: getRecord,
    addRecord: addRecord,
    removeRecord: removeRecord,
    validateRules: validateRules
};
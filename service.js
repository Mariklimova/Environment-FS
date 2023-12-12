const fs = require('fs');

function getAllData() {
    const jsonString = fs.readFileSync('./storage.json');
    const arr = JSON.parse(jsonString);
    if (!arr.length) {
        throw new Error('arr is empty')
    }
    return arr;
}

function createData(label, category, priority) {
    const jsonString = fs.readFileSync('./storage.json');
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => el.id == label.toLowerCase())
    if (filt.length) {
        throw new Error('this label already exists')
    }
    const newObj = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    arr.push(newObj);
    fs.writeFileSync('./storage.json', JSON.stringify(arr));
    return arr;
}


function deleteData(id) {
    const jsonString = fs.readFileSync('./storage.json');
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => el.id != id)

    fs.writeFileSync('./storage.json', JSON.stringify(filt));
    return filt;
}

function getDataById(id) {
    const jsonString = fs.readFileSync('./storage.json');
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => el.id == id)


    return filt;
}

function updateData(id, label, category, priority) {
    const jsonString = fs.readFileSync('./storage.json');
    const arr = JSON.parse(jsonString);
    const filt = arr.filter(el => {
        if (el.id != id) {
            return true
        }

    })
    filt.push({
        id: id,
        label: label,
        category: category,
        priority: priority
    })

    fs.writeFileSync('./storage.json', JSON.stringify(filt));
    return filt;
}


module.exports = { getAllData, createData, deleteData, getDataById, updateData }
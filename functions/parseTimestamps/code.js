function parseTimestamps(itemObj) {

    itemObj.created_date = itemObj.created_date ? iml.parseDate(itemObj.created_date, 'YYYY-MM-DDTHH:mm:SSZ') : null;
    itemObj.modified_date = itemObj.modified_date ? iml.parseDate(itemObj.modified_date, 'YYYY-MM-DDTHH:mm:SSZ') : null;
   
    return itemObj;
}
export const utilService = {
    save: saveToStorage,
    loadFromStorage,
    store,
    load
}


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}



function store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }
  
  function load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }

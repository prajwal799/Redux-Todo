
export const loadData = (key) => {
    try{
       const value = JSON.stringify(localStorage.getItem(key));
       return value;
    }
    catch(err) {
        return null;
    }
}

export const saveData = (key,value) => {
    try{
      localStorage.setItem(key,JSON.stringify(value));
    }
    catch(err) {
        return false
    }
}
const isAlphanumeric = function(ch) {
    let code = ch.charCodeAt(0);
  
    return (code >= 65 && code <= 90) || 
           (code >= 97 && code <= 122) || 
           (code >= 48 && code <= 57);   
};

const palindromes = function (str) {
    let low = 0, high = str.length-1;
    str = str.toLowerCase();
    while (low <= high) {
        if (!isAlphanumeric(str[low])) {
            low++;
            continue;
        }
        if (!isAlphanumeric(str[high])) {
            high--;
            continue;
        }
        if (str[low] !== str[high]) {
            return false;
        }
        low++;high--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

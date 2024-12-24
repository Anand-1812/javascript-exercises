const getTheTitles = function(books) {
    let titleArr = [];
    for (let i = 0;i < books.length;i++) {
        titleArr[i] = books[i].title;
    }
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;

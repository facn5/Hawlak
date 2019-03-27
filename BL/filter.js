let autocompleteFunctions = {
  findWords: function(arr, word) {
    return arr.filter(x => Object.keys(x)[0].toUpperCase().indexOf(word.toUpperCase()) > -1);
  }
}

module.exports = autocompleteFunctions;

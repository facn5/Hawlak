let autocompleteFunctions = {

  findWords: function(arr, word) {
    return arr.filter(x => Object.keys(x)[0].indexOf(word) > -1)
  }

}



  module.exports = autocompleteFunctions;

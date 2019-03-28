let cate = "";

function enableSearch(cat) {
  document.getElementById("search").style.display = "block";
  switch (cat) {
    case 'hotels':
      cate = cat;
      break;
    case 'restaurants':
      cate = cat;
      break;
    case 'otherStuff':
      cate = cat;
      break;
    default:
  }
}

keyword.oninput = function() {
  let data = getData(cate + "/" + keyword.value);
};

function getData(cat) {
  fetch(cat)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      createDiv(myJson);
    });
}

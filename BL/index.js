let cata = "";

function myFunction(cat) {
  document.getElementById("search").style.display = "block";
  switch (cat) {
    case 'hotles':
      cata = cat
      break;
    case 'restaurants':
      console.log(cat);
      cata = cat;
      console.log("cata = " + cata);
      break;
    case 'otherStuff':
      cata = cat;
      break;
    default:
  }
}


keyword.oninput = function() {
  let data = getData(cata + "/" + keyword.value);
};


function getData(cat) {
  var url = 'http://localhost:4000/';
  fetch(url + cat)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
      createDiv(myJson);
    });
}

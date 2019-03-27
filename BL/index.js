let cata = "";

function myFunction(cat) {

  // var x = document.getElementById("search");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

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
  getData(cata + "/" + keyword.value);
};


function getData(cat) {
  var url = 'http://localhost:4000/';
  fetch(url + cat)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
}

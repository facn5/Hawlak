function myFunction(cat) {

  console.log(cat);

  // var x = document.getElementById("search");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

  switch (cat) {
    case 'hotles':
      getData(cat);
      break;
    case 'restaurants':
      getData(cat);
      break;
    case 'otherStuff':
      getData(cat);
      break;
    default:
  }
}

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

function createDiv(data) {
  console.log("new test" + JSON.stringify(data));
  let newElement = document.createElement('div');
  document.getElementById('container').appendChild(newElement);

}

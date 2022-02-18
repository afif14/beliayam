const fetchPhotos = () => {
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      appendData(data);
    })
    .catch(err => {
      console.log(err);
    });
};

function appendData(data) {
  var mainContainer = document.getElementById('myData');
  for (var i = 0; i < 10; i++) {
    var div = document.createElement('div');
    div.innerHTML = 'title : ' + data[i].tittle;
    Image.innerHTML = 'image : ' + data[i].thumbnailUrl;
    mainContainer.appendChild(div);
    mainContainer.append(Image);
  }
}

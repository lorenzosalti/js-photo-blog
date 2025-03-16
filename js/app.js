// reference card HTML

/* 
<div class="card-body">
  <div class="image">
    <img src="https://marcolanci.it/boolean/assets/pictures/1.png" alt="skate park">
  </div>
  <h5>Image title</h5>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis nostrum tempore cupiditate eveniet
    cumque.
  </p>

  <img src="./img/pin.svg" alt="pin" class="pin">

</div> 
*/



// cards container
const gridContainerElement = document.getElementById('grid');

// API endpoint url
const picsEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';


// API call 
axios.get(picsEndpoint)
  .then(picsArray => {

    generateHTML(picsArray);

  });



// generating cards with image and title
function generateHTML(objArray) {

  const obj = objArray.data;

  // iteration on data array
  obj.forEach((element) => {

    const { title, url } = element;

    gridContainerElement.innerHTML += `
    <div class="card-body">
      <div class="image">
        <img src="${url}" alt="${title}">
      </div>
      <h5>${title}</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis nostrum tempore cupiditate eveniet
        cumque.
      </p>
  
      <img src="./img/pin.svg" alt="pin" class="pin">
  
    </div>`;
  });

}




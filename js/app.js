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

// overlay elements
const overlayElement = document.querySelector('.overlay');
const olCloseElement = document.querySelector('.close-btn');
const olImageElement = document.getElementById('ol-image');

// API endpoint url
const picsEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';


// API call 
axios.get(picsEndpoint)
  .then(picsArray => {

    generateHTML(picsArray);

    // array containing every card
    const cardsElements = document.querySelectorAll('.card-body');

    console.log('cardsElement: ', cardsElements);

    // iteration adding a click event on every card
    cardsElements.forEach((element) => {

      // gets the image container element
      const imageElement = element.firstElementChild;

      console.log('imageElement: ', imageElement);

      // gets the ID of the image
      const imageID = imageElement.id.toString();

      console.log('imageID: ', imageID);

      // click evento on the card
      element.addEventListener('click', function () {
        overlayElement.classList.add('active');

        // gets the current image by ID
        const currentImageElement = document.getElementById(imageID);

        console.log('currentImageElement: ', currentImageElement);

        // adds the innerHTML (img tag) of the current image
        olImageElement.innerHTML = currentImageElement.innerHTML;

        console.log('olImageElement.innerHTML: ', olImageElement.innerHTML);

      });

    });

  })
  .catch(function (error) {
    const status = error.status;
    console.log(`Error ${status}`);
  });


// click event on close button
olCloseElement.addEventListener('click', function () {
  overlayElement.classList.remove('active');
});






// generating cards with image and title
function generateHTML(objArray) {

  const obj = objArray.data;

  // iteration on data array
  obj.forEach((element) => {

    const { id, title, date, url } = element;

    gridContainerElement.innerHTML += `
    <div class="card-body">
      <div class="card-image" id="${id}">
        <img src="${url}" alt="${title}">
      </div>
      <h6>${date}</h6>
      <h5>${title}</h5>
  
      <img src="./img/pin.svg" alt="pin" class="pin">
  
    </div>`;
  });

};
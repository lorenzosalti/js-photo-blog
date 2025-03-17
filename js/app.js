

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

    // generating cards with API response
    generateHTML(picsArray);

    // array containing every card
    const cardsElements = document.querySelectorAll('.card-body');

    // iteration adding a click event on every card
    cardsElements.forEach((element) => {

      // gets the image container element
      const imageElement = element.firstElementChild;;

      // gets the ID of the image
      const imageID = imageElement.id.toString();

      // click event on the card
      element.addEventListener('click', function () {
        overlayElement.classList.add('active');

        // gets the current image by ID
        const currentImageElement = document.getElementById(imageID);

        // adds the innerHTML (img tag) of the current image into the overlay image container
        olImageElement.innerHTML = currentImageElement.innerHTML;

      });

    });

  })
  .catch(function (error) {
    // console logging the error status
    const status = error.status;
    console.log(`Error ${status}`);
  });


// click event on close button
olCloseElement.addEventListener('click', function () {
  overlayElement.classList.remove('active');
});





// FUNCTIONS

// generating cards with image and title
function generateHTML(objArray) {

  const obj = objArray.data;

  // iteration on data array
  obj.forEach((element) => {

    const { id, title, date, url } = element;

    gridContainerElement.innerHTML += `
    <div class="card-body clickable">
      <div class="card-image" id="${id}">
        <img src="${url}" alt="${title}">
      </div>
      <h6>${date}</h6>
      <h5>${title}</h5>
  
      <img src="./img/pin.svg" alt="pin" class="pin">
  
    </div>`;
  });

};
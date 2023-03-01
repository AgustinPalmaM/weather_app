window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
  e.preventDefault();
  console.log('Searching weather...');

  // validate 

  const city = document.querySelector('#ciudad').value;
  const country = document.querySelector('#pais').value;

  if( city === '' || country === '' ) {
    
    printAlert('Both fields are required');
  }

}
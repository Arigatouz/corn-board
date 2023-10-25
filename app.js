const cornColorPicker = document.querySelector('#corn-color-picker');
const cornHoleBoard = document.querySelector('.cornhole__board');
const cornHole = document.querySelector('.cornhole__hole');
const cornHoleContainer = document.querySelector('.cornhole');


//corn outline
const cornOutlineControl = document.querySelector('#add-outline');
const cornOutlineContainer = document.querySelector('.corn-outline-container');
const cornOutlinePicker = document.querySelector('#corn-outline-picker');
const cornOutlineRange = document.querySelector('#outline-range');

// corn border
const cornBorderPicker = document.querySelector('#corn-border-picker');
const cornBorderContainer = document.querySelector('.corn-border-container');
const cornAddBorderControl = document.querySelector('#add-border');
const cornBorderRange = document.querySelector('#border-range');
// hole border
const addHoleControl = document.querySelector('#add-hole');
const holeBorderContainer = document.querySelector('.corn-hole-border-container');
const holeBorderPicker = document.querySelector('#corn-hole-border-picker');
const holeBorderRange = document.querySelector('#hole-range');

// first layer 
const firstLayer = document.querySelector('.cornhole__firstlayer');
const firstLayerControl = document.querySelector('#add-first-layer');

// second layer
const secondLayer = document.querySelector('.cornhole__secondlayer');
const secondLayerControl = document.querySelector('#add-second-layer');

cornColorPicker.value = '#0d47a1';
holeBorderPicker.value = '#0d47a1';
cornBorderPicker.value = '#fbc02d';
cornOutlinePicker.value = '#fbc02d';



// background
cornColorPicker.addEventListener('input', (event) => {
  cornHoleBoard.style.backgroundColor = event.target.value;
});


// corn outline

cornOutlineControl.addEventListener('change', (event) => {
  if (event.target.checked) {
    cornAddBorderControl.checked = false;
    cornOutlineContainer.style.display = 'block';
    cornHoleContainer.style.border = `10px solid ${cornOutlinePicker.value} `;
    cornHoleContainer.style.borderRadius = '33px';
    cornBorderContainer.style.display = 'none';
    cornHoleBoard.style.border = 'none';

  } else {
    cornOutlineContainer.style.display = 'none';
    cornHoleContainer.style.border = 'none';
    cornHoleContainer.style.borderRadius = '0';

  }
});
cornOutlinePicker.addEventListener('input', (event) => {
  cornHoleContainer.style.borderColor = event.target.value;
});

cornOutlineRange.addEventListener('input', (event) => {
  cornHoleContainer.style.border = `${event.target.value}px solid ${cornOutlinePicker.value}`;
});
// corn border
cornAddBorderControl.addEventListener('change', (event) => {
  if (event.target.checked) {
    cornOutlineControl.checked = false;
    cornBorderContainer.style.display = 'block';
    cornHoleBoard.style.border = `10px solid ${cornBorderPicker.value}`;
    cornHoleContainer.style.borderRadius = '20px';
    cornOutlineContainer.style.display = 'none';
    cornHoleContainer.style.border = 'none';

  } else {

    cornBorderContainer.style.display = 'none';
    cornHoleBoard.style.border = 'none';
    cornHoleContainer.style.borderRadius = '0px';

  }
})

cornBorderPicker.addEventListener('input', (event) => {
  cornHoleBoard.style.borderColor = event.target.value;
});

cornBorderRange.addEventListener('input', (event) => {
  cornHoleBoard.style.border = `${event.target.value}px solid ${cornBorderPicker.value}`;
});
// hole border
addHoleControl.addEventListener('change', (event) => {
  if (event.target.checked) {
    holeBorderContainer.style.display = 'block';
    cornHole.style.boxShadow = `0 0 0 10px ${holeBorderPicker.value} `
  } else {
    holeBorderContainer.style.display = 'none';
    cornHole.style.boxShadow = 'none'
  }
});
holeBorderPicker.addEventListener('input', (event) => {
  cornHole.style.boxShadow = `0 0 0 10px ${event.target.value}`;
});

holeBorderRange.addEventListener('input', (event) => {
  cornHole.style.boxShadow = `0 0 0 ${event.target.value}px ${holeBorderPicker.value}`;
});

// add first Layer
firstLayerControl.addEventListener('change', (event) => {
  if (event.target.checked) {
    console.log(secondLayer.nextElementSibling)
    firstLayer.style.display = 'block';
  } else {
    firstLayer.style.display = 'none';
  }
});
// add second Layer
secondLayerControl.addEventListener('change', (event) => {
  if (event.target.checked) {
    secondLayer.style.display = 'block';
  } else {
    secondLayer.style.display = 'none';
  }
});


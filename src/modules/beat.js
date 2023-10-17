let icons = document.querySelectorAll('i');  

const addBeat = () => {
  document.addEventListener('mouseover', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I') {
      iconEvent.classList.add('fa-beat');
    }
  })
}

const removeBeat = () => {
  document.addEventListener('mouseout', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I') {
      iconEvent.classList.remove('fa-beat');
    }
  })
}

export { icons, addBeat, removeBeat };

let icons = document.querySelectorAll('i');  

function addBeat() {
    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.classList.add('fa-beat');
        });
    });
}

function removeBeat() {
    icons.forEach(icon => {
      icon.addEventListener('mouseout', function() {
        icon.classList.remove('fa-beat');
      });  
    })
}

export { icons, addBeat, removeBeat };

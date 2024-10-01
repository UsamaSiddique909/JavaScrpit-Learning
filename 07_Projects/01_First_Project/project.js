const buttons = document.querySelectorAll('.button')
const bodies = document.querySelector('body')

buttons.forEach(function(button){
   // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        console.log(`Click Color is ${e.target.id}`)
        if(e.target.id === 'grey'){
            bodies.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'white'){
            bodies.style.backgroundColor = 'white';
        }
        if(e.target.id === 'blue'){
            bodies.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'yellow'){
            bodies.style.backgroundColor = 'yellow';
        }
    })

})
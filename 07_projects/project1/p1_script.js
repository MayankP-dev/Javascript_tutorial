// objective: to change the background of the page once any of the boxes are clicked  

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons);

buttons.forEach(function(button){
    // console.dir(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);

        if(event.target.id == 'grey'){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id == 'white'){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id == 'blue'){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id == 'yellow'){
            body.style.backgroundColor=event.target.id
        }
        
    })
    
})



const form = document.querySelector('form')

// this use case will give empty values 

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')


    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    } 
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        // show the result
        result.innerHTML = `<span> bmi is: ${bmi}</span>`;
    }
    
})
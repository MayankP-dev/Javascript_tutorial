const clock = document.getElementById('time')
// const clock = document.querySelector('#time')



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //why 1000, time is in ms, 1s=1000ms
